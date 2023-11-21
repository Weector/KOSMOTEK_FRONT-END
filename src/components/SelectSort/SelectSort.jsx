import React, { useState } from "react";

import { Sort, SortWrap } from "./SelectSort.styled";

const options = [
  { value: "name", label: "nazwa" },
  { value: "cost", label: "kosztów" },
  { value: "popularity", label: "popularności" },
  { value: "date", label: "daty" },
  { value: "growth", label: "wzrostu" },
  { value: "decline", label: "malejąco" },
];

export default function SelectSort() {
  const [selectedOption, setSelectedOption] = useState({
    value: "popularity",
    label: "popularności",
  });
  console.log(selectedOption);

  return (
    <SortWrap>
      <p>Sortuj według:</p>

      <Sort
        defaultValue={options[2]}
        onChange={setSelectedOption}
        options={options}
        classNamePrefix="react-select"

        // menuIsOpen
      />
    </SortWrap>
  );
}
