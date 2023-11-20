import { useTranslation } from "react-i18next";
import {
  NavigationStyle,
  NavigationWrap,
  LinkStyle,
  DropdownWrap,
  NavItem,
} from "./Navigation.styled";
import Dropdown from "../Dropdown/Dropdown";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import products from "../../data/product.json";

export default function Navigation() {
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    function getProduct() {
      if (isShown) {
        let productId = Math.floor(Math.random() * products.length);
        return setProduct(products[productId]);
      }
    }
    return getProduct();
  }, [isShown]);

  const { t } = useTranslation();

  return (
    <Container>
      <NavigationWrap>
        <nav>
          <NavigationStyle>
            <NavItem>
              <LinkStyle to="categorys/promotion">{t("nav.actions")}</LinkStyle>
            </NavItem>
            <NavItem
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <LinkStyle to="categorys/eyes">{t("nav.eyes")}</LinkStyle>
              <DropdownWrap>
                <Dropdown product={product} />
              </DropdownWrap>
            </NavItem>
            <NavItem>
              <LinkStyle to="categorys/makeup">
                {t("nav.makeup_pallets")}
              </LinkStyle>
            </NavItem>
            <NavItem>
              <LinkStyle to="categorys/body">{t("nav.body")}</LinkStyle>
            </NavItem>
            <NavItem>
              <LinkStyle to="categorys/lips">{t("nav.lips")}</LinkStyle>
            </NavItem>
            <NavItem>
              <LinkStyle to="categorys/face">{t("nav.face")}</LinkStyle>
            </NavItem>
            <NavItem>
              <LinkStyle to="categorys" end>
                {t("nav.all_products")}
              </LinkStyle>
            </NavItem>
          </NavigationStyle>
        </nav>
      </NavigationWrap>
    </Container>
  );
}
