import React from 'react';
import Expenses from './components/Expenses';
import ExpenseDetails from './components/ExpenseDetails';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

let DUMMY_EXPENSE=[
    // {
    //   id: 'e1',
    //   title: 'School Fee',
    //   amount: 123,
    //   date: new Date(2021,3,21)
    //  },

    //  {
    //     id: 'e2',
    //     title: 'Books',
    //     amount: 456,
    //     date: new Date(2021,5,21)
    // },
    // {
    //     id: 'e3',
    //     title: 'House Rent',
    //     amount: 789,
    //     date: new Date(2021,7,14)
    // },  
    // {
    //     id: 'e4',
    //     title: 'FOOD',
    //     amount: 987,
    //     date: new Date(2021,9,18)
    // }
];

let TE=[];


let App=()=>{

    

    const  [expenses, setExpenses]=useState(DUMMY_EXPENSE);
    const [totalamount, modifyAmount]=useState(TE);
    const[SUM,newSUM]=useState();


    const addExpenseHandler=(kharcha)=>
    {
         //console.log(kharcha.amount);
        let UpdatedTE=[...totalamount, kharcha.amount];
        let updatedExpense=[...expenses,kharcha ];
        // console.log(updatedExpense);
        setExpenses(updatedExpense);
        modifyAmount(UpdatedTE);
      
           var sum = 0;
           UpdatedTE.forEach(x => {
            sum += 1*x;
        });
       
            newSUM(sum);
    }
    
    
    return( 
         <>
          <ExpenseDetails>
            <NewExpense  onAddExpense={addExpenseHandler}/>
          <Expenses item={expenses} kharchapani={SUM}/> 
          </ExpenseDetails>
          
         </>   
     
);
    
}

export default App;