import React from 'react';
import products from '../../data/product.json';
import FilterProducts from '../../components/FilterProducts/FilterProducts';
import ProductsCardGroup from '../../components/ProductsCardGroup/ProductsCardGroup';
import { Wrap, PageContainer, ProductsWrap } from './ProductGroupPage.styled';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export function ProductGroupPage() {
  return (
    <PageContainer>
      <Breadcrumbs sort />
      <Wrap>
        <FilterProducts />
        <ProductsWrap>
          <ProductsCardGroup products={products} />
        </ProductsWrap>
      </Wrap>
    </PageContainer>
  );
}
