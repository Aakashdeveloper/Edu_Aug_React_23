import React from 'react';

const Footer = (props) => {
    console.log("in footer>>",props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                &copy; Developer Funnel {props.month} {props.year}
            </center>
        </React.Fragment>
    )
}

export default Footer