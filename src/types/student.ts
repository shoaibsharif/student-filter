export interface IStudent {
  id: number;
  familyName: string;
  givenName: string;
  department: string;
  subject: string;
  mentor: {
    id: string;
    givenName: string;
    familyName: string;
  };
  dob: string;
  admitDate: string;
  anticipatedGraduationDate: string;
}
