/**
 *
 * Random Card component
 *
 *
 */
import React from 'react';
import smile from '../../assets/images/smile.png';
import './RandomCard.scss';
import CustomButton from '../../components/Button/CustomButton';

function RandomCard(props) {
  const { onFlip, isFlipped } = props;
  const textNotFlipped = {
    title: 'JUST A RANDOM CARD',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    btnText: 'CLICK TO FLIP THE CARD',
  };
  const textFlipped = {
    title: 'JUST ANOTHER RANDOM CARD',
    description: 'Pretend that is the same text XD',
    btnText: 'CLICK TO FLIP AGAIN',
  };
  const textCard = isFlipped ? textFlipped : textNotFlipped;
  return (
    <div className="random-card">
      <div className="random-content">
        <div className="random-icon">
          <img src={smile} alt="Smile" />
        </div>
        <h4 className="random-title">
          {textCard.title}
        </h4>
        <p className="random-text">
          {textCard.description}
        </p>
      </div>
      <div className="bottom-wrapper">
        <CustomButton variant="outline" className="w-100" onClick={onFlip}>{textCard.btnText}</CustomButton>
      </div>
    </div>
  );
}


export default RandomCard;
