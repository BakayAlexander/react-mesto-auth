import React from 'react';
import Popup from './Popup';
import doneImage from '../images/done.svg';
import falseImage from '../images/false.svg';

function InfoTooltip(props) {
  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose} name="info-tooltip">
      <div className="popup__container_info-tooltip">
        <img
          className="popup__info-tooltip-image"
          src={
            // условие ?? doneImage : falseImage
            falseImage
          }
        />
        <h2 className="popup__title_info-tooltip">{props.title}</h2>
        <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
