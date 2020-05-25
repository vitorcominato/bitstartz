/**
 *
 * SideBar of application
 *
 *
 */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './SideBar.scss';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CustomButton from '../../components/Button/CustomButton';

function SideBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUserInfo, setToggleUserInfo] = useState(true);
  const { onMenuToggle, isOpen } = props;

  useEffect(() => {
    setToggleMenu(!isOpen);
  }, [isOpen]);

  const sideBarClass = classnames({
    sidebar: true,
    '-close': toggleMenu,
  });

  const userInfoClass = classnames({
    'user-activity': true,
    '-open': toggleUserInfo,
  });

  const hoverTooltip = (event) => {
    const root = document.getElementById('root');
    const tooltip = document.createElement('div');
    const offset = event.target.getBoundingClientRect();
    tooltip.classList.add('tooltip');
    tooltip.appendChild(document.createTextNode(event.target.getAttribute('data-tooltip')));
    tooltip.setAttribute('style', `top: ${offset.y - 2}px;left: ${offset.x + 40}px;`);
    root.appendChild(tooltip);
  };

  const blurTooltip = () => {
    const tooltip = document.getElementsByClassName('tooltip')[0];
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  };

  return (
    <aside className={sideBarClass}>
      <h2>My Account</h2>
      <div className="my-account-toggle" onClick={() => { setToggleMenu(!toggleMenu); onMenuToggle(); }} role="presentation">
        <i className="icon-arrow-forward" />
      </div>
      <section className={userInfoClass}>
        <div className="user-header">
          <div className="rating">8</div>
          <h3>johndoe2000</h3>
          <div className="toggle-user" onClick={() => { setToggleUserInfo(!toggleUserInfo); }} role="presentation">
            <i className="icon-arrow-forward" />
          </div>
          <ProgressBar complete={57} />
          <div className="closed-menu-item">
            <i className="icon-movie" data-tooltip="1,846" onMouseEnter={hoverTooltip} onMouseLeave={blurTooltip} />
          </div>
          <div className="closed-menu-item btn-item">
            <CustomButton>
              <i className="icon-sum" />
            </CustomButton>
          </div>
        </div>
        <div className="user-body">
          <h4>1,846</h4>
          <ProgressBar color="secondary" complete={74} />
          <div className="goals">
            <div>
              1,403
              <span>Movies seen</span>
            </div>
            <div>
              546
              <span>Movies until next level</span>
            </div>
          </div>
          <div className="button-wrapper">
            <CustomButton color="secondary">Button</CustomButton>
            <CustomButton>Button</CustomButton>
          </div>
        </div>
      </section>
      <section className="menu-wrapper">
        <ul className="menu-list">
          <li className="list-item">
            <a href="#/">
              <i className="icon-clock" />
              <p>Menu Item</p>
            </a>
          </li>
          <li className="list-item">
            <a href="#/">
              <i className="icon-clock" />
              <p>Menu Item</p>
            </a>
          </li>
          <li className="list-item">
            <a href="#/">
              <i className="icon-present" />
              <p>Menu Item</p>
            </a>
          </li>
          <li className="list-item">
            <a href="#/">
              <i className="icon-user" />
              <p>Menu Item</p>
            </a>
          </li>
          <li className="list-item">
            <a href="#/">
              <i className="icon-megaphone" />
              <p>Menu Item</p>
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}


export default SideBar;
