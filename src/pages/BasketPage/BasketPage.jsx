import { useLocation } from 'react-router';
import Basket from '../../components/Basket/Basket';
import LastReviewed from '../../components/Product/LastReviewed/LastReviewed';
import Container from '../../components/Container/Container';
import {
  BackLink,
  BacketPageTitle,
  BacketPageWrap,
  EmptyBasketWrap,
} from './BasketPage.styled';
import products from '../../data/product.json';
import { useSelector } from 'react-redux';

import { selectBasket } from '../../redux/backet/backet-selectors';

export function BasketPage() {
  const location = useLocation();

  const back = location.state?.from ?? '/';

  const productsInBasket = useSelector(selectBasket);

  return (
    <Container>
      <BacketPageWrap>
        <BackLink to={back}>Kupuj Dalej</BackLink>
        <BacketPageTitle>Twój koszyk</BacketPageTitle>
      </BacketPageWrap>
      {productsInBasket?.length > 0 ? (
        <Basket productsInBasket={productsInBasket} products={products} />
      ) : (
        <EmptyBasketWrap>Koszyk jest pusty</EmptyBasketWrap>
      )}

      <LastReviewed />
    </Container>
  );
}
