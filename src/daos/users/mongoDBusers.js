import Productos from '../../classes/mongoClassProductos'; 
import {productsSchema} from '../../models/productsModel'; 

export class ProductosDao extends Productos{
    constructor(){
        super('productos',productsSchema);
    }
}


