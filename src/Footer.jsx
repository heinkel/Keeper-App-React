import React from "react";

function Footer(){
    const initialYear = 2020;
    const date = new Date();
    let lastYear = date.getFullYear();
    if (lastYear == initialYear) lastYear = "";
    else    lastYear = `- ${lastYear}`;

    return <footer>
               <p>  JAO &copy; {initialYear } { lastYear}</p>
           </footer>;
}


export default Footer;