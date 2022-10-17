import {  ProductType} from '../../utils/types'
import Product from '../Product';
import './style.css';

type Props = {
  products:ProductType[] | null; 
}

const ProductList = ({products}:Props) => {
  console.log(`productList`,products)
    return (
    <div>
      {products ? products.products.map((product:ProductType) => (<Product product={product} />)):<h1>loading</h1>}
    </div>
  )
}

export default ProductList