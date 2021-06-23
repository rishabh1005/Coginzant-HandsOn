"use strict";
// import { Department } from "./department";
// import { Employee } from "./employee";
// import {Skill} from "./skill";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(id, name, salary, permanent, department, skills) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
        this.department = department;
        this.skills = skills;
    }
    EmployeeTest.prototype.display = function () {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("salary: " + this.salary);
        console.log("permanent: " + this.permanent);
        console.log("Department Id: " + this.department.id);
        console.log("Department name: " + this.department.name);
        for (var i = 0; i < this.skills.length; i += 1) {
            console.log("skill[" + i + "]:" + this.skills[i].id + ", " + this.skills[i].name);
        }
    };
    return EmployeeTest;
}());
var skills = [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }, { id: 3, name: "JavaScript" }];
var dept = { id: 1, name: "payroll" };
var employee = new EmployeeTest(1001, "Rishabh", 30000, true, dept, skills);
employee.display();
