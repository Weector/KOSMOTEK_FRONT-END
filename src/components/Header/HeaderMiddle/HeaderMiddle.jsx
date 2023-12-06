import { Link, useLocation } from 'react-router-dom';
import {
  IconUser,
  IconHeart,
  IconShopping,
  HeaderMiddleContainer,
  IconsNav,
  IconLogo,
  InputWrap,
  Input,
  IconSearch,
  ButtonSearch,
  Cicle,
  IconLink,
  ShoppingTotalProducts,
} from './HeaderMiddle.styled';
import Container from '../../Container/Container';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../../redux/backet/backet-selectors';

export default function HeaderMiddle() {
  const location = useLocation();
  const totalProductsInBasket = useSelector(selectBasket).length;

  const login = true;

  const name = 'maras';
  const latter = name.substring(0, 1).toLocaleUpperCase();

  const { t } = useTranslation();
  return (
    <Container>
      <HeaderMiddleContainer>
        <Link to="/">
          <IconLogo />
        </Link>
        <InputWrap>
          <Input type="text" placeholder={t('header.placeholder')} />
          <ButtonSearch>
            <IconSearch />
          </ButtonSearch>
        </InputWrap>
        <IconsNav>
          {login ? (
            <Link to="/user">
              <Cicle>
                <p>{latter}</p>
              </Cicle>
            </Link>
          ) : (
            <IconLink>
              <IconUser />
            </IconLink>
          )}

          <IconLink to="/user/favorite">
            <IconHeart />
          </IconLink>
          <IconLink to="/basket" state={{ from: location }}>
            <IconShopping />
            {totalProductsInBasket > 0 && (
              <ShoppingTotalProducts>
                {totalProductsInBasket}
              </ShoppingTotalProducts>
            )}
          </IconLink>
        </IconsNav>
      </HeaderMiddleContainer>
    </Container>
  );
}
