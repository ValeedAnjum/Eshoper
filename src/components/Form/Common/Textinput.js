import React from 'react';

const Textinput = (props) => {
    const {input,type,placeholder,meta:{touched,error}} = props;
    return (
        <React.Fragment>
        <input {...input} placeholder={(touched && error) ? error:placeholder} 
        type={type} 
        autoComplete="on"
        required={placeholder}
        className={(touched && error) ? 'animated ErrorInput shake':null}/>
        </React.Fragment>
    );
};

export default Textinput;