import { ProductType } from '../../utils/types'
import Product from '../Product';
import './style.css';

type Props = {
  products: ProductType[] | null;
}

const ProductList = (props:Props) => {
  console.log(`productList`,props.products)
    return (
    <div>
      {props.products?props.products?.map((product:ProductType) => <Product product={product} />):<h1>loading</h1>}
    </div>
  )
}

export default ProductList