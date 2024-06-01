import axios from 'axios';
import { TTLCache } from 'ttlcache';

export const productCache = new TTLCache({ ttl: 600 });  

export async function fetchProductsFromCompany(companyName, category, minPrice, maxPrice, top) {
    const url = `http://20.244.56.144/test/companies/${companyName}/categories/${category}/products`;
    const response = await axios.get(url, {
        params: { top, minPrice, maxPrice }
    });
    return response.data;
}

export async function getProducts(category, minPrice, maxPrice, top) {
    const cacheKey = `${category}-${minPrice}-${maxPrice}-${top}`;
    if (productCache.has(cacheKey)) {
        return productCache.get(cacheKey);
    }

    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    const allProducts = [];

    for (const company of companies) {
        const products = await fetchProductsFromCompany(company, category, minPrice, maxPrice, top);
        allProducts.push(...products);
    }

    productCache.set(cacheKey, allProducts);
    return allProducts;
}

export function sortProducts(products, sortBy, sortOrder) {
    const reverse = sortOrder === 'desc';
    return products.sort((a, b) => {
        const aValue = a[sortBy] || 0;
        const bValue = b[sortBy] || 0;
        return reverse ? bValue - aValue : aValue - bValue;
    });
}

export function paginateProducts(products, n, page) {
    const start = (page - 1) * n;
    const end = start + n;
    return products.slice(start, end);
}

export function generateProductId(product) {
    const uniqueString = `${product.company}-${product.id}`;
    return Buffer.from(uniqueString).toString('base64');
}
