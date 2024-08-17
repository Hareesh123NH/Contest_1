/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee=> {
        if(employee.profession==="developer"){
            console.log(employee);
            }
     });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach(employee=> {
        if(employee.profession==="developer"){
            console.log(employee);
            }
     });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee={id:4,name:"Hari",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(employee=>employee.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
          {id: 5, name: "charan", age: "22", profession: "developer"},
          {id: 6, name: "manogna", age: "21", profession: "designer"},
          {id: 7, name: "sarvika", age: "23", profession: "manager"}
      ];
      let combinedArray = arr.concat(newEmployees);
      console.log(combinedArray);
}
