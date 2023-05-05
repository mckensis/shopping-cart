import getShopProducts from "../functions/getShopProducts";
import Product from './Product';

const Shop = () => {
  //Retrieve the list of products for sale
  const products = getShopProducts();

  return (
    <main>
      <h2>All Plants</h2>
      <section className='products'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  )
}

export default Shop;