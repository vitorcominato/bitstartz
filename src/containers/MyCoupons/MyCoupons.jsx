/**
 *
 * MyCoupons container of application
 *
 *
 */
import React from 'react';
import './MyCoupons.scss';
import CustomButton from '../../components/Button/CustomButton';

function MyCoupons() {
  return (
    <ul className="my-coupons">
      <li className="coupon-item">
        <div className="list-icon">
          <i className="icon-ticket">
            <i className="icon-star" />
          </i>
        </div>
        <div className="list-text">
          <div className="title-subtitle">
            <p>
              Get $5 Off on Purchase of 2 &quot;Fast6&quot; Movie Tickets With Code
            </p>
          </div>
          <CustomButton> Button </CustomButton>
        </div>
      </li>
      <li className="coupon-item">
        <div className="list-icon">
          <i className="icon-ticket">
            <i className="icon-star" />
          </i>
        </div>
        <div className="list-text">
          <div className="title-subtitle">
            <p>Prestige Movie Ticket</p>
            <span>Expires: 1d:5h:25m:55s</span>
          </div>
          <CustomButton> Button </CustomButton>
        </div>
      </li>
      <li className="coupon-item">
        <div className="list-icon">
          <i className="icon-ticket">
            <i className="icon-star" />
          </i>
        </div>
        <div className="list-text">
          <div className="title-subtitle">
            <p>10 Movie Tickets</p>
            <span>Expires: 1d:5h:25m:55s</span>
          </div>
          <CustomButton> Button </CustomButton>
        </div>
      </li>
    </ul>
  );
}


export default MyCoupons;
