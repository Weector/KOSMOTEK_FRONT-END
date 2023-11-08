import filters from "../../data/filter.json";
import { Link } from "react-router-dom";
import { FilterItem, FilterList } from "./FilterProducts.styled";

export default function FilterProducts() {
  return (
    <FilterList>
      {filters.map((filter) => {
        return (
          <FilterItem key={filter.id}>
            <Link>{filter.title}</Link>
          </FilterItem>
        );
      })}
    </FilterList>
  );
}
