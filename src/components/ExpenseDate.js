
import React from 'react';
import './ExpenseDate.css';
let ExpenseDate=(props)=>
{
    const month=props.temp.toLocaleString('en-US',{month: 'long'});
    const year=props.temp.getFullYear();    
    const day=props.temp.toLocaleString('en-US',{day:'2-digit'});

    return(

        <>
        {day}{month}{year}
        </>
    );
}
export default ExpenseDate;