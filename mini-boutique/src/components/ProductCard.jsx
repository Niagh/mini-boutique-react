import ProductBadge from './ProductBadge'

function ProductCard({ product, isSelected, isFavorite, onSelectProduct, onToggleFavorite }) {
    return (
        <article className={`product-card ${isSelected ? 'selected' : ''}`}>
            <img src={product.image} alt={product.name} />

            <div>
                <ProductBadge category={product.category} />

                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <strong>{product.price} €</strong>

                <p className={product.available ? 'available' : 'unavailable'}>
                    {product.available ? 'Disponible' : 'Indisponible'}
                </p>

                <button onClick={() => onSelectProduct(product)}>
                    Voir les détails
                </button>

                <button onClick={() => onToggleFavorite(product.id)}>
                    {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
            </div>
        </article>
    )
}

export default ProductCard