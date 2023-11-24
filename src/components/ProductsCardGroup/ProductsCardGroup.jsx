import React from 'react';

import ProductCard from '../ProductCard/ProductCard';
import { ProductsList } from './ProductsCardGroup.styled';

export default function ProductsCardGroup({ products }) {
  return (
    <ProductsList>
      {products.map((product, index) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ProductsList>
  );
}
