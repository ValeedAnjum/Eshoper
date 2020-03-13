import React from 'react';

const Price = () => {
    return (
        <React.Fragment>
            <div className="price-range">
                <h2>Price Range</h2>
                <div className="well text-center">
                    <div className="slider slider-horizontal" style={{width: '174px'}}>
                        <div className="slider-track">
                            <div className="slider-selection" style={{left: '41.6667%', width: '33.3333%'}}></div>
                            <div
                                className="slider-handle round left-round"
                                style={{
                                left: '41.6667%'
                            }}></div>
                            <div
                                className="slider-handle round"
                                style={{
                                left: '75%'
                            }}></div>
                        </div>
                        <div
                            className="tooltip top"
                            style={{
                            top: '-30px',
                            left: '68.5px'
                        }}>
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">250 : 450</div>
                        </div><input
                            type="text"
                            className="span2"
                            value=""
                            data-slider-min="0"
                            data-slider-max="600"
                            data-slider-step="5"
                            onChange={() => alert("Haha")}
                            data-slider-value="[250,450]"
                            id="sl2"/></div><br/>
                    <b className="pull-left">$ 0</b>
                    <b className="pull-right">$ 600</b>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Price;