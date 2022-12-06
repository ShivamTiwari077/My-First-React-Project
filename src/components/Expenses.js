import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import TotalExpense from './TotalExpense';
let Expenses=(props)=>
{
    

  return(
    <div>
      {
         props.item.map
         (
            x=>
            (
               <> 
                    <ExpenseItem title={x.title} amount ={x.amount} date={x.date}  />
               </>
            )
         )
      }
  
       { <TotalExpense total={props.kharchapani}/> }
    </div>
  );
}

export default Expenses;