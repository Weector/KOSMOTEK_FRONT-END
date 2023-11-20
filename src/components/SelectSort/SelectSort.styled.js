import styled from "styled-components";
import Select from "react-select";

export const SortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;

  p {
    color: var(--clr-secondary-text);
  }
`;

export const Sort = styled(Select)`
  & .react-select__control {
    border: none;
    background-color: inherit;
    outline: 0 !important;

    min-height: 19px;
    box-shadow: none;

    cursor: pointer;

    &:hover {
      border-color: transparent;
    }
  }

  & .react-select__value-container {
    padding: 0px;
  }

  & .react-select__indicator {
    transform: rotate(180deg);
  }

  & .react-select__control--menu-is-open {
    & .react-select__indicator {
      transform: rotate(0deg);
    }
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__indicator {
    padding: 4px;
  }

  & .react-select__menu {
    width: 140px;
    padding: 24px;
    box-shadow: none;
    margin-top: 0px;
    border-radius: 0;
    top: 35px;
    right: 0;

    & .react-select__menu-list {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }
  }

  & .react-select__option {
    padding: 0;
    background-color: inherit;
    color: var(--clr-secondary-text);
    cursor: pointer;
  }

  & .react-select__option--is-selected {
    color: var(--clr-main-text);
  }
`;
