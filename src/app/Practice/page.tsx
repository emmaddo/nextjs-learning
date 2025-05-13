"use client";
import React from 'react';

const numberArray: number[] = [9, 8, 2];
const newProduced: any = [...numberArray];



export default function playWithReduce(){
    return(<div className='flex flex-col bg-gray-600 items-center justify-between p-4 m-4'>
        <p className='text-white text-2xl p-2 m-2'>{`The spread element is: ${newProduced} and datatype is ${typeof(newProduced)} and datatype of the original array is: ${typeof(numberArray)}`}</p>
        <p className='text-white text-2xl p-2 m-2'>{Array.isArray(newProduced) && Math.max(...newProduced)
            }</p>
    </div>);
    
}