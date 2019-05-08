import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button, Modal } from '@spone/ui';

import './Users.scss';

const initialValues = {
  name: ''
};

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form users-form">
      <div className="section-form-title">
        Users
        <Button className="btn-add" clicked={() => setShowModal(true)}>
          <div className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields users-list">
        <div className="user">
          <div className="name">Admin</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>

        <div className="user">
          <div className="name">Another user</div>

          <Button className="btn-remove">
            <span className="icon icon-trash" />
          </Button>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add user">
        <Formik enableReinitialize initialValues={initialValues} onSubmit={values => console.log(values)}>
          <Form className="section-form">
            <div className="section-form-fields">
              <Field component={Input} name="name" label="User name" />
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

export default Users;
