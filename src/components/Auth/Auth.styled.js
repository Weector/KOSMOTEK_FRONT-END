import { Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 480px;
  padding: 80px;
  margin: 0px auto;
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  Button {
    margin-top: 16px;
  }
`;

export const Input = styled(Field)`
  padding-top: 14px;
  padding-bottom: 6px;
  width: 100%;

  border: none;
  outline: none;
  border-bottom: 0.75px solid var(--clr-stroke);
  /* ::placeholder {
    color: #bf4f74;
  } */
`;

export const LincWrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;
