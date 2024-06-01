import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {product.price}
                </Typography>
                {/* Add other product details */}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
