import React, { useStage } from "react";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
}

export default Layout;