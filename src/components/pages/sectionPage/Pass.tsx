import { FC } from "react";
import scss from "./Pass.module.scss";

const Pass: FC = () => {
  return (
    <section className={scss.Pass}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.item}>
            <h1>Выберите подписку которая подходит Вам</h1>
            <p>
              Мы представляем три варианта подписки, которые подойдут вам по
              ценеи потребностям
            </p>
          </div>
          <div className={scss.blockPass}>
            <div className={scss.boxPass}>
              <h3>Easy Illuminous</h3>
              <p>Для мобильного приложения. Может смотреть 1 человек</p>
              <h1> 99 ₽/мес</h1>
              <ul>
                <li>Нет ограничений</li>
                <li>Никакой рекламы</li>
                <li>10 ТВ каналов</li>
              </ul>
              <button className={scss.btnTry}>Попробовать</button>
            </div>
            <div className={scss.boxPass}>
              <h3>Illuminous+</h3>
              <p>Для всех устройств. Может смотреть 5 человек</p>
              <h1> 199 ₽/мес</h1>
              <ul>
                <li>Нет ограничений</li>
                <li>Никакой рекламы</li>
                <li>25 ТВ каналов</li>
              </ul>
              <button className={scss.btnTry}>Попробовать</button>
            </div>
            <div className={scss.boxPass}>
              <h3>Illuminous Gold</h3>
              <p>Полный каталог Illuminous без ограничений</p>
              <h1> 299 ₽/мес</h1>
              <ul>
                <li>Нет ограничений</li>
                <li>Никакой рекламы</li>
                <li>50 ТВ каналов</li>
              </ul>
              <button className={scss.btnTry}>Попробовать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pass;
