import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const totalAmount = transactions.reduce((acc, curr) => {
        return (acc += curr.amount);
    }, 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalAmount.toFixed(2)}</h1>
        </>
    );
};
