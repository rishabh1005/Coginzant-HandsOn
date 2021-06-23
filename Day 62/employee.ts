
//HandsOn 1 
// export interface Employee{
//     id ?: number;
//     name?: string;
//     salary?: number;
//     permanent?: boolean;
// }

// HandsOn 2
// import { Department } from "./department";
// export interface Employee{
//     id ?: number;
//     name?: string;
//     salary?: number;
//     permanent?: boolean;
//     department?: Department;
// }

// HandsOn 3 and HandsOn 4
import { Department } from "./department";
import {Skill} from "./skill";
export interface Employee{
    id ?: number;
    name?: string;
    salary?: number;
    permanent?: boolean;
    department?: Department;
    skills?: Skill[];
}