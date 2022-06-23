import {Cart} from '../../classes/mongoClassCart'; 
import {cartSchema} from '../../models/cartModel'; 

export class CartDao extends Cart{
    constructor(){
        super('carrito',cartSchema); 
    }
}