import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Modal } from '@spone/ui';

import './ProjectsList.scss';

const initialValues = {
  name: ''
};

const ProjectsList = ({ projects }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form projects-form">
      <div className="section-form-title">
        Projects
        <Button className="btn-add" clicked={() => setShowModal(true)}>
          <div className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields projects-list">
        {projects.map(project => (
          <Link className="project" to="projects/cwi">
            <div className="name">{project.name}</div>
            <div className="keys">55/55</div>
          </Link>
        ))}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add project">
        <Formik enableReinitialize initialValues={initialValues} onSubmit={values => console.log(values)}>
          <Form className="section-form">
            <div className="section-form-fields">
              <Field component={Input} name="name" label="Project" />
            </div>

            <div className="form-buttons one-right">
              <Button type="submit">Add</Button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default ProjectsList;
