

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp)=>{
    if(emp.profession==="developer"){
      console.log(emp);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp)=>{
    if(emp.profession==="developer"){
      console.log(emp);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const emp= {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(emp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter((emp)=>emp.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmps= [
    {id: 5, name: "charan", age: "22", profession: "developer"},
    {id: 6, name: "manogna", age: "21", profession: "designer"},
    {id: 7, name: "sarvika", age: "23", profession: "manager"}
  ];
  arr=arr.concat(newEmps);
  console.log(arr);
}
