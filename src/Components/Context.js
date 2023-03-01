import React, { useState } from "react";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState(0);
    const [items_cont, setitems_cont] = useState(0);
    const [items_state, setitems_state] = useState(0);
    const [items_city, setitems_city] = useState(0);
    const [items_add, setitems_add] = useState('');

    return (
        <Context.Provider value={{
            items, setItems, items_cont, setitems_cont, items_state, setitems_state, items_city,setitems_city, items_add, setitems_add}}>
            {children}
        </Context.Provider>
    );
};
