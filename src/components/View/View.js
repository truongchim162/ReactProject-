import React from "react";

const View = ({ state, handleClick }) => {
    return (
        <div className="view-container">
            <div> Chế độ xem: </div>
            <div className="view-container__text">
                {state.clicked ? "List" : "Grid"}
            </div>
            <div className="view-container__icon" onClick={handleClick}>
                <i
                    className={state.clicked ? "fas fa-th-list" : "fas fa-th"}
                ></i>
            </div>
        </div>
    );
};

export default View;
