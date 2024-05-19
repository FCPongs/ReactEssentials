import React from 'react'
import PropsCard from '../Components/PropsCard'



const Props = () => {
  return (
    <>
        <h1>Welcome to the Props page!</h1>

        <div className="flex flex-wrap w-screen justify-center overflow-auto">
        <PropsCard name="Fhelry" age={21} country="Philippines"/>
        <PropsCard name="Rosifel" age={41} country="Philippines"/>
        <PropsCard name="Henry" age={42} country="Philippines"/>
        <PropsCard name="Rosheny" age={16} country="Philippines"/>
        <PropsCard name="Rokie" age={63} country="Philippines"/>
        <PropsCard/>
        </div>
    </>


  )
}

export default Props