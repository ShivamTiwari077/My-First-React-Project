import React , {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>
{


    const [enteredTitle, setenteredTitle]=useState('');
    const [enteredAmount, setenteredAmount]=useState('');
    const [enteredDate, setenteredDate]=useState('');

      
     const titleChangeHandler=(event)=>
     {
        setenteredTitle(event.target.value)
     };


     const amountChangeHandler=(event)=>
     {
        setenteredAmount(event.target.value)
     };


     const dateChangeHandler=(event)=>
     {
          setenteredDate(event.target.value)
     };

     
    const submitHandler=(event)=>
    {

       
           event.preventDefault();
           let expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
           }
          // console.log(expenseData);
           props.onSaveExpenseData(expenseData)
        //    console.log(expenseData);
   
           setenteredTitle('');
           setenteredAmount('');
           setenteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div >
               <div>
                    <label>Title</label>
                    <input type="text" value={enteredTitle}  onChange={titleChangeHandler}placeholder="Enter Expensetype" required/>
                </div>
                <div>
                    <label>Amount</label>
                     <input type="number" value={enteredAmount} min="1" step="0.1"onChange={amountChangeHandler} placeholder="Enter Amount" required />
                </div>
                <div>
                   <label>Date</label>
                  <input type="Date" value={enteredDate} onChange={dateChangeHandler}placeholder="Select a Date" required/>
                </div> 
            </div>

            <div>
             <button type = "submit">Add Expense</button>                
            </div>
        </form>
    );
}

export default ExpenseForm;