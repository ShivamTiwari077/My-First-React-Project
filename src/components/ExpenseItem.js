import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

let ExpenseItem=(props)=>
{
//    const [Title, Toggle] = useState()

//    const [newTitle, ReToggle]=useState("Type Here to Change Title")

//    const [Amount,FixAmount]=useState()

//    const[newTitle1,ChangeAmount]=useState(0)


//    let ClickHandler=()=>
//    {
//       Toggle(newTitle)
//    }


//   let ChangeHandler=(event)=>{
//       ReToggle(event.target.value)
//   }


//   let ClickHandler1=()=>
//    {
//       FixAmount(newTitle1)
//    }

//    let ChangeHandler1=(event)=>{
//       ChangeAmount(event.target.value)
//   }

  
   return(
    <>
     <h3>{props.title}</h3> 
     {/* <button onClick={ClickHandler}>Click</button>
     <input type="text" value = {newTitle} onChange={ChangeHandler}></input> */}


    <div>Amount = ${props.amount}</div>
    {/* <button onClick={ClickHandler1}>Click</button>
     <input type="number" value = {newTitle1} onChange={ChangeHandler1}></input> */}
       <ExpenseDate temp={props.date}/>    
    </>
   );
}


export default ExpenseItem;