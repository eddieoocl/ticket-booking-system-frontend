import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/Commodity.css";
import { Ticket } from "../../types/model/Ticket";
import React from "react";

const Ticket: React.FC<{ commodity: Ticket }> = (props) => {
    const { commodity } = props;
    const { name, price, amount, description, seating } = props.commodity;
    const [commodityAmount, setCommodityAmount] = React.useState<number>(amount);
    const total = (price * commodityAmount).toFixed(2);
    return (
        <div className="order-entry">
            <div className="commodity-info">
                <p className="commodity-name">
                    {name}
                    {seating &&<span className="commodity-seating">Seating Type: {seating}</span>}
                </p>
                <p className="commodity-description">{description}</p>
            </div>
            <div className="commodity-details">
                <p>Amount: {commodityAmount}</p>
                <p>Price: {price}</p>
                <p>Total: {total}</p>
            </div>

        </div>
    );
};

export default Ticket