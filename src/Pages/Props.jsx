import React from 'react'


const Props = (props) => {
  return (
    <>
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="flex flex-col  w-[30%] h-[70%] rounded-xl overflow-hidden bg-white shadow-2xl">

        {/** Wallpaper */}
        <div className="bg-red-300 h-[40%]">Wallpaper</div>

        {/** Image */}
        <div className='flex bg-yellow-200 w-full justify-center relative'>
          {/** Image Circle*/}
          <div className='flex bg-red-200 w-32 h-32  absolute transform rounded-full -translate-y-1/2'>
          </div>
          </div>
        
        {/** Name */}
        <div className="flex flex-col h-[35%] items-center justify center relative">
          <div className="flex items-center mt-[70px]">
            <p>Name {props.name}</p>
            <div className="ml-2">26</div>
            </div>
          <div className="font-light">London</div>
          </div> 

        <div className="flex bg-white flex-auto justify-center items-center border-t border-gray-400">
        <div className="flex flex-col flex-1 h-full items-center justify-center">
          <div className="text-xl font-bold">80K</div>
          <div>Followers</div>
          </div>
        <div className="flex flex-col items-center justify-center flex-1 h-full ">
        <div className="text-xl font-bold">803K</div>
          <div>Likes</div>
          </div>
        <div className="flex flex-col items-center justify-center flex-1 h-full">
        <div className="text-xl font-bold">1.4K</div>
          <div>Photos</div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Props