import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../../Button/Button';
import {
  FieldStyled,
  FormContainer,
  FormStyled,
  LabelStyled,
  WrapButton,
  WrapInput,
} from './PersonalData.styled';

export function PersonalData({ value }) {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    dateOfBirth: Yup.string().required(),

    phone: Yup.string().required(),
    city: Yup.string().required(),
    street: Yup.string().required(),
    home: Yup.string().required(),
    apartment: Yup.string().required(),
    index: Yup.string().required(),
  });

  const onSubmit = values => {
    const value = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      dateOfBirth: values.dateOfBirth,
      phone: values.phone,
      address: {
        city: values.city,
        street: values.street,
        home: values.home,
        apartment: values.apartment,
        index: values.index,
      },
    };

    console.log(value);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
          phone: '',
          city: '',
          street: '',
          home: '',
          apartment: '',
          index: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <FormStyled onSubmit={handleSubmit}>
            <LabelStyled>
              Imię
              <FieldStyled
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
              <ErrorMessage name="firstName" />
            </LabelStyled>
            <LabelStyled>
              Nazwisko
              <FieldStyled
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
            </LabelStyled>
            <LabelStyled>
              Email / Login
              <FieldStyled
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email" />
            </LabelStyled>
            <LabelStyled>
              Data urodzin
              <FieldStyled
                name="dateOfBirth"
                type="text"
                value={values.dateOfBirth}
                onChange={handleChange}
                placeholder="dd.mm.yyyy"
              />
            </LabelStyled>
            <LabelStyled>
              Numer telefonu
              <FieldStyled
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
              />
            </LabelStyled>

            <LabelStyled>
              Miejscowość
              <FieldStyled
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
              />
            </LabelStyled>
            <LabelStyled>
              Ulica
              <FieldStyled
                name="street"
                type="text"
                value={values.street}
                onChange={handleChange}
              />
            </LabelStyled>
            <WrapInput>
              <LabelStyled>
                Dom
                <FieldStyled
                  name="home"
                  type="text"
                  value={values.home}
                  onChange={handleChange}
                />
              </LabelStyled>
              <LabelStyled>
                Mieszkanie
                <FieldStyled
                  name="apartment"
                  type="text"
                  value={values.apartment}
                  onChange={handleChange}
                />
              </LabelStyled>
              <LabelStyled>
                Kod pocztowy
                <FieldStyled
                  name="index"
                  type="text"
                  value={values.index}
                  onChange={handleChange}
                />
              </LabelStyled>
            </WrapInput>
            <WrapButton>
              <Button width="180px" text="Zapisz" type="submit" />
            </WrapButton>
          </FormStyled>
        )}
      </Formik>
    </FormContainer>
  );
}
