const Product = ({ product, handleAddToBasket }) => {
  return (
    <article className='product'>
      <div className="image-container">
        <img src={product.image} alt='' />
      </div>
      <h3>{product.name}</h3>
      <h4>£{product.price}</h4>
      <p>{product.description}</p>
      <button type='button' onClick={() => handleAddToBasket(product)}>Add to Basket</button>
    </article>
  )
}

export default Product;