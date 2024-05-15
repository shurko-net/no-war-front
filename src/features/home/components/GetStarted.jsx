import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.scss';
import tankImage from '../../../assets/images/tank.svg';
import destroyedHouse from '../../../assets/images/destroyed-house.svg';
import ruinedCity from '../../../assets/images/ruined-city.svg';
import HameInfoCard from '../../../components/ui/HomeInfoCard';
import CapabilitiesCard from '../../../components/ui/CapabilitiesCard';
import GirlWithTank from '../../../assets/images/girl-with-tank.svg';
import Military from '../../../assets/images/military.svg';
import ProjectCard from '../../../components/ui/ProjectCard';

function GetStarted() {
  const listRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);

  function handleClickRight() {
    if (listRef.current) {
      listRef.current.scrollLeft += 420 + 20;
    }
  }
  function handleClickLeft() {
    if (listRef.current) {
      listRef.current.scrollLeft -= 420 + 20;
    }
  }

  useEffect(() => {
    setContentVisible(true);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (listRef.current) {
        const scrollableWidth = listRef.current.scrollWidth - listRef.current.clientWidth;
        setCanScrollRight(listRef.current.scrollLeft < scrollableWidth);
        setCanScrollLeft(listRef.current.scrollLeft > 0);
      }
    }

    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll);
      return () => {
        listRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (listRef.current) {
      const scrollableWidth = listRef.current.scrollWidth - listRef.current.clientWidth;
      setCanScrollRight(listRef.current.scrollLeft < scrollableWidth);
      setCanScrollLeft(listRef.current.scrollLeft > 0);
    }
  }, [isContentVisible]);

  return (
    <>
      <section className="get-started">
        <div className="get-started__container">
          <div className="get-started__content">
            <div className="get-started__block-text block-text">
              <h1 className="block-text__title">Збори для людей, що постраждали від війни</h1>
              <div className="block-text__text">
                Отримайте фінансову підтримку для власних потреб або допоможіть тим, хто потребує
              </div>
              <div className="block-text__buttons button">
                <Link to="/" className="button button_black">
                  Підтримати збір
                </Link>
                <Link to="/" className="button button_green">
                  Опублікувати збір
                </Link>
              </div>
            </div>
            <div className="get-started__images images">
              <div
                className={`images__rectangle ${isContentVisible ? 'images__rectangle_active' : ''}`}
              />
              <img
                src={tankImage}
                className={`images__first ${isContentVisible ? 'images__first_active' : ''}`}
                alt="Танк"
              />
              <img
                src={destroyedHouse}
                className={`images__second ${isContentVisible ? 'images__second_active' : ''}`}
                alt="Зруйнований будинок"
              />
              <img
                src={ruinedCity}
                className={`images__third ${isContentVisible ? 'images__third_active' : ''}`}
                alt="Зруйноване місто"
              />
            </div>
          </div>
          <div className="get-started__info info">
            <div className="info__navigation">
              <div
                onClick={handleClickLeft}
                className={`info__left-button ${canScrollLeft ? 'info__left-button_enabled' : ''}`}
              />
              <div
                onClick={handleClickRight}
                className={`info__right-button ${canScrollRight ? 'info__right-button_enabled' : ''}`}
              />
            </div>
            <div ref={listRef} className="info__list">
              <HameInfoCard
                number="01"
                title="Ми підтримуємо військових забезпечуючи"
                text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
              />
              <HameInfoCard
                number="02"
                title="Ми підтримуємо військових забезпечуючи"
                text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
              />
              <HameInfoCard
                number="03"
                title="Ми підтримуємо військових забезпечуючи"
                text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
              />
              <HameInfoCard
                number="04"
                title="Ми підтримуємо військових забезпечуючи"
                text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
              />
              <HameInfoCard
                number="05"
                title="Ми підтримуємо військових забезпечуючи"
                text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-fund">
        <div className="about-fund__container">
          <div className="about-fund__box">
            <h1 className="about-fund__title">Про фонд</h1>
            <div className="about-fund__text-box text-box">
              <p className="text-box__text text-green">
                NoWar - це платформа, призначена для{' '}
                <span className="text-green">
                  {' '}
                  надання підтримки та <br /> допомоги
                </span>{' '}
                тим, хто постраждав від невиправних наслідків війни.
                <br /> У період кризи пошук фінансових ресурсів може стати важким завданням, і ми
                розуміємо термінову потребу у допомозі.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-capabilities">
        <div className="our-capabilities__container">
          <h1 className="our-capabilities__title">Наші можливості</h1>
          <div className="our-capabilities__body body">
            <CapabilitiesCard
              number="01"
              title="Збори для Військових"
              text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів та устаткування, необхідних для їхнього важливого завдання."
              src={GirlWithTank}
              alt="Дівчина з танком"
            />
            <div className="body__line" />
            <CapabilitiesCard
              number="02"
              title="Збори для Військових"
              text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів та устаткування, необхідних для їхнього важливого завдання."
              src={Military}
              alt="Військові"
            />
          </div>
          <Link to="/" className="our-capabilities__button">
            Підтримати збір
          </Link>
        </div>
      </section>
      <section className="help-info">
        <div className="help-info__container">
          <div className="help-info__body">
            <div className="help-info__fees fees">
              <div className="fees__content">
                <span className="fees__number">153</span>
                <p>закритих фондів</p>
              </div>
              <div className="fees__content">
                <span className="fees__number">65 050</span>
                <p>тисяч гривень зібрано за весь час</p>
              </div>
            </div>
            <div className="help-info__we-believe we-believe">
              <div className="we-believe__content">
                <h1 className="we-believe__title">Ми віримо</h1>
                <p className="we-believe__text">
                  в силу спільної допомоги та єднання для подолання
                  <br /> важливих випробувань війни. Приєднуйтеся до NoWar і беріть участь у
                  спільноті, що допомагає тим, хто потребує підтримки. <br />
                  <br /> Разом ми можемо змінити ситуацію та надати допомогу тим, хто цього
                  потребує.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="urgent-meetings">
        <div className="urgent-meetings__container">
          <div className="urgent-meetings__body">
            <h1 className="urgent-meetings__title">Термінові збори</h1>
            <div className="urgent-meetings__slider-panel slider-panel">
              <span className="slider-panel__text">Усі збори</span>
              <div className="slider-panel__left-button" />
              <div className="slider-panel__right-button" />
            </div>
            <div className="urgent-meetings__collections collections">
              <div className="collections__futured-card">
                <ProjectCard
                  src=""
                  alt=""
                  title="Ми підтримуємо військових забезпечуючи"
                  text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
                  statsMoney="0 грн"
                  statsPercentage="0%"
                  variant="futured-card"
                />
              </div>
              <div className="collections__futured-right-list">
                <ProjectCard
                  src="https://i.pinimg.com/564x/2f/be/a2/2fbea2e9c1b834f7e7f934ff519ee4db.jpg"
                  alt=""
                  title="Ми підтримуємо військових забезпечуючи можливість"
                  text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
                  statsMoney="0 грн"
                  statsPercentage="0%"
                  variant="futured-right-list"
                />
                <ProjectCard
                  src=""
                  alt=""
                  title="Ми підтримуємо військових забезпечуючи"
                  text="Ми підтримуємо військових, забезпечуючи можливість збору коштів для необхідних засобів."
                  statsMoney="0 грн"
                  statsPercentage="0%"
                  variant="futured-right-list"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
