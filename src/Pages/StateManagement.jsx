import React from 'react'
import { useState } from 'react'

const StateManagement = () => {
    {/** (1) name- initial value;  setName- to change the value*/}
    const [name, setName] = useState('Fhelry')

    const[number, setNumber] = useState(0)

    const handleClickNumberNext = () =>{
        setNumber(number + 1)
    }
    const handleClickNumberPrev = () =>{
        if(number <= 0){
            return;
        }else
        setNumber(number - 1)
    }
    

    {/** (4) onClick- Function */}
    const handleClickName = () => {
        setName('Rosheny')
    }
    

  return (
    <>
    <div className='flex justify-center items-center h-screen w-screen bg-blue-200'>
        <div className="flex flex-col w-80 h-80 bg-white rounded-lg shadow-xl">
            <div className='text-center p-4 font-bold text-xl'>UseStateHooks</div>
            {/** (2) This is the "name" declared in the useState */}
            <div className='text-center'>Name: {name}</div>
            {/** (3) Button- When clicked, it will call the handleClick */}
            <div className="flex justify-center mt-2">
            <button onClick={handleClickName} className='bg-yellow-200 w-[50%] rounded-lg shadow-md hover:bg-yellow-400'>Change name</button>
            </div>

            <div className='mt-7 text-center'>Number: {number}</div>
            <div className="flex justify-center gap-2">
                <button onClick={handleClickNumberPrev} className='bg-red-200  p-1 rounded-md shadow-md hover:bg-black hover:text-white'>Previous</button>
                <button onClick={handleClickNumberNext} className='bg-green-200 p-1 rounded-md shadow-md hover:bg-black hover:text-white'>Next</button>
                
            </div>

        </div>
    </div>
    </>
  )
}

export default StateManagement