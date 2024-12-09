import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Commodity.css";
import React from "react";

const AddOn: React.FC = (props) => {
    const { commodity, setAddOns } = props;
    const { id, name, price, amount, description } = commodity;
    const [commodityAmount, setCommodityAmount] = React.useState(amount);

    //todo when the amount reduce to 0, remove the add-on
    //todo the amount can not reduce to negative
    const updateAmount = (newAmount) => {
        setCommodityAmount(newAmount);
        setAddOns((prevAddOns) =>
            prevAddOns.map((add_on) =>
                add_on.id === id ? { ...add_on, amount: newAmount } : add_on
            )
        );
    };

    const total = (price * commodityAmount).toFixed(2);

    return (
        <div className="order-entry">
            <div className="commodity-info">
                <p className="commodity-name">{name}</p>
                <p className="commodity-description">{description}</p>
            </div>
            <div className="commodity-details">
                <p>Amount: {commodityAmount}</p>
                <p>Price: {price}</p>
                <p>Total: {total}</p>
            </div>
            <div>
                <button onClick={() => updateAmount(commodityAmount + 1)}>+</button>
                <button onClick={() => updateAmount(commodityAmount - 1)}>-</button>
            </div>
        </div>
    );
};

export default AddOn;