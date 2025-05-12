"use client";
import React from 'react';

const arrayOfNumbers: number[] = [5, 3, 3, 2, 4, 9, 5];

const lowestNumber: number = arrayOfNumbers.reduce((initialValue: number, currentValue: number)=>{
    if(initialValue < currentValue){
        return initialValue
    }
    else{
        return currentValue;
    }
} )

export default function playWithReduce(){
    return(<div className='flex flex-col bg-gray-400 items-center justify-between p-4 m-4'>
        <p className='text-white text-2xl p-2 m-2'>{`The lowest number is ${lowestNumber}`}</p>
    </div>);
    
}