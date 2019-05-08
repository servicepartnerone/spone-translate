import React from 'react';
import { Button, Textarea } from '@spone/ui';

import './Translations.scss';

const Translations = () => (
  <div className="translations-list">
    <div className="translation">
      <div className="translation-title">
        <div className="key">Login.email</div>
        <Button className="edit-btn">
          <span className="icon icon-settings" />
        </Button>
      </div>

      <div className="translation-body">
        <div className="left-column">
          <div className="reference">de (Reference Value)</div>
          <div className="value">Please enter e-mail</div>
        </div>

        <div className="right-column">
          <div className="reference">
            <span>de (New Value)</span>
            <span>(21)</span>
          </div>
          <Textarea rows={2} name="translation" placeholder="Enter value" />
        </div>
      </div>
    </div>

    <div className="floating-btn">
      <Button className="btn btn-discard" variant="secondary">
        <span className="icon icon-trash" />
        Discard
      </Button>

      <div className="counters">
        <div>2 to update</div>
        <div>1 to add</div>
      </div>

      <Button className="btn btn-save">
        <span className="icon icon-attachment" />
        Save
      </Button>
    </div>
  </div>
);

export default Translations;
