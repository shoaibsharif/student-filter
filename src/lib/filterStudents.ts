import students from "@/json/student.json";
import { useEffect, useState } from "react";
import { IStudent } from "../types/student";

export const useGetStudents = (params: string) => {
  const [isLoading, setLoading] = useState(false);

  const [data, setData] = useState<IStudent[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(params);
    setLoading(true);
    setData(() => {
      setLoading(false);
      return students?.body.studentData.students.filter((student) => {
        if (urlParams.has("department") && urlParams.has("subject")) {
          return student.subject.includes(urlParams.get("subject") as string);
        } else if (urlParams.has("department")) {
          return student.department === urlParams.get("department");
        } else if (urlParams.has("subject")) {
          return student.subject.includes(urlParams.get("subject") as string);
        }
        return true;
      });
    });
  }, [params]);

  return { data, isLoading };
};

// i.e.
