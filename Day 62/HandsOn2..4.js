// HandsOn 2
const values = '{"firstName" : "John", "lastName" : "Stoke","Salary" : 5000,"permanentStaff" : true}';
let Object = JSON.parse(values);

// for(obj in Object){
//     console.log(obj + ": "+Object[obj]);
// }


// HandsOn 3
const dept_values = JSON.parse('{"department id": 3, "department name": "payroll"}');
Object = {
    ...Object,
    ...dept_values
};

// for(obj in Object){
//     console.log(obj + ": "+Object[obj]);
// }


//HandsOn 4
const skills = JSON.parse('{"skill":[ {"id": 1, "value": "HTML"},{"id": 2, "value": "CSS"},{"id": 3, "value": "JavaScript"}]}');
Object = {
    ...Object,
    ...skills
};


for(obj in Object){
    if(obj=="skill"){
        let i = 1;
        for(sk in Object[obj]){
            console.log(obj +" "+i+": "+ Object[obj][i-1].id + ", "+ Object[obj][i-1].value);
            i += 1
        }
    }
    else console.log(obj + ": "+Object[obj]);
}