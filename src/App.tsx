import { useEffect, useState } from "react";
import { useGetStudents } from "./lib/filterStudents";
import logo from "./logo.svg";
import dayjs from "dayjs";
import Layout from "./components/Layout";
import StudentCard from "./components/StudentCard";
function App() {
  const { data, isLoading } = useGetStudents(location.search);

  return (
    <Layout>
      <section>
        <div className="data-wrapper">
          <ul className="filtered-student">
            {!isLoading &&
              data.map((student) => (
                <StudentCard {...student} key={student.id} />
              ))}
          </ul>
          {data.length === 0 && <p>No available data</p>}
        </div>
      </section>
    </Layout>
  );
}

export default App;
