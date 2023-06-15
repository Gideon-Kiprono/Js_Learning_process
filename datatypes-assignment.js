const data = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      salary: 5000,
      skills: ["Javascript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
      salary: 4000,
      skills: ["Leadership", "Problem Solving", "Project Management"],
    },
  ],
  companyName: "Eldohub",
};

//TASKS
//1. Log the word Manager from this dataset
console.log(data.employees[0].position);
//2.Log the salary of the second employee
console.log(data.employees[1].salary);
// 3.Print the last skill of the  employee JOhn Doe (node.js)
console.log(data.employees[0].skills[2]);
