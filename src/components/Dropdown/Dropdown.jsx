import React from "react";
import dropdownItems from "../../data/dropdownItem.json";
import { Link } from "react-router-dom";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
  DropdownListWrap,
  ImgContainer,
} from "./Dropdown.styled";
import RandomProduct from "./RandomProduct/RandomProduct";

export default function Dropdown({ product }) {
  return (
    <>
      <DropdownContainer>
        <DropdownListWrap>
          <DropdownList>
            {dropdownItems.map((item) => {
              return (
                <DropdownItem key={item.id}>
                  <Link to={`${item.title}`}>{item.title}</Link>
                </DropdownItem>
              );
            })}
          </DropdownList>
        </DropdownListWrap>
        <ImgContainer $img={product.img} $img2={product.img2}></ImgContainer>
        <RandomProduct product={product} />
      </DropdownContainer>
    </>
  );
}
