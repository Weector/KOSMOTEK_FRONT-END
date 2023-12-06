import React, { useState } from 'react';
import products from '../../data/product.json';
import { ReactComponent as Frame } from '../../images/svgs/frame141.svg';
import {
  ProductImagesContainer,
  ProductsContainer,
  ProductBigImageContainer,
  ProductImagesWrap,
  ProductSmallImageContainer,
  InformContainer,
  ProductTitle,
  Description,
  HeartWrap,
  HeartIcon,
  ActionContainer,
  TopInformWrap,
  LikeWrap,
  StarContainer,
  StarBox,
  StarWrap,
  StarIcon,
  PriceContainer,
  PricePrevious,
  PriceAction,
  VariantContainer,
  VariantName,
  VariantWrap,
  Variant,
  StatusWrap,
  KodProduct,
  ButtonsWrap,
  ProductImagesList,
  ProductImagesItem,
} from './Product.styled';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ProductDiscription from './ProductDiscription/ProductDiscription';
import Count from '../Count/Count';
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/backet/backet-slice';

export default function Product({ id }) {
  const [totalProduct, setTotalProduct] = useState(1);

  const handleCountPlus = () => {
    setTotalProduct(prevState => prevState + 1);
  };

  const handleCountMinus = () => {
    setTotalProduct(prevState => prevState - 1);
  };

  const product = products.find(pr => pr.id === id);

  const [activImg, setActivImg] = useState(product.img);

  const dispatch = useDispatch();
  const handleAddProduct = id => {
    dispatch(addBasket(id, totalProduct));
  };

  return (
    <ProductsContainer>
      <div>
        <ProductImagesContainer>
          <ProductBigImageContainer>
            <img src={activImg} alt="" />
          </ProductBigImageContainer>
          <ProductImagesWrap>
            <ProductImagesList>
              <ProductImagesItem
                className={activImg === product.img ? 'active' : null}
                onClick={() => setActivImg(product.img)}
              >
                <ProductSmallImageContainer>
                  <img src={product.img} alt="" />
                </ProductSmallImageContainer>
              </ProductImagesItem>
              <ProductImagesItem
                className={activImg === product.img2 ? 'active' : null}
                onClick={() => setActivImg(product.img2)}
              >
                <ProductSmallImageContainer>
                  <img src={product.img2} alt="" />
                </ProductSmallImageContainer>
              </ProductImagesItem>
            </ProductImagesList>
          </ProductImagesWrap>
        </ProductImagesContainer>
        <ProductDiscription />
      </div>
      <InformContainer>
        <TopInformWrap>
          <ActionContainer>
            <p>Działanie</p>
          </ActionContainer>
          <LikeWrap>
            <p> Do ulubionych</p>
            <HeartWrap>
              <HeartIcon />
            </HeartWrap>
          </LikeWrap>
        </TopInformWrap>
        <ProductTitle>{product.name}</ProductTitle>
        <Description>{product.description}</Description>
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
          <p>{product.coments} recenzje</p>
        </StarContainer>

        <PriceContainer>
          <PriceAction>{product.action}₴</PriceAction>
          <PricePrevious>{product.price}₴</PricePrevious>
        </PriceContainer>

        <VariantContainer>
          <VariantName>Cień</VariantName>
          <VariantWrap>
            <Variant>
              <Link>
                <Frame />
              </Link>
            </Variant>
            <Variant>
              <Link>
                <Frame />
              </Link>
            </Variant>
            <Variant>
              <Link>
                <Frame />
              </Link>
            </Variant>
          </VariantWrap>
          <StatusWrap>
            <div>W magazynie</div>
            <div>
              Kod produktu: <KodProduct>2830</KodProduct>
            </div>
          </StatusWrap>
        </VariantContainer>
        <ButtonsWrap>
          <Count
            totalProduct={totalProduct}
            handleCountPlus={handleCountPlus}
            handleCountMinus={handleCountMinus}
          />
          <Button
            text="Do kosza"
            width="342px"
            isShopping
            onClick={() => handleAddProduct(product.id)}
          ></Button>
        </ButtonsWrap>
      </InformContainer>
    </ProductsContainer>
  );
}
