import React from 'react';
import Carousel from '../../Carousel/Carousel';
import ProductCard from '../../ProductCard/ProductCard';
import { LastReviewedContainer, Title } from './LastReviewed.style';
import products from '../../../data/product.json';

export default function LastReviewed() {
  return (
    <LastReviewedContainer>
      <Title>Ostatnio przeglądałeś</Title>
      <Carousel title={'Ostatnio przeglądałeś'} dark>
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Carousel>
    </LastReviewedContainer>
  );
}
