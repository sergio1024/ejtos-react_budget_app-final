import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ExpenseItem = (props) => {

    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10,
        };
        dispatch({
            type: "RED_EXPENSE",
            payload: expense,
        });
    };


    return (
        <tr>
           <td>{props.name}</td>
           <td>{currency}{props.cost}</td>
           <td><AiFillPlusCircle size="2.25em" color="green" onClick={(event) => increaseAllocation(props.name)}/></td>
           <td><AiFillMinusCircle size="2.25em" color="red" onClick={(event) => decreaseAllocation(props.name)}/></td>
           <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
