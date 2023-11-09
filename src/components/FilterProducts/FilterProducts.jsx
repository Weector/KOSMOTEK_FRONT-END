import filters from "../../data/filter.json";
import { FilterItem, FilterLink, FilterList } from "./FilterProducts.styled";

export default function FilterProducts() {
  return (
    <FilterList>
      {filters.map((filter) => {
        return (
          <FilterItem key={filter.id}>
            <FilterLink>{filter.title}</FilterLink>
          </FilterItem>
        );
      })}
    </FilterList>
  );
}
