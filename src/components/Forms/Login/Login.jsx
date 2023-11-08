import { Formik } from "formik";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  FormStyled,
  FormTitle,
  Input,
  LincWrap,
} from "../Forms.styled";

export default function Login() {
  const { t } = useTranslation();
  return (
    <FormContainer>
      <FormTitle>{t("forms.login")}</FormTitle>
      <Formik>
        <FormStyled>
          <Input placeholder={t("forms.email")} />
          <Input placeholder={t("forms.password")} />
          <Button text={t("forms.log")} width="100%" />
        </FormStyled>
      </Formik>
      <LincWrap>
        <Link to="/recovering">{t("forms.forgot_password")}</Link>
        <Link to="/register">{t("forms.register")}</Link>
      </LincWrap>
    </FormContainer>
  );
}
