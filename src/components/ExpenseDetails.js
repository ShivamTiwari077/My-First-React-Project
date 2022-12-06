import React from 'react';
let ExpenseDetails=(props)=>{
    return(
        <div>
         <h1>Expense Details</h1>
         <div>{props.children}</div>   
        </div>
    );
} 

export default ExpenseDetails;

// return components inside component;