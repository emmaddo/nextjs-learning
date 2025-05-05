"use client";
import React from 'react';

interface User{
  id: number,
  name: string,
  age: number
}

let mockData: User[] = [
  {
    id: 1,
    name: 'Pirro',
    age: 9
  },
  {
    id: 2,
    name: 'Bature',
    age: 6
  }
];

const status: string = 'allowed';



export default function UserList(){
  return(
    <div>
      {status === 'allowed' ? (
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          { 
            mockData.map((user, Index) => 
              <tr key={user.id}>
                <td>{Index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ) 
          }
        </tbody>
      </table>) : (<p>You are not allowed access</p>)
      }
    </div>
  );
}