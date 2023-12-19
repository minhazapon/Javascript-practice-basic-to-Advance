

var students = [ 

  {
    id: 101,
    name: "minhaz",
    gpa: 3.17

  },

  
  {
    id: 102,
    name: "apon",
    gpa: 4.00

  },
  

  
  {
    id: 103,
    name: "apon007",
    gpa: 5.00

  },



  {
    id: 103,
    name: "non007",
    gpa: 2.11

  },





  {
    id: 103,
    name: "law007",
    gpa: 2.44

  },
]


const studentNames = () => students.filter((x) =>  x.gpa > 3 );



console.log(studentNames())
  





