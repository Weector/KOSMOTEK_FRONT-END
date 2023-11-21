import styled from "styled-components";

export const SimilarProductContainer = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;

  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const SimilarProductTitle = styled.h2`
  margin-bottom: 40px;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.8px;
`;

export const SimilarProductList = styled.ul`
  display: flex;
  column-gap: 24px;
  overflow: hidden;
`;
