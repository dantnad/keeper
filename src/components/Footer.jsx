import react from "react";

function currentYear(){
    const date = new Date();
    return date.getFullYear();
}

function Footer(){
    return(<footer><p>Copyright © Dantnad & London App Brewery {currentYear()}</p></footer>);
}

export default Footer