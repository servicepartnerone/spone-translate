import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Modal } from '@spone/ui';

import './Languages.scss';

const initialValues = {
  language: ''
};

const Languages = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form languages-form">
      <div className="section-form-title">
        Languages
        <Button className="btn-add" clicked={() => setShowModal(true)}>
          <div className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields languages-list">
        <div className="language">
          <div className="name">EN</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>

        <div className="language">
          <div className="name">DE</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add language">
        <Formik enableReinitialize initialValues={initialValues} onSubmit={values => console.log(values)}>
          <Form className="section-form">
            <div className="section-form-fields">
              <Field component={Input} name="language" label="Language" />
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

export default Languages;
