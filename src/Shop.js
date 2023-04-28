import Product from './Product';

const Shop = ({ products }) => {

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