import React from 'react';
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{paddingTop: '40px'}}>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout