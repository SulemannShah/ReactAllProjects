import React from 'react'
import SingleColor from '../src/SingleColor'
import {nanoid} from 'nanoid'

const Color = ({colors}) => {
  return (
    <>
    <section className='colors'>
     {colors.map((color , index) => {
        return(
            <>
            <SingleColor key={nanoid()} color={color} index={index}/>
            </>
        )
     })}
    </section>
    </>
  )
}

export default Color