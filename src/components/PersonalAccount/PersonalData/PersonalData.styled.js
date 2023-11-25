import { Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 587px;
  padding-top: 40px;
  margin: 0px auto;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;

  color: var(--clr-secondary-text);
  font-size: 12px;
  letter-spacing: 0.48px;
`;

export const FieldStyled = styled(Field)`
  padding: 8px 0px;

  color: var(--clr-main-text);

  font-size: 14px;
  letter-spacing: 0.56px;
  font-family: inherit;

  border: none;
  outline: none;

  border-bottom: 0.75px solid var(--clr-stroke);

  &:focus {
    border-bottom: 0.75px solid var(--clr-main-text);
  }
`;

export const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    width: 120px;
  }
`;

export const WrapButton = styled.div`
  margin-top: 8px;
  margin-left: auto;
`;
