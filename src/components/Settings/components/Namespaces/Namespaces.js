import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Modal } from '@spone/ui';

import './Namepsaces.scss';

const initialValues = {
  namespace: ''
};

const Namespaces = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form namespaces-form">
      <div className="section-form-title">
        Namespaces
        <Button className="btn-add" clicked={() => setShowModal(true)}>
          <div className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields namespaces-list">
        <div className="namespace">
          <div className="name">Name 1</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>

        <div className="namespace">
          <div className="name">Name 1</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add namespace">
        <Formik enableReinitialize initialValues={initialValues} onSubmit={values => console.log(values)}>
          <Form className="section-form">
            <div className="section-form-fields">
              <Field component={Input} name="namespace" label="Namespace" />
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

export default Namespaces;
