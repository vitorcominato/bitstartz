/**
 *
 * ModalForm container of application
 *
 *
 */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './ModalForm.scss';
import CustomButton from '../../components/Button/CustomButton';

function ModalForm({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isModalClose, setIsModalClose] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const modalCssClass = classnames({
    overlay: true,
    '-open': isModalOpen,
    '-close': isModalClose,
  });

  const closeHandler = () => {
    setIsModalClose(true);
    onClose();
  };

  return (
    <div className={modalCssClass}>
      <div className="modal">
        <div className="modal-header">
          <h4>ADD NEW MOVIE</h4>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-item">
              <input placeholder="Movie Name" />
            </div>
            <div className="form-item">
              <input placeholder="Movie Year" type="number" />
            </div>
            <div className="btn-wrapper">
              <div>
                <CustomButton variant="outline" onClick={closeHandler}>Cancel</CustomButton>
              </div>
              <div>
                <CustomButton onClick={closeHandler}>Add movie</CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ModalForm;
