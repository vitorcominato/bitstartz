/**
 *
 * Card component of application
 *
 *
 */
import React, { Children } from 'react';
import classnames from 'classnames';
import './Card.scss';

function Card(props) {
  const {
    title,
    action,
    children,
    className,
    dataOrder,
    flippedDOM,
  } = props;

  const carCssClass = classnames({
    card: true,
    [className]: className,
    [`data-order-${dataOrder}`]: dataOrder,
  });
  return (
    <div className={carCssClass}>
      <div className="flipper">
        <div className="card-wrapper -front">
          <div className="card-header">
            <h4 className="card-title">{title}</h4>
            <div className="card-action">
              {action && (
                <button type="button" className="link-button" onClick={action.click}>{action.text}</button>
              )}
            </div>
          </div>
          <div className="card-body">
            {Children.toArray(children)}
          </div>
        </div>
        <div className="card-wrapper -back">
          <div className="card-header">
            <h4 className="card-title">{title}</h4>
            <div className="card-action">
              {action && (
                <button type="button" className="link-button" onClick={action.click}>{action.text}</button>
              )}
            </div>
          </div>
          <div className="card-body">
            {flippedDOM}
          </div>
        </div>
      </div>

    </div>
  );
}


export default Card;
