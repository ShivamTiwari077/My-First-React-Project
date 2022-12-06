import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


let NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
    
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
         //console.log(expenseData);
    };


 return(
    <div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
 );
}
export default NewExpense;