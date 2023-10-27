import { Formik } from "formik";
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
  return (
    <FooterContainer>
      <Container>
        <FooterWrap>
          <FooterTopWrap>
            <ColumnWrap>
              <h2>INFORMACJE</h2>
              <ListWrap>
                <li>
                  <ItemLink>O nas</ItemLink>
                </li>
                <li>
                  <ItemLink>Kontakt</ItemLink>
                </li>
                <li>
                  <ItemLink>Regulamin</ItemLink>
                </li>
                <li>
                  <ItemLink>Polityka Prywatności</ItemLink>
                </li>
                <li>
                  <ItemLink>Bank account number</ItemLink>
                </li>
              </ListWrap>
            </ColumnWrap>
            <ColumnWrap>
              <h2>DLA KLIENTA</h2>
              <ListWrap>
                <li>
                  <ItemLink>Najczęściej zadawane pytania</ItemLink>
                </li>
                <li>
                  <ItemLink>Koszty i terminy dostawy</ItemLink>
                </li>
                <li>
                  <ItemLink>Zwroty,reklamacje</ItemLink>
                </li>
                <li>
                  <ItemLink>Poradnik kupującego</ItemLink>
                </li>
                <li>
                  <ItemLink>Informacje o REFORMULACJI</ItemLink>
                </li>
              </ListWrap>
            </ColumnWrap>
          </FooterTopWrap>
          <FooterRightWrap>
            <SubscribeWrap>
              <p>Promocje, rabaty i nowości wyszłemy na e-mail</p>
              <Formik>
                <FormStyle>
                  <Input
                    // name="email"
                    placeholder="Wpisz swoj adres e-mail"
                    type="email"
                  />
                  <FormButton>
                    <span>Zapisz się</span>
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
