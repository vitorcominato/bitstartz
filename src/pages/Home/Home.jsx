/**
 *
 * Home Page of application
 *
 *
 */
import React, { useState } from 'react';
import classnames from 'classnames';
import PageContent from '../../containers/PageContent/PageContent';
import SideBar from '../../containers/SideBar/SideBar';
import './Home.scss';
import Card from '../../components/Card/Card';
import CustomButton from '../../components/Button/CustomButton';
import MyCoupons from '../../containers/MyCoupons/MyCoupons';
import PopularMovies from '../../containers/PopularMovies/PopularMovies';
import RandomCard from '../../containers/RandomCard/RandomCard';
import ModalForm from '../../containers/ModalForm/ModalForm';

function Home() {
  const [rollBack, setRollBack] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [openModalForm, setOpenModalForm] = useState(false);


  const onFlipHandler = () => {
    setRollBack(!rollBack);
  };

  const randomCardCssClass = classnames({
    'no-header': true,
    'roll-back': rollBack,
  });
  const mainClassName = classnames({
    'menu-open': menuOpen,
  });
  return (
    <PageContent page="home">
      <SideBar onMenuToggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
      <main className={mainClassName}>
        <h1>
          <div className="burger-menu" onClick={() => { setMenuOpen(false); }} role="presentation">
            <i className="icon-menu" />
          </div>
          Dashboard
        </h1>
        <section className="card-wraper">
          <div id="octagon" />
          <div className="cards-wrapper">
            <div className="card-holder w-33 md-100">
              <Card
                title="movies"
                action={{
                  text: 'Add New Movie',
                  click: () => {
                    setOpenModalForm(!openModalForm);
                  },
                }}
                dataOrder="1"
              >
                <div className="huge-number">
                  1,846
                </div>
                <div className="bottom-wrapper">
                  <CustomButton className="w-100" id="big-green-button">Big Green Button</CustomButton>
                </div>
              </Card>
            </div>
            <div className="cards-wrapper card-holder w-66 md-100">
              <div className="card-holder w-100">
                <Card title="my coupons" className="no-body-padding" dataOrder="2">
                  <MyCoupons />
                </Card>
              </div>
              <div className="card-holder w-50 lg-100">
                <Card title="popular movies" className="no-body-padding" dataOrder="3">
                  <PopularMovies />
                </Card>
              </div>
              <div className="card-holder w-50 lg-100">
                <Card
                  className={randomCardCssClass}
                  dataOrder="4"
                  flippedDOM={(
                    <RandomCard onFlip={onFlipHandler} isFlipped />
                  )}
                >
                  <RandomCard onFlip={onFlipHandler} />
                </Card>
              </div>
            </div>
          </div>
        </section>
        <ModalForm isOpen={openModalForm} onClose={() => { setOpenModalForm(!openModalForm); }} />
      </main>
    </PageContent>
  );
}


export default Home;
