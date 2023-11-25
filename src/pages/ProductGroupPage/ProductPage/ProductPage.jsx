import React from 'react';
import { PageContainer } from '../ProductGroupPage.styled';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Product from '../../../components/Product/Product';
import { useParams } from 'react-router-dom';
import SimilarProduct from '../../../components/Product/SimilarProduct/SimilarProduct';
import LastReviewed from '../../../components/Product/LastReviewed/LastReviewed';
import products from '../../../data/product.json';

export function ProductPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <Breadcrumbs />
      <Product id={id} />
      <SimilarProduct products={products} />
      <LastReviewed />
    </PageContainer>
  );
}
