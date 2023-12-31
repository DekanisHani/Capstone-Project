import React from 'react';
import NavBar from "./NavBar";

const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className="App">
            <NavBar/>
            {children}
        </div>
    );
};

export default Layout;
