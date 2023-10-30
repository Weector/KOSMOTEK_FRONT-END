import { useTranslation } from "react-i18next";
import {
  NavigationStyle,
  NavigationWrap,
  LinkStyle,
} from "./Navigation.styled";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <NavigationWrap>
      <NavigationStyle>
        <LinkStyle to="/promotion">{t("nav.actions")}</LinkStyle>
        <LinkStyle to="/eyes">{t("nav.eyes")}</LinkStyle>
        <LinkStyle to="/makeup">{t("nav.makeup_pallets")}</LinkStyle>
        <LinkStyle to="/body">{t("nav.body")}</LinkStyle>
        <LinkStyle to="/lips">{t("nav.lips")}</LinkStyle>
        <LinkStyle to="/face">{t("nav.face")}</LinkStyle>
        <LinkStyle to="/all">{t("nav.all_products")}</LinkStyle>
      </NavigationStyle>
    </NavigationWrap>
  );
}
