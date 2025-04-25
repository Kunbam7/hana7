"use strict";
let hong = { id: 1, name: 'Hong' };
hong = Object.assign({ id: 1 }, { name: 'Kim' });
// hong = {id: 2, name: 'Kim', addr: 'Seoul'};         // TUser type에 담기때문? 
hong = { id: 2, name: 'Kim', addr: 'Seoul' }; //  
const hongX = { id: 2, name: 'Kim', addr: 'Seoul' }; // freshness 만들어서 담기
hong = hongX; // freshness off state?
console.log(hong);
const obj = {};
hong = obj;
