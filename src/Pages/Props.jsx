import React from 'react'


const Props = () => {
  return (
    <>
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <div className="flex flex-col bg-green-400 w-[35%] h-[55%] rounded-xl overflow-hidden">
        <div className="bg-red-300 h-[40%]">Wallpaper</div>
        <div className="bg-blue-300 h-[35%]">Name</div>
        <div className="flex justify-center bg-white h-[25%]">
        <div>Followers</div>
        <div>Likes</div>
        <div>Photos</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Props