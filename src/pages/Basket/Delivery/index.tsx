import classes from "./styles.module.scss";
export const Delivery = () => {
  return (
    <div>
      <div className={classes.time}>Время доставки</div>

      <div className={classes.timeDelivery}>
        <p>
          <input type="radio" className={classes.delivery} />В ближайшее время
        </p>
        <p>
          <input type="radio" className={classes.deliveryTime} />
          Доставить
        </p>
      </div>
      <div>
        <div className={classes.DayBlock}>
          <select name="delivery" className={classes.day}>
            <option>Сегодня</option>
            <option>Завтра</option>
          </select>
        </div>

        <div>
          <div className={classes.timeDayBlock}>
            <select name="delivery" className={classes.timeDay}>
              <option>19:45</option>
              <option>20:00</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
