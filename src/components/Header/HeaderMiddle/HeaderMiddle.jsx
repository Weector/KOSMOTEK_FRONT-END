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

export default function HeaderMiddle() {
  return (
    <Container>
      <HeaderMiddleContainer>
        <a href="/">
          <IconLogo />
        </a>
        <InputWrap>
          <Input
            type="text"
            placeholder="Wyszukaj perfumy, kosmetyki, markę..."
          />
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
