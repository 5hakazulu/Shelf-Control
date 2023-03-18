import React from "react";
import './Footer.css';
import Moment from 'react-moment';

function Footer() {

    const moment = require('moment');
    const date = moment().year()
    return (
        <div className="main-footer">
            <div>
                <p>&copy; {date} Shelf Control App - All Rights Reserved.</p>
            </div>
        </div>
    )

}

export default Footer;