
import { useState } from "react";
import "./Students.css"

export default function Students() {
    const students = [
  {
    id: 1,
    name: "Muhammad Ahmed",
    course: "React.js",
    status: "Present",
  },
  {
    id: 2,
    name: "Abdul Rehman",
    course: "JavaScript",
    status: "Absent",
  },
  {
    id: 3,
    name: "Muhammad Hamza",
    course: "HTML & CSS",
    status: "Present",
  },
  {
    id: 4,
    name: "Ali Hassan",
    course: "Node.js",
    status: "Present",
  },
  {
    id: 5,
    name: "Usman Khan",
    course: "MongoDB",
    status: "Absent",
  },
  {
    id: 6,
    name: "Bilal Ahmed",
    course: "Python",
    status: "Present",
  },
  {
    id: 7,
    name: "Zain Ali",
    course: "React.js",
    status: "Absent",
  },
  {
    id: 8,
    name: "Muhammad Ibrahim",
    course: "JavaScript",
    status: "Present",
  },
  {
    id: 9,
    name: "Ahsan Ullah",
    course: "HTML & CSS",
    status: "Present",
  },
  {
    id: 10,
    name: "Saad Ahmed",
    course: "Express.js",
    status: "Absent",
  },
  {
    id: 11,
    name: "Hammad Ali",
    course: "React.js",
    status: "Present",
  },
  {
    id: 12,
    name: "Talha Khan",
    course: "Next.js",
    status: "Present",
  },
  {
    id: 13,
    name: "Muhammad Umar",
    course: "Bootstrap",
    status: "Absent",
  },
  {
    id: 14,
    name: "Huzaifa Ahmed",
    course: "JavaScript",
    status: "Present",
  },
  {
    id: 15,
    name: "Abu Bakar",
    course: "TypeScript",
    status: "Present",
  },
  {
    id: 16,
    name: "Yahya Khan",
    course: "Node.js",
    status: "Absent",
  },
  {
    id: 17,
    name: "Mohsin Ali",
    course: "React.js",
    status: "Present",
  },
  {
    id: 18,
    name: "Sufyan Ahmed",
    course: "MongoDB",
    status: "Absent",
  },
  {
    id: 19,
    name: "Daniyal Khan",
    course: "Python",
    status: "Present",
  },
  {
    id: 20,
    name: "Owais Ahmed",
    course: "HTML & CSS",
    status: "Present",
  },
  {
    id: 21,
    name: "Muhammad Talha",
    course: "Express.js",
    status: "Absent",
  },
  {
    id: 22,
    name: "Shayan Ali",
    course: "React.js",
    status: "Present",
  },
  {
    id: 23,
    name: "Fahad Khan",
    course: "Next.js",
    status: "Present",
  },
  {
    id: 24,
    name: "Rayan Ahmed",
    course: "Bootstrap",
    status: "Absent",
  },
  {
    id: 25,
    name: "Abdullah Hassan",
    course: "TypeScript",
    status: "Present",
  },
];

    let [search, setSearch] = useState("")

    let filterStudents = students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase()) || student.status.toLowerCase().includes(search.toLowerCase())
    })

    return <div className="container">
        <h1>Student Course Details</h1>
        <input type="text" className="search-box" name="text" id="text" placeholder="Search by Name/Present" value={search} onChange={(e) => {setSearch(e.target.value)}} />
        <div className="student-card student-card-headings">
            <p>#</p>
            <h3>Student Name</h3>
            <h4>Course</h4>
            <h5>Status</h5>
        </div>
            {filterStudents.length > 0 ? filterStudents.map((student) => {
            return <div className="student-card" key={student.id}>
                <p>{student.id}</p>
                <h3>{student.name}</h3>
                <h4>{student.course}</h4>
                <h5>{student.status}</h5>
            </div>
            }) :  <h2>No Student Found</h2>}
    </div>

}



