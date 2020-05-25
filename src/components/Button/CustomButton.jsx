/**
 *
 * Cunstom Button component
 *
 *
 */
import React, { Children } from 'react';
import classnames from 'classnames';
import './CustomButton.scss';

function CustomButton(props) {
  const {
    children,
    onClick,
    variant,
    color,
    className,
    id,
  } = props;
  const buttonCssClasses = classnames({
    'custom-button': true,
    [color]: color,
    [variant]: variant,
    [className]: className,
  });
  return (
    <button
      type="button"
      className={buttonCssClasses}
      onClick={!onClick ? () => { } : onClick}
      id={id || Math.random()}
    >
      {Children.toArray(children)}
    </button>
  );
}


export default CustomButton;
