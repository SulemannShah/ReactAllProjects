import React from 'react'

const BtnContainer = ( {jobs , setCurrentItem , currentItem}) => {
  return (
   <>
   <div className="btn-container">
    {
        jobs.map((item , index)=> {
            return(<>
            <button key={item.id} 
            onClick={() => {setCurrentItem(index)}}
            className={index === currentItem? 'job-btna active-btn':'job-btn' }>
                {item.company}
            </button>
            </>)
        })
    }
   </div>
   </>
  )
}

export default BtnContainer