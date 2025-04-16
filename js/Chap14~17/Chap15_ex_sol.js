console.log("==============ex1");

const hrTeam = {id: 1, dname: '인사팀'};  
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];  
const hong1 = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim1 = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];


const deptMap = new Map(depts.map(dept => [dept.id, dept]));
const empMap = new Map(emps.map(emp => [emp.id, emp]));
const empDept = new Map(
    emps.map(({id, name, dept}) => [id, deptMap.get(dept)]));
    // emps.map(emp => {
    //     const tmpDept = emp.dept;
    //     delete emp.dept;
    //     return [emp, deptMap.get(tmpDept)]
    // })
// );

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname);

console.log("==============ex2");
Array.prototype.uniqBy = function(prop) {
    // return new Set(this.map(a => a[prop]));

    // const s = new Set(this.map(a => a[prop]));
    // return [ ...s.keys()];
    
    // return [... new Set(this.Map(a => a[prop]))];
};

const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const users = [ hong, kim, lee, park, ko, loon, choi ];
users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]