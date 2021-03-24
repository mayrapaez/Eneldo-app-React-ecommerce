import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {

    return (
        <>
            <Link to={`/carrito`} className="navbarIcon p-2">
                <FontAwesomeIcon icon={faShoppingCart} type="button" className="iconFontAwesone"/>
            </Link>
        </>
    );
};

export default CartWidget;

