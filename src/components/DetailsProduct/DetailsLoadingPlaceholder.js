import React from 'react';

const DetailsLoadingPlaceholder = () => {
    return (
        <div className="row">
            <div className="col-sm-5 pictureloading">
                <div className="ph-item">
                    <div className="ph-picture h350"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4 p-0">
                        <div className="ph-item">
                            <div className="ph-picture h50"></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-0">
                        <div className="ph-item">
                            <div className="ph-picture h50"></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-0">
                        <div className="ph-item">
                            <div className="ph-picture h50"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-7">
                <div className="ph-item">
                    <div className="ph-col-12">
                        <div className="ph-row">
                            <div className="ph-col-12 big"></div>
                            <div className="ph-col-6"></div>
                            <div className="ph-col-6 empty"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-12 big"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-8"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsLoadingPlaceholder;
