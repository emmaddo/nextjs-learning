"use client";
 import React, {useState} from 'react';

 export default function testModal(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const processModal = (e:React.MouseEvent<HTMLButtonElement>)=>{
setIsOpen(true);
    }
return(
    <div id='wrapper' className='flex flex-col bg-gray-400 justify-center items-center'>

{isOpen && 
<div className='flex fixed bg-blue-400 justify-center items-center z-50 rounded'>
    <p className='text-white text-2xl m-4 p-4'>This is a text in a modal</p>
</div>}
        <p className='text-white text-2xl m-4 p-4'>Click this button to see a modal</p>
        <button type='button' onClick={processModal} className='bg-blue-600 text-white rounded m-4 p-4'>Make Assessment</button>
        

    </div>
);
 }
 