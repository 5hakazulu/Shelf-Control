import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div>
                <p>&copy; {new Date().getFullYear} Shelf Control App - All Rights Reserved.</p>
            </div>
        </div>
    )

}

export default Footer;