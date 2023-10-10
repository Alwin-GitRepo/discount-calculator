import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() 
{

  const [Discount,setDiscount]=useState('')
  const [Amount,setAmount]=useState('')
  const [Result,setResult]=useState('')
  const [Payable,setPayable]=useState('')

  const calc = () => 
  {
    let res=Math.floor((Amount*Discount)/100)
    setResult(res)
    let pay=Amount-res
    setPayable(pay)
  };

  const reset = () => 
  {
    setAmount('')
    setDiscount('')
    setResult('')
    setPayable('')
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h3>DISCOUNT CALCULATOR</h3> <br />
          <TextField value={Amount} onChange={e=>setAmount(e.target.value)} label="Total Amount(&#8377;)" color="secondary" focused /> <br /> <br />
          <TextField value={Discount} onChange={e=>setDiscount(e.target.value)} label="Discount(%)" color="secondary" focused /> <br /> <br />
          <div className="btn">
            <Button variant="contained" color="success" onClick={calc}>Calculate</Button>
            <Button variant="contained" color="error" onClick={reset}>Reset</Button>
          </div>
          <div className='result'>
            <h4>Discounted Price : <span style={{color : "black"}}>&#8377;</span><span style={{color : "green"}}>{Result}</span></h4>
            <h4>Payable Amount : <span style={{color : "black"}}>&#8377;</span><span style={{color : "violet"}}>{Payable}</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
