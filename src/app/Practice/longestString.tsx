"use client";
import React from 'react';

const stringArray: string[] = ['Prince', 'Rhema', 'Deborah'];

const longestString: string = stringArray.reduce((initialValue: string, currentValue: string) =>{
    if(currentValue.length > initialValue.length){
        return currentValue;
    }
    else{
        return initialValue;
    }
}

, ''); 

export default function playWithReduce(){
    return(<div className='flex flex-col bg-gray-600 items-center justify-between p-4 m-4'>
        <p className='text-white text-2xl p-2 m-2'>{`The element with the longest string is ${longestString}`}</p>
    </div>);
    
}