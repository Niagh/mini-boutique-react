import ProductBadge from './ProductBadge'

function ProductCard({ name, price, category, image, description, available }) {
    return (
        <article className="product-card">
            <img src={image} alt={name} />

            <div>
                <ProductBadge category={category} />

                <h3>{name}</h3>

                <p className="product-description">
                    {description}
                </p>

                <strong>{price} €</strong>

                <p className={available ? 'available' : 'unavailable'}>
                    {available ? 'Disponible' : 'Indisponible'}
                </p>
            </div>
        </article>
    )
}

export default ProductCard