import React, { useState } from 'react';

import './ExpenseForm.css'


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = () => {
        setEnteredTitle(Event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: Event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: Event.target.value};
        // });
    };


    const amountChageHandler = Event => {
        setEnteredAmount(Event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: Event.target.value,
        // })
    };


    const dateChangeHandler = Event => {
        setEnteredDate(Event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: Event.target.value,
        // })
    };


    const submitHandler = (Event) => {
        Event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number' min='0.01' step='0.001'
                        value={enteredAmount}
                        onChange={amountChageHandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' min='2019-01-01' max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}>
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;


