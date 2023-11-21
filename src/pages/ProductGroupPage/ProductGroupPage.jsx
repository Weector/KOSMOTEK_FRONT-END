import React from "react";

import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductsCardGroup from "../../components/ProductsCardGroup/ProductsCardGroup";
import { Wrap, PageContainer } from "./ProductGroupPage.styled";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export function ProductGroupPage() {
  return (
    <PageContainer>
      <Breadcrumbs />
      <Wrap>
        <FilterProducts />
        <ProductsCardGroup />
      </Wrap>
    </PageContainer>
  );
}
