import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CartWidgetComponent = () =>{
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>1</span>

        </div>
    )
}

export default CartWidgetComponent