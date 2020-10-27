import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const InitiialState = {
    transactions: []
} 

// Create context
export const GlobalContext = createContext(InitiialState);

// Provider componenet
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitiialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}