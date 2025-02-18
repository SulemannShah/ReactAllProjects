import React from 'react'

import SingleQuestion from './SingleQuestion'
import questions from './data'



const Qustions = () => {
  return (
    <>
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question)=>{
            return(
                <>
                <SingleQuestion key={question.id} {...question} />
                </>
            )
        })}
    </section>
    </>
  )
}

export default Qustions