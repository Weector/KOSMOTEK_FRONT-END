import {
  NavigationStyle,
  NavigationWrap,
  LinkStyle,
} from "./Navigation.styled";

export default function Navigation() {
  return (
    <NavigationWrap>
      <NavigationStyle>
        <LinkStyle to="/promotion">Promocję</LinkStyle>
        <LinkStyle to="/eyes">Oczy</LinkStyle>
        <LinkStyle to="/makeup">Palety do makijażu</LinkStyle>
        <LinkStyle to="/body">Ciało i kąpiel</LinkStyle>
        <LinkStyle to="/lips">Usta</LinkStyle>
        <LinkStyle to="/face">Twarz</LinkStyle>
        <LinkStyle to="/all">Wszystkie towary</LinkStyle>
      </NavigationStyle>
    </NavigationWrap>
  );
}
