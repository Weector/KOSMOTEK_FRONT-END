import React from "react";
import { Link, useMatches } from "react-router-dom";
import { PathItem, PathList, PathWrap } from "./Breadcrumbs.styled";
import SelectSort from "../SelectSort/SelectSort";

export default function Breadcrumbs() {
  let matches = useMatches();

  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <PathWrap>
      <PathList>
        {crumbs.map((cramb, index) => {
          return (
            <PathItem key={index}>
              <Link to={matches[index].pathname}>{cramb}</Link>
            </PathItem>
          );
        })}
      </PathList>
      <SelectSort />
    </PathWrap>
  );
}
