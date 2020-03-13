import React from 'react';

const Loader = () => {
    return (
        <div className="LoaderContainer">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;