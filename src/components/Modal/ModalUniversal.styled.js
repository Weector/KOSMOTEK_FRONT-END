import styled from "styled-components";

import { ReactComponent as Cross } from "../../images/svgs/cross.svg";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(94, 99, 99, 0.3);
  /* z-index: 10; */
`;

export const ModalConteiner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;

  padding: 40px 24px;

  transform: translate(-50%, -50%);
  background-color: #fff;

  /* min-height: 238px; */
  width: 596px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;

  color: var(--clr-secondary-text);
  background-color: inherit;

  &:hover {
    color: var(--clr-main-text);
  }
`;

export const CrossIcon = styled(Cross)`
  width: 100%;
  height: 100%;
`;
