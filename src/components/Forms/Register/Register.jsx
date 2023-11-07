import { Formik } from "formik";
import Button from "../../Button/Button";
import { useTranslation } from "react-i18next";
import {
  FormContainer,
  FormStyled,
  FormTitle,
  Input,
  LincWrap,
} from "../Forms.styled";
import { Link } from "react-router-dom";

export default function Register() {
  const { t } = useTranslation();

  return (
    <FormContainer>
      <FormTitle>{t("forms.register")}</FormTitle>
      <Formik>
        <FormStyled>
          <Input placeholder={t("forms.name")} />
          <Input placeholder={t("forms.surname")} />
          <Input placeholder={t("forms.birth_date")} />
          <Input placeholder={t("forms.phone")} />
          <Input placeholder={t("forms.email")} />
          <Input placeholder={t("forms.password")} />
          <Input placeholder={t("forms.repeat_password")} />
          <Button text={t("forms.btn_register")} width="100%" />
        </FormStyled>
      </Formik>
      <LincWrap>
        <Link to="/login">{t("forms.login")}</Link>
      </LincWrap>
    </FormContainer>
  );
}

//  &#x2A;
