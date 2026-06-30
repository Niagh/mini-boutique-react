import ProductCard from './ProductCard'
function ProductList() {
    return (
        <section className="product-list">
            <h2>Nos produits</h2>
            <div className="products-grid">
                <ProductCard
                    name="Ordinateur portable"
                    price={899}
                    category="Informatique"
                    description="Un ordinateur performant pour travailler, coder et suivre les cours."
                    available={true}
                    image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
                />

                <ProductCard
                    name="Souris sans fil"
                    price={29}
                    category="Accessoires"
                    description="Une souris légère et pratique pour une utilisation quotidienne."
                    available={true}
                    image="https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80"
                />

                <ProductCard
                    name="Barrette de RAM"
                    price={45}
                    category="Composants"
                    description="Une barrette de mémoire vive pour améliorer la rapidité d'un ordinateur."
                    available={true}
                    image="https://commons.wikimedia.org/wiki/Special:Redirect/file/RAM%20Module%20%28SDRAM-DDR4%29.jpg"
                />

                <ProductCard
                    name="Pâte thermique"
                    price={9}
                    category="Maintenance"
                    description="Une pâte utilisée entre le processeur et le ventirad pour améliorer le refroidissement."
                    available={true}
                    image="https://commons.wikimedia.org/wiki/Special:Redirect/file/Thermal%20compound%20pl.jpg"
                />

                <ProductCard
                    name="Clavier mécanique"
                    price={79}
                    category="Accessoires"
                    description="Un clavier confortable et réactif pour travailler efficacement."
                    available={false}
                    image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
                />
            </div>
        </section>
    )
}
export default ProductList