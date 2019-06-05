import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from '@spone/ui';

import './CreateProject.scss';

const CreateProject = ({ createProject, closeModal }) => {
  const initialValues = {
    name: ''
  };

  const handleSubmit = async values => {
    createProject({
      variables: values
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
          <Field component={Input} name="name" label="Project name" placeholder="Enter project name" />
        </div>

        <div className="form-buttons one-right">
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </Formik>
  );
};

const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!) {
    createProject(name: $name) {
      id
      name
    }
  }
`;

const CreateProjectWithMutation = graphql(CREATE_PROJECT, {
  name: 'createProject',
  options: {
    refetchQueries: ['ProjectsQuery']
  }
})(CreateProject);

export default CreateProjectWithMutation;
