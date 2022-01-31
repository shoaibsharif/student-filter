import departments from "@/json/departments.json";
import React, { Fragment, useEffect, useState } from "react";
import classNames from "../lib/classNames";
import ActiveDepartmentCard from "./ActiveDepartmentCard";
import DepartmentCard from "./DepartmentCard";

const Layout: React.FC = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState({
    name: "All Departments",
    subjects: ["All Subjects"],
  });
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.has("department") && params.has("subject")) {
      setActiveDepartment(
        findSelectedDepartment(
          params.get("department") as string,
          params.get("subject") as string
        )
      );
    }
  }, [location.search]);

  const findSelectedDepartment = (department: string, subject: string) => {
    let activeDepartment = {
      ...departments.departments.filter((dep) => dep.name === department)[0],
    };
    activeDepartment.subjects = [
      subject,
      ...activeDepartment.subjects.filter((subj) => subj !== subject),
    ];

    return activeDepartment;
  };

  return (
    <Fragment>
      <header>
        <section
          className={classNames("filter-list", expanded ? "expanded" : "")}
        >
          <a className="btn btn-expand" onClick={() => setExpanded(!expanded)}>
            {expanded ? "-" : "+"}
          </a>
          <div className="department-list">
            {expanded ? (
              <>
                {[
                  ...departments.departments,
                  { name: "All Departments", subjects: ["All Subjects"] },
                ].map((department) => (
                  <DepartmentCard
                    department={department}
                    key={department.name.toLowerCase().replaceAll(" ", "-")}
                    activeDepartment={activeDepartment}
                  />
                ))}
              </>
            ) : (
              <ActiveDepartmentCard {...activeDepartment} />
            )}
          </div>
        </section>
      </header>
      {props.children}
    </Fragment>
  );
};

export default Layout;
