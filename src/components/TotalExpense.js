import React, {useState} from 'react';
import './TotalExpense.css';

let TotalExpense=(props)=>
{
   
    return(
        <><h4>Total Expense =$ {props.total}</h4></>
    );

}

export default TotalExpense;