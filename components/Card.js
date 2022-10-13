import React from 'react'

const Card = (props) => {
  return (
    <div className="w-[500px] min-h-[100px]">
        <div className="url text-sm">{props.url}</div>
        <a href={props.url}>
            <div className="header text-blue-700 dark:text-[#8ab4f8] cursor-pointer text-xl w-1/2">{props.title}</div>
        </a>
    </div>
  )
}

export default Card
