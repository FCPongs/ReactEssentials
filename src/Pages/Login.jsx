import React from 'react'

export const Login = () => {
  return (
    <>
    <div className='flex justify-center items-center bg-gray-100 w-full h-[100vh]'>
        <div className="flex flex-col bg-white w-[30rem] h-[25rem] rounded-xl shadow-2xl">
            <div className='flex justify-center items-center h-[20%] bg-black rounded-t-xl border-b'>
                <div className='text-xl font-semibold text-white'>LOGIN PAGE</div>
            </div>
            <div className="flex flex-col mt-[20px] p-5 h-[55%]">
                <div className='mb-4'>
                    <div className='text-l mb-2'>Username: </div>
                <input className="w-[100%] h-[34px] border-2 border-indigo-400 rounded-xl p-1" type='text' placeholder=""/>
                </div>
                <div>
                    <div className='text-l mb-2'>Password: </div>
                <input className="w-[100%] h-[34px] border-2 border-indigo-400 rounded-xl p-1" type='password' placeholder=""/>
                </div>
            </div>
            <div className="flex flex-auto justify-center">
                <button className="w-[80%] h-[34px] bg-indigo-400 rounded-xl text-white font-semibold hover:bg-indigo-500">Login</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Login
