import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

import {
  ColumnWrap,
  FacebookIcon,
  FooterContainer,
  FooterRightWrap,
  FooterTopWrap,
  FooterWrap,
  FooterWrapDown,
  FormButton,
  FormStyle,
  Input,
  InstagramIcon,
  ItemLink,
  ListWrap,
  NetworksItem,
  NetworksLink,
  NetworksList,
  NetworksWrap,
  SubscribeWrap,
  YoutubeIcon,
} from "./Footer.styled";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Container>
        <FooterWrap>
          <FooterTopWrap>
            <ColumnWrap>
              <h2>{t("footer.information")}</h2>
              <ListWrap>
                <li>
                  <ItemLink>{t("footer.about_us")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.kontact")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.rools")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.privacy_policy")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.rachunku")}</ItemLink>
                </li>
              </ListWrap>
            </ColumnWrap>
            <ColumnWrap>
              <h2>{t("footer.client")}</h2>
              <ListWrap>
                <li>
                  <ItemLink>{t("footer.questions")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.price_delivery")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.return")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.advice")}</ItemLink>
                </li>
                <li>
                  <ItemLink>{t("footer.information_formulas")}</ItemLink>
                </li>
              </ListWrap>
            </ColumnWrap>
          </FooterTopWrap>
          <FooterRightWrap>
            <SubscribeWrap>
              <p>{t("footer.sub")}</p>
              <Formik>
                <FormStyle>
                  <Input
                    // name="email"
                    placeholder={t("footer.placeholder")}
                    type="email"
                  />
                  <FormButton>
                    <span>{t("footer.sign_up")}</span>
                  </FormButton>
                </FormStyle>
              </Formik>
            </SubscribeWrap>
            <NetworksWrap>
              <NetworksList>
                <NetworksItem>
                  <NetworksLink href="/">
                    <FacebookIcon />
                  </NetworksLink>
                </NetworksItem>
                <NetworksItem>
                  <NetworksLink href="/">
                    <InstagramIcon />
                  </NetworksLink>
                </NetworksItem>
                <NetworksItem>
                  <NetworksLink href="/">
                    <YoutubeIcon />
                  </NetworksLink>
                </NetworksItem>
              </NetworksList>
            </NetworksWrap>
          </FooterRightWrap>
        </FooterWrap>
        <FooterWrapDown>
          <p>
            © 2015-2023 Powered by TechSpace All Rights Reserved by Kosmotek
            Group
          </p>
        </FooterWrapDown>
      </Container>
    </FooterContainer>
  );
}
