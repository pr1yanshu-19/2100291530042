import { getProducts, generateProductId } from './helpers';

export default async (req, res) => {
    const { categoryname, productid } = req.query;

    try {
        const products = await getProducts(categoryname);
        const product = products.find(p => generateProductId(p) === productid);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
