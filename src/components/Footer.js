import React from "react";

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
           <h3>© 1997-{currentYear} TILAK PATH LAB - ALL RIGHTS RESERVED</h3>
        </div>
    )
}

export default Footer;