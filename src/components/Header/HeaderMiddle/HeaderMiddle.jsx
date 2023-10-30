import { Link } from "react-router-dom";
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
} from "./HeaderMiddle.styled";
import Container from "../../Container/Container";
import { useTranslation } from "react-i18next";

export default function HeaderMiddle() {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderMiddleContainer>
        <a href="/">
          <IconLogo />
        </a>
        <InputWrap>
          <Input type="text" placeholder={t("header.placeholder")} />
          <ButtonSearch>
            <IconSearch />
          </ButtonSearch>
        </InputWrap>
        <IconsNav>
          <Link>
            <IconUser />
          </Link>
          <Link>
            <IconHeart />
          </Link>
          <Link>
            <IconShopping />
          </Link>
        </IconsNav>
      </HeaderMiddleContainer>
    </Container>
  );
}
