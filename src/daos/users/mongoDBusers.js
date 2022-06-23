import {Productos} from '../../classes/mongoClassProductos'; 
import {productsSchema} from '../../models/productsModel'; 

export class ProductDao extends Productos{
    constructor(){
        super('productos',productsSchema);
    }
}