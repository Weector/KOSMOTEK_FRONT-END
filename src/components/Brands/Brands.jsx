import React from "react";
import { ReactComponent as Brand1 } from "../../images/brands/brand1.svg";
import { ReactComponent as Brand2 } from "../../images/brands/brand2.svg";
import { ReactComponent as Brand3 } from "../../images/brands/brand3.svg";
import { ReactComponent as Brand4 } from "../../images/brands/brand4.svg";
import { ReactComponent as Brand5 } from "../../images/brands/brand5.svg";
import { ReactComponent as Brand6 } from "../../images/brands/brand6.svg";
import { ItemBrand, ListBrand } from "./Brands.style";
import Container from "../Container/Container";

export default function Brands() {
  return (
    <Container>
      <ListBrand>
        <ItemBrand>
          <Brand1 />
        </ItemBrand>
        <ItemBrand>
          <Brand2 />
        </ItemBrand>
        <ItemBrand>
          <Brand3 />
        </ItemBrand>
        <ItemBrand>
          <Brand4 />
        </ItemBrand>
        <ItemBrand>
          <Brand5 />
        </ItemBrand>
        <ItemBrand>
          <Brand6 />
        </ItemBrand>
      </ListBrand>
    </Container>
  );
}
