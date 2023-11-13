import React from "react";
import { PageContainer } from "../ProductGroupPage.styled";
import Path from "../../../components/Path/Path";
import Product from "../../../components/Product/Product";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <Path />
      <Product id={id} />
    </PageContainer>
  );
}
