import { Link } from 'react-router-dom';
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
} from './HeaderMiddle.styled';
import Container from '../../Container/Container';
import { useTranslation } from 'react-i18next';

export default function HeaderMiddle() {
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
            <IconLink to="/login">
              <IconUser />
            </IconLink>
          )}

          <IconLink>
            <IconHeart />
          </IconLink>
          <IconLink>
            <IconShopping />
          </IconLink>
        </IconsNav>
      </HeaderMiddleContainer>
    </Container>
  );
}
