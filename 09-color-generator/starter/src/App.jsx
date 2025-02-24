import Color from "./Color";
import Form from'../src/Form'
import { useState } from "react";
import Values from 'values.js';
import {ToastContainer , toast} from 'react-toastify'

const App = () => {
 const [colors , setColors] = useState(new Values("#faa152").all(10))
 const addColor = (color) => {
  try {
    const newColors = new Values(color).all(10)
    setColors(newColors)
  } catch (error) {
    toast.error(error.message)
  }
  
 }
 return (
    <>
    <main>
     <Form addColor={addColor}/>
      <Color colors= {colors}/>
      <ToastContainer position="top-center"/>
    </main>
    </>
  );
};
export default App;
