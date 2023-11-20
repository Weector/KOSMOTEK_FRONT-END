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
              className={i18n.language === "pl" ? "act" : null}
              onClick={() => onClickLanguageChange("pl")}
            >
              PL
            </NavLanguage>
            <NavLanguage
              className={i18n.language === "en" ? "act" : null}
              onClick={() => onClickLanguageChange("en")}
            >
              EN
            </NavLanguage>
            <NavLanguage
              className={i18n.language === "ua" ? "act" : null}
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
