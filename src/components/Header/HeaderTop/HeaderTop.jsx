import i18next from "i18next";
import Container from "../../Container/Container";
import {
  TopContentWrap,
  HeaderTopWrap,
  LanguageList,
  NavLanguage,
} from "./HeaderTop.styled";
import { useTranslation } from "react-i18next";

export default function HeaderTop() {
  const { t } = useTranslation();
  return (
    <HeaderTopWrap>
      <Container>
        <TopContentWrap>
          <div>
            <a href="/">{t("header.dostavka")} *</a>
          </div>
          <div>
            <a href="/">{t("header.oferty")}</a>
          </div>
          <LanguageList>
            <NavLanguage onClick={() => i18next.changeLanguage("pl")} to="/">
              PL
            </NavLanguage>
            <NavLanguage onClick={() => i18next.changeLanguage("en")} to="/en">
              EN
            </NavLanguage>
            <NavLanguage onClick={() => i18next.changeLanguage("ua")} to="/ua">
              UA
            </NavLanguage>
          </LanguageList>
        </TopContentWrap>
      </Container>
    </HeaderTopWrap>
  );
}
