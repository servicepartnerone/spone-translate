import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from '@spone/ui';

import CreateLanguage from './components/CreateLanguage/CreateLanguage';

import './Languages.scss';

const Languages = ({
  languages,
  match: {
    params: { id }
  }
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="section-form languages-form">
      <div className="section-form-title">
        Languages
        <Button className="btn-add" onClick={() => setShowModal(true)}>
          <div className="icon icon-plus" />
          ADD
        </Button>
      </div>

      <div className="section-form-fields languages-list">
        {languages &&
          languages.length > 0 &&
          languages.map(lang => (
            <div className="language" key={lang.name}>
              <div className="name">{lang.name}</div>

              <Button className="btn-remove" variant="link">
                <span className="icon icon-trash" />
              </Button>
            </div>
          ))}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add language">
        <CreateLanguage closeModal={() => setShowModal(false)} projectId={id} />
      </Modal>
    </div>
  );
};

export default withRouter(Languages);
