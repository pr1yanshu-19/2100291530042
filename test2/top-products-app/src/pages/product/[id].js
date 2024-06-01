import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductById } from '../../api';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(id);
            setProduct(data);
        };
        if (id) fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Name: {product.name}</p>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            {/* Add other product details */}
        </div>
    );
}
