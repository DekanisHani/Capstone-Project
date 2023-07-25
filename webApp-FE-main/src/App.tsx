import React from 'react';
import './App.css';
import { AuthProvider } from "react-auth-kit";
import Routes from "./Routes";


function App() {
    return (
        <AuthProvider authType={'localstorage'} authName={'auth'}>
            <Routes/>
        </AuthProvider>
    );
}

export default App;
