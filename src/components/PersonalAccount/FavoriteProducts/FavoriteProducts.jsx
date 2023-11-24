import React from 'react';
import ProductsCardGroup from '../../ProductsCardGroup/ProductsCardGroup';

import products from '../../../data/product.json';
import { FavoriteContainer } from './FavoriteProducts.styled';

export function FavoriteProducts({ value }) {
  return (
    <FavoriteContainer>
      <ProductsCardGroup products={products} />
    </FavoriteContainer>
  );
}
