import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Select, Button } from '@spone/ui';

const initialValues = {
  project: 'pwi'
};

const Information = () => (
  <Formik enableReinitialize initialValues={initialValues} onSubmit={values => console.log(values)}>
    <Form className="section-form">
      <div className="section-form-title">Project Information</div>

      <div className="section-form-fields">
        <Field
          component={Select}
          name="project"
          label="Select project"
          hideNoneOption
          options={[
            {
              label: 'CWI',
              value: 'cwi'
            },
            {
              label: 'PWI',
              value: 'pwi'
            }
          ]}
        />
      </div>

      <div className="form-buttons one-right">
        <Button type="submit">Update</Button>
      </div>
    </Form>
  </Formik>
);

export default Information;
