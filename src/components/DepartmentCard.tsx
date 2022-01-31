import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "../lib/classNames";
import { IDepartment } from "../types/department";

const DepartmentCard = (props: {
  department: IDepartment;
  activeDepartment: IDepartment;
}) => {
  const departmentRef = useRef<HTMLDivElement>(null);
  const [isTruncated, shouldTruncate] = useState(false);

  const changeQueryParams = (department: string, subject: string) => {
    if (!subject.includes("All Subjects"))
      location.search = `department=${encodeURIComponent(
        department
      )}&subject=${encodeURIComponent(subject)}`;
    else location.search = "";
  };
  useEffect(() => {
    if (
      departmentRef.current &&
      departmentRef.current.offsetWidth < departmentRef.current.scrollWidth
    ) {
      shouldTruncate(true);
    }
  }, []);

  return (
    <div className={classNames("department ", isTruncated ? "relative" : "")}>
      <div
        className={classNames(
          "dept-name peer",
          props.activeDepartment.name.includes(props.department.name)
            ? "active"
            : ""
        )}
        ref={departmentRef}
      >
        {props.department.name}
      </div>
      {isTruncated && (
        <div className="department-name-tooltip invisible peer-hover:visible">
          <div className="tooltip-content">{props.department.name}</div>
        </div>
      )}
      <div className="subjects-wrapper">
        {props.department.subjects.map((subject, subjectIdx) => (
          <div
            className={classNames(
              "subject-name",
              props.activeDepartment.subjects[0] === subject ? "active" : ""
            )}
            key={`subject-${subjectIdx}`}
            onClick={() => changeQueryParams(props.department.name, subject)}
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentCard;
