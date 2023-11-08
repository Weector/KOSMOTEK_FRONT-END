import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PathItem, PathList, PathWrap, SortWrap } from "./Path.styled";

export default function Path() {
  return (
    <PathWrap>
      <PathList>
        <PathItem>
          <NavLink>KOSMOTEK</NavLink>
        </PathItem>
        <PathItem>
          <NavLink> Oczy </NavLink>
        </PathItem>
      </PathList>
      <SortWrap>
        <p>Sortuj według:</p>
        <Link>popularnośc</Link>
      </SortWrap>
    </PathWrap>
  );
}
