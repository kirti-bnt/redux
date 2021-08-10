import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { State,bankruptAccount,depositMoney,withdrawMoney  } from './state';

import './App.css';



function App() {
  const dispatch=useDispatch();

  const amount=useSelector((state:State)=>state.bank)



  return (
    <div className="App">
     <h1>{amount}</h1>
    
     <button onClick={()=>{dispatch(depositMoney(5000))}}>DEPOSIT</button>
     <button onClick={()=>{dispatch(withdrawMoney(8000))}}>WITHDRAW</button>
     <button onClick={()=>{dispatch(bankruptAccount(0))}}>BANKRUPT</button>
    </div>
  );
}

export default App;
