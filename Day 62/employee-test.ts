// HandsOn 1
// import { Employee } from "./employee";
// let assignValue: Employee = {id : 1001, name: "Rishabh", salary: 30000, permanent: true, department: dept, skills: skills};

// console.log("id: "+assignValue.id);
// console.log("name: "+assignValue.name);
// console.log("salary: "+assignValue.salary);
// console.log("permanent: "+assignValue.permanent);

// HandsOn 2
// import { Employee } from "./employee";
// import { Department } from "./department";

// let dept: Department = {id: 1, name: "payroll"};
// let assignValue: Employee = {id : 1001, name: "Rishabh", salary: 30000, permanent: true, department: dept, skills: skills};

// console.log("id: "+assignValue.id);
// console.log("name: "+assignValue.name);
// console.log("salary: "+assignValue.salary);
// console.log("permanent: "+assignValue.permanent);
// console.log("Department Id: "+assignValue.department.id);
// console.log("Department name: "+assignValue.department.name);

// HandsOn 3
// import { Employee } from "./employee";
// import { Department } from "./department";
// import {Skill} from "./skill";

// let skills: Array<Skill> = [{id: 1, name: "HTML"},{id: 2, name:"CSS"},{id: 3, name: "JavaScript"}];
// let dept: Department = {id: 1, name: "payroll"};
// let assignValue: Employee = {id : 1001, name: "Rishabh", salary: 30000, permanent: true, department: dept, skills: skills};

// console.log("id: "+assignValue.id);
// console.log("name: "+assignValue.name);
// console.log("salary: "+assignValue.salary);
// console.log("permanent: "+assignValue.permanent);
// console.log("Department Id: "+assignValue.department.id);
// console.log("Department name: "+assignValue.department.name);
// for(let i = 0;i< assignValue.skills.length;i += 1){
//     console.log("skill["+i+"]:"+assignValue.skills[i].id+", "+assignValue.skills[i].name);
// }

// HandsOn 4
import { Department } from "./department";
import { Employee } from "./employee";
import {Skill} from "./skill";

class EmployeeTest implements Employee{
    id ?: number;
    name?: string;
    salary?: number;
    permanent?: boolean;
    department?: Department;
    skills?: Skill[];

    constructor(id : number, name: string, salary: number, permanent: boolean, department: Department, skills: Skill[]){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
        this.department = department;
        this.skills = skills;
    }

    display(){
        console.log("id: "+this.id);
        console.log("name: "+this.name);
        console.log("salary: "+this.salary);
        console.log("permanent: "+this.permanent);
        console.log("Department Id: "+this.department.id);
        console.log("Department name: "+this.department.name);
        for(let i = 0;i< this.skills.length;i += 1){
            console.log("skill["+i+"]:"+this.skills[i].id+", "+this.skills[i].name);
        }
    }
}

let skills: Array<Skill> = [{id: 1, name: "HTML"},{id: 2, name:"CSS"},{id: 3, name: "JavaScript"}];
let dept: Department = {id: 1, name: "payroll"};
var employee = new EmployeeTest(1001,"Rishabh",30000,true,dept,skills);
employee.display();