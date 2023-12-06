import React from 'react';
import ModalUniversal from './ModalUniversal';

import {
  ButtonLeft,
  ButtonLink,
  ButtonWrap,
  CheckIcon,
  CheckIconWrap,
  ProductWrap,
  Title,
} from './ModalAddProduct.styled';

export default function ModalAddProduct({ toggleModal, product }) {
  return (
    <ModalUniversal toggleModal={toggleModal}>
      <Title>Artykuł został dodany do Twojego koszyka</Title>
      <ProductWrap>
        <CheckIconWrap>
          <CheckIcon />
        </CheckIconWrap>
        <p>{product}</p>
      </ProductWrap>
      <ButtonWrap>
        <ButtonLeft>
          <span>Kontynuować zakupy</span>
        </ButtonLeft>
        <ButtonLink to="/basket">
          <span>Koszyk i kasa</span>
        </ButtonLink>
      </ButtonWrap>
    </ModalUniversal>
  );
}
