"use client";
 import React from 'react'
const a: number[] = [6, 2, 3, 4, 3, 5, 1];

const maxNumber = a.reduce((accumulator: number, currentValue: number)=>{
return Math.max(accumulator, currentValue);
});

console.log(maxNumber);
 export default function playPlay(){
    return(
        <div></div>
    );
 }