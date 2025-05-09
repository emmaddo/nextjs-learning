"use client";
import React, {useState} from 'react';

export default function ContactForm(){
    const [fullname, setFullName] = useState<string>('');
    const [isLoading, setisLoading] = useState<boolean>(false);
    const processForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setisLoading(true);
        console.log(`The inputted name is ${fullname}`);

        //micking an api call using setTimeout for demo
        setTimeout(() => {
            console.log(`A timeout just occured`); 
            setisLoading(false);
        }
            ,1000);
    }

    const processFullName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }
return(
    <div id='wrapper' className='flex bg-gray-400 justify-center items-center'>
        <form onSubmit={processForm}>
<div>
    <label htmlFor='fullName' className='bg-blue-400 text-white p-2 m-4'>
        <input className='bg-blue-400 text-white p-2 m-2 rounded'
        type='text'
        id='fullName'
        placeholder='Enter FullName'
        value={fullname}
        onChange={processFullName}
        required
        />
    </label>
</div>
<div>
    <button className='bg-blue-600 text-white rounded m-4 p-4' type="submit">{isLoading ? 'Loading': 'Submit Form'}</button>
</div>
        </form>
    </div>
);
}