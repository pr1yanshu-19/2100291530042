import { useEffect, useState } from 'react';
import { getTopProducts } from '../api';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopProducts = async () => {
            const data = await getTopProducts({ top: 10 }); // Example: Fetch top 10 products
            setProducts(data);
            setLoading(false);
        };
        fetchTopProducts();
    }, []);

    return (
        <div>
            <h1>Top Products</h1>
            <FilterBar />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
}
