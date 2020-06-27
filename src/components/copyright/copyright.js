import React from "react";
import className from './copyright.module.css';

const Copyright = ({ author = "Anonymous", startOfDev = "2013" }) => {
    const presentYear = new Date().getFullYear();
    return ( 
            <small className={className.copyright}>
                &copy; {author}, {Number.parseInt(startOfDev) === presentYear ? presentYear : startOfDev + ' - ' + presentYear}
            </small>
    );
}

export default Copyright;