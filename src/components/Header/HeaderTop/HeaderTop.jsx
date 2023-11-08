import { useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import {
  TopContentWrap,
  HeaderTopWrap,
  LanguageList,
  NavLanguage,
} from "./HeaderTop.styled";

export default function HeaderTop() {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Заміна мови в атрибуті leng html;
  };

  return (
    <HeaderTopWrap>
      <Container>
        <TopContentWrap>
          <div>
            <a href="/">{t("header.delivery")} *</a>
          </div>
          <div>
            <a href="/">{t("header.oferty")}</a>
          </div>
          <LanguageList>
            <NavLanguage
              style={{
                color:
                  i18n.language === "pl"
                    ? "var(--clr-main-text)"
                    : "var(--clr-secondary-text)",
              }}
              onClick={() => onClickLanguageChange("pl")}
            >
              PL
            </NavLanguage>
            <NavLanguage
              style={{
                color:
                  i18n.language === "en"
                    ? "var(--clr-main-text)"
                    : "var(--clr-secondary-text)",
              }}
              onClick={() => onClickLanguageChange("en")}
            >
              EN
            </NavLanguage>
            <NavLanguage
              style={{
                color:
                  i18n.language === "ua"
                    ? "var(--clr-main-text)"
                    : "var(--clr-secondary-text)",
              }}
              onClick={() => onClickLanguageChange("ua")}
            >
              UA
            </NavLanguage>
          </LanguageList>
        </TopContentWrap>
      </Container>
    </HeaderTopWrap>
  );
}
