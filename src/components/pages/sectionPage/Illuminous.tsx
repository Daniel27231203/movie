import React from "react";
import scss from "./Illuminous.module.scss";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiCloudOff } from "react-icons/ci";
import { TbBadgeAdOff } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { BiSolidToggleLeft } from "react-icons/bi";
const Illuminous = () => {
  return (
    <div className={scss.Illuminous}>
      <div className="container">
        <div className={scss.content}>
          <h5>Illuminous+</h5>
          <h1>Фильмы и сериалы по подписке Illuminous+</h1>
          <h2>Бесплатно до конца года</h2>

          <div className={scss.block}>
            <div className={scss.box}>
              <div className={scss.info}>
                <span>
                  <IoPeopleSharp style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Одна подписка для всей семьи или друзей</h4>
              </div>
              <div className={scss.info}>
                <span>
                  <IoIosCheckmarkCircle style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Максимальное качество</h4>
              </div>
              <div className={scss.info}>
                <span>
                  <CiCloudOff style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Просмотр офлайн</h4>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.info}>
                <span>
                  <TbBadgeAdOff style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Никакой рекламы</h4>
              </div>
              <div className={scss.info}>
                <span>
                  <BiMoviePlay style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Каждый день найдётся, что посмотреть</h4>
              </div>
              <div className={scss.info}>
                <span>
                  <BiSolidToggleLeft style={{ color: "red", fontSize: "45px" }} />
                </span>
                <h4>Можно отключить в любой момент</h4>
              </div>
            </div>
          </div>
          <button>Попробовать бесплатно</button>
        </div>
      </div>
    </div>
  );
};

export default Illuminous;
