import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from '@spone/ui';

import './CreateLanguage.scss';

import { LANGUAGE_FRAGMENT } from 'fragments';

const CreateLanguage = ({ createLanguage, closeModal, projectId }) => {
  const initialValues = {
    name: ''
  };

  const handleSubmit = async values => {
    createLanguage({
      variables: {
        ...values,
        project: projectId
      }
    })
      .then(() => {
        closeModal && closeModal();
      })
      .catch(err => console.log(err));
  };

  return (
    <Formik enableReinitialize initialValues={initialValues} onSubmit={values => handleSubmit(values)}>
      <Form className="section-form">
        <div className="section-form-fields">
          <Field component={Input} name="name" label="Language" placeholder="Enter language name" />
        </div>

        <div className="form-buttons one-right">
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </Formik>
  );
};

const CREATE_LANGUAGE = gql`
  mutation CreateLanguage($name: String!, $project: String!) {
    createLanguage(name: $name, project: $project) {
      ...languageFragment
    }
  }
  ${LANGUAGE_FRAGMENT}
`;

const CreateProjectWithMutation = graphql(CREATE_LANGUAGE, {
  name: 'createLanguage'
})(CreateLanguage);

export default CreateProjectWithMutation;
