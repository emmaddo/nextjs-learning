"use client";
import React from 'react';
interface Students {
    id: number,
    name: string,
    class: string,
    status: boolean
}

const numberArray: number[] = [9, 8, 2, 7];
const stringArray: string[] = ['Prince', 'Deborah', 'Rhema'];
const seaddoStudents: Students[] = [
    {
        id: 1,
        name: 'Pirro',
        class: 'Year 3',
        status: true
    },
    {
        id: 2,
        name: 'Bature',
        class: 'Year 1',
        status: true
    },
    {
        id: 3,
        name: 'Debby',
        class: 'JS1',
        status: false
    }
];

const StudentsExist: boolean = seaddoStudents.some((student) => student.status === true);
const activeStudents: Students[] = seaddoStudents. filter((students) => students.status === true);
console.log(activeStudents);

const numberExists: boolean = numberArray.includes(4);

const lessthan7: number[] = numberArray.filter((value: number) => value <= 7 );

const namesThatIncludeA: string[] = stringArray.filter((item:string) => item.includes('a'));



export default function playWithReduce(){
    return(<div className='flex flex-col bg-gray-600 items-center justify-between p-4 m-4'>
        <p className='text-white text-2xl p-2 m-2'>{`Does the  number exists?: ${numberExists}`}</p>
        <p className='text-white text-2xl p-2 m-2'>{`The filtered array less than 7 is: ${lessthan7}`}</p>
        <p className='text-white text-2xl p-2 m-2'>{`The filtered array that contains 'a' in it is: ${namesThatIncludeA}`}</p>
        <p className='text-white text-2xl p-2 m-2'>{`Does an active studend exist status: ${StudentsExist}`}</p>
       
          {  <table className='p-2 m-2'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Class</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                  {
                    activeStudents.map((student, Index) => 
                        <tr key={Index}>
                            <td>{Index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.status}</td>
                        </tr>
                    )
                  }                   
                </tbody>
            </table>
}
       
    </div>);
    
}