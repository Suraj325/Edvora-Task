import { calcDistance } from "./CalcDistance";
import styles from "./Cards.module.css";

export const CardItem = (
  props,
  { map, map_img, ride, ride_d, val, badges, badge }
) => {
  const {
    id,
    origin_station_code,
    station_path,
    date,
    state,
    city,
    station_code,
  } = props;

  const dt = new Date(date);
  var d = new Date(
    Date.UTC(
      dt.getFullYear(),
      dt.getMonth(),
      dt.getDate(),
      dt.getHours(),
      dt.getMinutes(),
      dt.getSeconds(),
      dt.getMilliseconds()
    )
  );

  const _date = d.toDateString().split(" ");
  const _time = d.toTimeString().substring(0, 5);
  const txtDate = `${_date[2]}th ${_date[1]} ${_date[3]} ${_time}`;
  const distance = calcDistance(station_path, station_code);

  return (
    <div className="container">
      <div className={styles.ride}>
        <div className={styles.map}>
          <img src="../../assets/map.png" alt="map" />
        </div>

        <div className={styles.ride_d}>
          <p>
            Ride Id : <span className={styles.val}>{id}</span>
          </p>

          <p>
            Origin Station :{" "}
            <span className={styles.val}>{origin_station_code}</span>
          </p>

          <p>
            station_path :{" "}
            <span className={styles.val}>{`[${station_path.join(", ")}]`}</span>
          </p>

          <p>
            Date: <span className={styles.val}>{txtDate}</span>
          </p>

          <p>
            Distance: <span className={styles.val}>{distance}</span>
          </p>
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}>{city}</span>
          <span className={styles.badge}>{state}</span>
        </div>
      </div>
    </div>
  );
};
