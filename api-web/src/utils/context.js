import React, { useContext, useEffect } from 'react';
const API_ENDPOINT = `https://ben10-api.herokuapp.com/aliens`

const initialState = {
    loading: true,
    aliens: [],
    query: 'react',
};

const EncycContext = React.createContext();

export const AppProvider = ({children}) => {
    const fetchAliens = async (url) => {
        dispatch({ type: 'SET_LOADING' });
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'SET_ALIENS', payload: data });