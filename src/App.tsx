import { useEffect, useState } from "react";
import { useGetStudents } from "./lib/filterStudents";
import logo from "./logo.svg";
import dayjs from "dayjs";
import Layout from "./components/Layout";
function App() {
  const { data, isLoading } = useGetStudents(location.search);

  const convertDOBDate = (date: string) => {
    const dobDate = new Date(date);

    return `${dobDate.getMonth() + 1}/${
      dobDate.getDate() + 1
    }/${dobDate.getFullYear()}`;
  };
  return (
    <Layout>
      <section>
        <div className="data-wrapper">
          <ul className="filtered-student">
            {!isLoading &&
              data.map((student) => (
                <li key={student.id}>
                  <span className="name">
                    {student.familyName}, {student.givenName}
                  </span>
                  <span className="dob">
                    DOB:{" "}
                    <span className="value">{convertDOBDate(student.dob)}</span>
                  </span>
                  <span className="admit-date">
                    Admitted:{" "}
                    <span className="value">
                      {dayjs(student.admitDate).format("MMM DD, YYYY")}
                    </span>
                  </span>
                  <span className="grad-date">
                    Anticipated Graduation:{" "}
                    <span className="value">
                      {dayjs(student.anticipatedGraduationDate).format(
                        "MMM YYYY"
                      )}
                    </span>
                  </span>
                  <span className="mentor">
                    Mentor:{" "}
                    <span className="value">
                      {student.mentor.familyName}, {student.mentor.givenName}
                    </span>
                  </span>
                </li>
              ))}
          </ul>
          {data.length === 0 && <p>No available data</p>}
        </div>
      </section>
    </Layout>
  );
}

export default App;
