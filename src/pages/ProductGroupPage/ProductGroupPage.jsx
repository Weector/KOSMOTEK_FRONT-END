import React from "react";

import FilterProducts from "../../components/FilterProducts/FilterProducts";
import ProductsCardGroup from "../../components/ProductsCardGroup/ProductsCardGroup";
import { Wrap, PageContainer } from "./ProductGroupPage.styled";
import Path from "../../components/Path/Path";

export default function ProductGroupPage() {
  return (
    <PageContainer>
      <Path />
      <Wrap>
        <FilterProducts />
        <ProductsCardGroup />
      </Wrap>
    </PageContainer>
  );
}
