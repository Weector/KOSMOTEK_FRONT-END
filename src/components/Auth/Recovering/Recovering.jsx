import { Formik } from "formik";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  FormStyled,
  FormTitle,
  Input,
  LincWrap,
} from "../Auth.styled";
import { Link } from "react-router-dom";

export default function Recovering() {
  const { t } = useTranslation();
  return (
    <FormContainer>
      <FormTitle>{t("forms.password_recovery")}</FormTitle>
      <Formik>
        <FormStyled>
          <Input placeholder={t("forms.email")} />
          <Button text={t("forms.remind")} width="100%" />
        </FormStyled>
      </Formik>
      <LincWrap>
        <Link to="/login">{t("forms.login")}</Link>
      </LincWrap>
    </FormContainer>
  );
}
