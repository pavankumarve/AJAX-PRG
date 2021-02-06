'use strict';
const employees=[
    {
    name:'pavan',
    gender:'M',
    degree:'BE',
    },
    {
    name:'sai',
    gender:'M',
    degree:'MBA',
    },
    {
    name:'hari',
    gender:'F',
    degree:'BE',
    },
];


//for first object

// const e=employees[0];
// const tr= document.createElement('TR');
// const td1= document.createElement('TD');
// const td2= document.createElement('TD');
// const td3= document.createElement('TD');
// const td4= document.createElement('TD');

// td1.innerText =1;
// td2.innerText =e.name;
// td3.innerText =e.gender == 'M' ? 'Male' : 'Female';
// td4.innerText =e.degree;

// tr.append(td1,td2,td3,td4);
// const list=document.getElementById('employee-list');
// list.append(tr);

const list=document.getElementById('employee-list');
employees.forEach((e, i) =>{

const tr= document.createElement('TR');
const td1= document.createElement('TD');
const td2= document.createElement('TD');
const td3= document.createElement('TD');
const td4= document.createElement('TD');

td1.innerText =i + 1;
td2.innerText =e.name;
td3.innerText =e.gender == 'M' ? 'Male' : 'Female';
td4.innerText =e.degree;

tr.append(td1,td2,td3,td4);
list.append(tr);

})

