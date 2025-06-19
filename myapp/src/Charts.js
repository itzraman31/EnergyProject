import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"
const Charts = () => {
  const students = [
    { name: "Ramandeep", salary: 35000, bonus: 12000, course: "B.Tech CSE" },
    { name: "Simran", salary: 27500, bonus: 8500, course: "BCA" },
    { name: "Aman", salary: 96500, bonus: 45000, course: "BBA" },
    { name: "Gurpreet", salary: 12000, bonus: 10000, course: "MBA" },
    { name: "Navjot", salary: 55000, bonus: 21500, course: "MCA" }
  ];

  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>

        <LineChart width={400} height={400} data={students} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip />
          <Legend />

          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />

          <Line type="monotone" dataKey="salary" stroke="#ff7300" activeDot="no" />
          <Line type="monotone" dataKey="bonus" stroke="#387908" />

        </LineChart>

      </ResponsiveContainer>
    </>
  )
}

export default Charts
