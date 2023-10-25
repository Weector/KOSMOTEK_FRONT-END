import { NavLink } from "react-router-dom";
import Container from "../../Container/Container";
import {
  TopContentWrap,
  HeaderTopWrap,
  LanguageList,
  NavLanguage,
} from "./HeaderTop.styled";

export default function HeaderTop() {
  return (
    <HeaderTopWrap>
      <Container>
        <TopContentWrap>
          <div>
            <a href="#">Dostawa gratis! *</a>
          </div>
          <div>
            <a href="#">Super ofery!</a>
          </div>
          <LanguageList>
            <NavLanguage to="/">PL</NavLanguage>
            <NavLanguage to="/en">EN</NavLanguage>
            <NavLanguage to="/ua">UA</NavLanguage>
          </LanguageList>
        </TopContentWrap>
      </Container>
    </HeaderTopWrap>
  );
}
