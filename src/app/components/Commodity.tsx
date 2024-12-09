import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Commodity.css";

const Commodity: React.FC = (props) => {
    const { commodity } = props;
    const { name, price, amount, description } = commodity;
    return (
        <div className="order-entry">
            <div className="commodity-info">
                <p className="commodity-name">{name}</p>
                <p className="commodity-description">{description}</p>
            </div>
            <div className="commodity-details">
                <p>Amount: {amount}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Commodity