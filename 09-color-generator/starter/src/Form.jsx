import React, { useState } from 'react'

const Form = ({addColor}) => {
  const [color , setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
    return (
    <section className='container'>
        <h4>color generator</h4>
        <form typeof='submit'onSubmit={handleSubmit} className='color-form' >
            <input type="color" value={color} onChange={(e) =>setColor(e.target.value) } />
            <input type="text" value={color} onChange={(e) =>setColor(e.target.value) } placeholder='#faa152'/>
            <button type='submit' className='btn' style={{background: color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form