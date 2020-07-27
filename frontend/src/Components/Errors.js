import React from 'react';

function Errors(){
    return(
        <div>Generic Error</div>
    )
}


export default Errors;

// We can create it like this, Instead of function above
const PageNotFound = () =>(
    
        <div>Page Not Found</div>
    
    )
export {PageNotFound}