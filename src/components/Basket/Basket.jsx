import Button from '../Button/Button';
import Count from '../Count/Count';
import {
  Title,
  ProductImg,
  ProductImgWrap,
  ProductItem,
  ProductWrap,
  ProductsList,
  ProductName,
  WrapText,
  Input,
  InputWrap,
  ProductInformWrap,
  Label,
  HeartWrap,
  HeartIcon,
  RemoveIcon,
  RemoveIconWrap,
  ActWrap,
  IconWrap,
  PriseAction,
  PriseProductPrevious,
  PriseProduct,
  ProductWrapRight,
  DeliveryWrap,
  TotalWrap,
  ButtonWrap,
  TotalText,
} from './Basket.styled';
import { useDispatch } from 'react-redux';
import {
  deleteBasket,
  minusCount,
  plusCount,
} from '../../redux/backet/backet-slice';

export default function Basket({ productsInBasket, products }) {
  const dispatch = useDispatch();

  const handleCountPlus = id => {
    dispatch(plusCount(id));
  };

  const handleCountMinus = id => {
    dispatch(minusCount(id));
  };

  const handleDelete = id => {
    dispatch(deleteBasket(id));
  };
  // const getTotal = () => {};

  return (
    <>
      <Title> Wybrane produkty</Title>
      <div>
        <ProductsList>
          {productsInBasket.map(productInBasket => {
            const product = products.find(
              product => product.id === productInBasket.id
            );

            return (
              <ProductItem key={product.id}>
                <ProductWrap>
                  <ProductImgWrap>
                    <ProductImg src={product.img} alt="" />
                  </ProductImgWrap>
                  <ProductInformWrap>
                    <ProductName>{product.name}</ProductName>
                    <p>{product.group}</p>
                    <p>Czarny</p>
                    <p>Maskara 11 ml</p>
                    <WrapText>
                      <p>{product.price}</p>

                      <div>Kod produktu: 2485</div>
                    </WrapText>

                    <InputWrap>
                      <Input type="checkbox" id={`package ${product.id}`} />
                      <Label htmlFor={`package ${product.id}`}>
                        Pakowanie na prezent gratis
                      </Label>
                    </InputWrap>
                    <ActWrap>
                      <IconWrap>
                        <HeartWrap>
                          <HeartIcon />
                        </HeartWrap>
                        <span>Lista Życzeń</span>
                      </IconWrap>
                      <IconWrap>
                        <RemoveIconWrap
                          onClick={() => handleDelete(product.id)}
                        >
                          <RemoveIcon />
                        </RemoveIconWrap>
                        <span>Usuń</span>
                      </IconWrap>
                    </ActWrap>
                  </ProductInformWrap>
                </ProductWrap>
                <ProductWrapRight>
                  <div>
                    {product.action ? (
                      <>
                        <PriseAction>{product.action} zł</PriseAction>
                        <PriseProductPrevious>
                          {product.price} zł
                        </PriseProductPrevious>
                      </>
                    ) : (
                      <PriseProduct>{product.price} zł</PriseProduct>
                    )}
                  </div>
                  <div>
                    <DeliveryWrap>
                      <p>Gratis</p>
                      <p>Koszty dostawy</p>
                    </DeliveryWrap>

                    <Count
                      totalProduct={productInBasket.count}
                      handleCountPlus={() => handleCountPlus(product.id)}
                      handleCountMinus={() => {
                        handleCountMinus(product.id);
                      }}
                    />
                  </div>
                </ProductWrapRight>
              </ProductItem>
            );
          })}
        </ProductsList>
        <TotalWrap>
          <TotalText>
            Suma całkowita <span>zawiera VAT</span>
            <span>16.75 zł</span>
          </TotalText>
          <ButtonWrap>
            <Button text="Do kasy" width="264px" />
          </ButtonWrap>
        </TotalWrap>
      </div>
    </>
  );
}
