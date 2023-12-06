import {
  Inform,
  StarIcon,
  ImgContainer,
  ItemContainer,
  InformContainer,
  InformTitle,
  StarContainer,
  StarWrap,
  StarBox,
  PriceContainer,
  PriceAction,
  Description,
  PriceWrap,
  ButtonWrap,
  HeartIcon,
  HeartWrap,
  PriceValue,
  PriceValueDefault,
} from './ProductCard.styled';

import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/backet/backet-slice';
import { useState } from 'react';

import ModalAddProduct from '../Modal/ModalAddProduct';

export default function ProductCard({
  product,
  className,
  action,
  newProduct,
}) {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleAddProduct = id => {
    dispatch(addBasket(id, 1));
    toggleModal();
  };

  return (
    <ItemContainer>
      <Link to={`${product.id}`}>
        <ImgContainer $img={product.img} $img2={product.img2}>
          {action && (
            <Inform>
              <p>{t('product.action')}</p>
            </Inform>
          )}
          {newProduct && (
            <Inform $new>
              <p>{t('product.new')}</p>
            </Inform>
          )}
          <HeartWrap>
            <HeartIcon />
          </HeartWrap>
        </ImgContainer>
      </Link>
      <InformContainer>
        <Link to={`${product.id}`}>
          <InformTitle>{product.name}</InformTitle>
        </Link>

        <Description>{product.description}</Description>
        <PriceWrap className={className}>
          <div>
            <StarContainer>
              <StarBox>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
              </StarBox>
              <p>{product.coments}</p>
            </StarContainer>
            <PriceContainer>
              {action ? (
                <>
                  <PriceAction>{product.action} zł</PriceAction>
                  <PriceValueDefault>{product.price} zł</PriceValueDefault>
                </>
              ) : (
                <PriceValue>{product.price} zł</PriceValue>
              )}
            </PriceContainer>
          </div>
          <ButtonWrap>
            <Button
              text="Do kosza"
              width="148px"
              isShopping
              onClick={() => handleAddProduct(product.id)}
            ></Button>
          </ButtonWrap>
        </PriceWrap>
      </InformContainer>
      {isModal && (
        <ModalAddProduct toggleModal={toggleModal} product={product.name} />
      )}
    </ItemContainer>
  );
}
