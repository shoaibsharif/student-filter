import React, { useEffect, useRef, useState } from "react";
import classNames from "../lib/classNames";
import { IDepartment } from "../types/department";

const ActiveDepartmentCard = (activeDepartment: IDepartment) => {
  const subjectWrapper = useRef<HTMLDivElement>(null);
  const [isTruncated, shouldTruncate] = useState(false);
  const [truncateNode, setTruncateNode] = useState<number>();
  const [subjectExpanded, setSubjectExpanded] = useState(false);

  const [deptTruncated, shouldDeptTruncated] = useState(false);

  useEffect(() => {
    if (subjectWrapper.current) {
      const subjectWrapperWidth = getElWidth(subjectWrapper.current);

      let childrenWidth = 0;
      const subjectWrapperChildren = subjectWrapper.current.children;

      for (let i = 0; i < subjectWrapperChildren.length; i++) {
        childrenWidth += getElWidth(subjectWrapperChildren[i]);

        // break if (previous subject + current subject width) with [+ more] button
        // is more than subject wrapper width
        // and get index to start the truncation
        if (childrenWidth > subjectWrapperWidth) {
          if (
            childrenWidth - (getElWidth(subjectWrapperChildren[i - 1]) + 100) <
            subjectWrapperWidth
          ) {
            setTruncateNode(i - 1);
          } else {
            setTruncateNode(i);
          }
          shouldTruncate(true);

          break;
        }
      }
    }
  }, [subjectWrapper.current]);

  const getElWidth = (el: Element) => el.getBoundingClientRect().width;
  // when Click on Subject navigate to the page with current subject
  const changeQueryParams = (department: string, subject: string) => {
    if (!subject.includes("All Subjects"))
      location.search = `department=${encodeURIComponent(
        department
      )}&subject=${encodeURIComponent(subject)}`;
    else location.search = "";
  };

  const truncateCount = (truncateNode: number) =>
    activeDepartment.subjects.length - truncateNode;

  const toggleSubjectExpanded = () => setSubjectExpanded(!subjectExpanded);
  return (
    <div className="department">
      <div
        className="dept-name dept-name--state-active peer"
        ref={(el) => {
          if (el) shouldDeptTruncated(el?.offsetWidth < el?.scrollWidth);
        }}
      >
        {activeDepartment.name}
      </div>
      {deptTruncated && (
        <div className="invisible department-name-tooltip peer-hover:visible">
          <div className="tooltip-content">{activeDepartment.name}</div>
        </div>
      )}
      <div className="subjects-wrapper" ref={subjectWrapper}>
        {activeDepartment.subjects.map((subject, subjectIdx) => (
          <div
            className={classNames(
              "subject-name",
              subjectIdx == 0 ? "subject-name--state-active" : "",
              truncateNode && truncateNode <= subjectIdx && !subjectExpanded
                ? "hidden"
                : "block"
            )}
            key={`subject-${subjectIdx}`}
            onClick={() => changeQueryParams(activeDepartment.name, subject)}
          >
            {subject}
          </div>
        ))}
        {isTruncated && (
          <div className="more-less">
            {subjectExpanded ? (
              <button onClick={toggleSubjectExpanded}>collapse</button>
            ) : (
              <button onClick={toggleSubjectExpanded}>
                +{truncateCount(truncateNode ?? 0)} more
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveDepartmentCard;
