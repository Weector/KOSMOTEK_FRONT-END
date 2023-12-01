import styled from "styled-components";
import { ReactComponent as Heart } from "../../images/svgs/heart.svg";
import { ReactComponent as Remove } from "../../images/svgs/trash.svg";

export const Title = styled.h2`
  padding-top: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.8px;

  border-top: 0.75px solid var(--clr-stroke);
`;

export const ProductsList = styled.ul`
  margin-bottom: 40px;
`;

export const ProductItem = styled.li`
  display: flex;
  column-gap: 24px;
  justify-content: space-between;

  padding: 40px 0px;

  border-bottom: 0.75px solid var(--clr-stroke);
`;

export const ProductWrap = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const ProductImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 187px;
  height: 187px;
  padding: 10px;
`;

export const ProductImg = styled.img`
  max-height: 100%;
`;

export const ProductInformWrap = styled.div`
  p {
    margin-bottom: 4px;
  }
`;

export const ProductName = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
`;

export const WrapText = styled.div`
  color: var(--clr-secondary-text);
  margin-bottom: 52px;
`;

export const InputWrap = styled.div`
  display: flex;

  margin-bottom: 28px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: flex-end;
  column-gap: 8px;

  &::before {
    content: "";
    display: block;
    position: relative;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 0.75px solid var(--clr-stroke);
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    left: 0;
    top: 0;

    width: 20px;
    height: 20px;
    border: 0.75px solid var(--clr-main-text);

    background-image: url("icons/check.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const Input = styled.input`
  position: absolute;
  &:checked + ${Label} {
    &::after {
      display: block;
    }
  }
  opacity: 0;
`;

export const ActWrap = styled.div`
  display: flex;
  column-gap: 41px;
`;
// ========
export const IconWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: flex-end;

  line-height: 1.5;
`;

export const HeartWrap = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;

  stroke: black;
`;

export const HeartIcon = styled(Heart)`
  width: 100%;
  height: 100%;

  &:hover {
    stroke: none;
    fill: var(--clr-actoin);
  }
`;
// ===============================

export const RemoveIconWrap = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const RemoveIcon = styled(Remove)`
  width: 100%;
  height: 100%;
`;

// ==============================

export const ProductWrapRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: end;
`;

export const PriseAction = styled.div`
  color: var(--clr-actoin);
  font-size: 28px;
  line-height: 1.54;
  letter-spacing: 1.12px;
`;

export const PriseProductPrevious = styled.div`
  color: var(--clr-secondary-text);
  text-decoration: line-through;
`;

export const PriseProduct = styled.div`
  font-size: 28px;
  line-height: 1.54;
  letter-spacing: 1.12px;
`;

export const DeliveryWrap = styled.div`
  margin-bottom: 24px;
  & :first-child {
    color: #48ae26;
  }
`;
// ================================

export const TotalWrap = styled.div`
  text-align: end;

  margin-bottom: 40px;
`;

export const TotalText = styled.div`
  font-weight: 600;
  & :first-child {
    color: var(--clr-secondary-text);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.48px;
    margin-right: 25px;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 18px;
  margin-left: auto;
  width: 264px;
`;
