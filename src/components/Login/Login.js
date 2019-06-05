import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from '@spone/ui';

import { AUTH_TOKEN } from '../../constants';
import { USER_FRAGMENT } from '../../fragments';

import './Login.scss';

const Login = ({ login, history, refreshTokenFn }) => {
  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = async values => {
    login({
      variables: values
    })
      .then(result => {
        const { token } = result.data.login;

        refreshTokenFn &&
          refreshTokenFn({
            [AUTH_TOKEN]: token
          });

        history.replace('/');
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <div className="login-page">
      <Formik enableReinitialize initialValues={initialValues} onSubmit={values => handleSubmit(values)}>
        <Form className="login-form section-form">
          <h1 className="page-title">Login</h1>

          <div className="section-form-fields">
            <Field component={Input} type="email" name="email" label="E-mail" placeholder="Your email" />

            <Field component={Input} type="password" name="password" label="Password" placeholder="Your password" />
          </div>

          <div className="form-buttons">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...userFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

export default graphql(LOGIN_USER_MUTATION, { name: 'login' })(withRouter(Login));
