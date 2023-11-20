import styled from "styled-components";

import { ReactComponent as Delivery } from "../../images/svgs/advantages/delivery.svg";
import { ReactComponent as Original } from "../../images/svgs/advantages/original.svg";
import { ReactComponent as Services } from "../../images/svgs/advantages/services.svg";
import { ReactComponent as Pin } from "../../images/svgs/advantages/pin.svg";
import { ReactComponent as Present } from "../../images/svgs/advantages/present.svg";
import { Link } from "react-router-dom";

export const AdvantagesContainer = styled.div`
  margin-top: 160px;
  margin-bottom: 160px;
`;

export const AdvantagesList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const AdvantagesItem = styled.li`
  width: ${(props) => props.$width};
`;

export const AdvantagesLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 19px;

  height: 100%;
  width: 100%;

  text-align: center;

  &:hover {
    transform: scale(1.02);
  }
`;

export const AdvantagesIconTumb = styled.div`
  width: 100%;
  height: auto;
`;

export const DeliveryIcon = styled(Delivery)`
  width: 100%;
  height: auto;
`;

export const OriginalIcon = styled(Original)`
  width: 100%;
  height: auto;
`;

export const ServicesIcon = styled(Services)`
  width: 100%;
  height: auto;
`;

export const PinIcon = styled(Pin)`
  width: calc(100% - 34px);

  height: auto;

  margin-left: auto;
  margin-right: auto;
`;

export const PresentIcon = styled(Present)`
  width: 100%;
  height: auto;
`;
