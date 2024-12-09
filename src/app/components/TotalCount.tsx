import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/TotalCount.css";
import data from "../mockdata/data.json";

const TotalCount: React.FC = (props) => {
    const { tickets, add_ons } = props;

    const totalQuantity = tickets.reduce((acc, ticket) => acc + ticket.amount, 0) + add_ons.reduce((acc, add_on) => acc + add_on.amount, 0);
    const totalValue = tickets.reduce((acc, ticket) => acc + (ticket.price * ticket.amount), 0) + add_ons.reduce((acc, add_on) => acc + (add_on.price * add_on.amount), 0);

    return (
        <div className="total-count-container">
            <div className="total-count-item">
                <p className="total-count-label">Total Quantity:</p>
                <p className="total-count-value">{totalQuantity}</p>
            </div>
            <div className="total-count-item">
                <p className="total-count-label">Total Value:</p>
                <p className="total-count-value">${totalValue.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TotalCount;