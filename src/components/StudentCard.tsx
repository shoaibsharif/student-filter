import React from 'react';
import { IStudent } from '../types/student';
import dayjs from "dayjs"

const StudentCard = (student: IStudent) => {

  const convertDOBDate = (date: string) => {
    const dobDate = new Date(date);

    return `${dobDate.getMonth() + 1}/${
      dobDate.getDate() + 1
    }/${dobDate.getFullYear()}`;
  };

  const convertAdmitDate = (date: string) => dayjs(date).format("MMM DD, YYYY")

  const convertAnticipatedGraduationDate = (date: string) => dayjs(date).format(
    "MMM YYYY"
  )
  return  <li key={student.id}>
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
      {convertAdmitDate(student.admitDate)}
    </span>
  </span>
  <span className="grad-date">
    Anticipated Graduation:{" "}
    <span className="value">
      {convertAnticipatedGraduationDate(student.anticipatedGraduationDate)}
    </span>
  </span>
  <span className="mentor">
    Mentor:
    <span className="value">
      {student.mentor.familyName}, {student.mentor.givenName}
    </span>
  </span>
</li>;
};

export default StudentCard;
