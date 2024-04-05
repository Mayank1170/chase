import React from 'react'

interface FeaturesProps {
    bgColor: string;
}
const Features: React.FC<FeaturesProps> = ({bgColor}) => {
  return (
    <div style={{boxShadow: "inset 2px 2px 5px 2px #000", backgroundColor: bgColor}} className={`h-[200px] w-[80px] mx-5 my-2 bg-${bgColor} rounded-full shadow-inner shadow-black`}>
      
    </div>
  )
}

export default Features
