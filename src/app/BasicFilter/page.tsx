"use client";
import React from 'react';

const arrayOfNumbers: number[] = [5, 3, 2, 4, 9, 5];

const highestNumber: number = arrayOfNumbers.reduce((initialValue: number, currentValue: number)=>{
    if(currentValue > initialValue){
            return currentValue;
         }
    else{
            return initialValue;
         }
} )

export default function playWithReduce(){
    return(<div className='flex flex-col bg-gray-400 items-center justify-between p-4 m-4'>
        <p className='text-white text-2xl p-2 m-2'>{`The higest number is ${highestNumber}`}</p>
    </div>);
    
}