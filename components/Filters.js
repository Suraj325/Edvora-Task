import { useState } from "react";
import Image from "next/image";
import filter from "../public/assets/filter.png";
import styles from "./Filters.module.css";
import { DropDown } from "./DropDown";
import { useApi } from "../Context/Apihandle";

export const Filters = ({
  btn_filter,
  fltr_cm,
  filter_relative,
  links,
  active,
  icon,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { status, handleStatus, upcomingRides, pastRides } = useApi();

  const nearestRide = status === "" ? styles.active : null;
  const upcoming = status === "upcoming" ? styles.active : null;
  const past = status === "past" ? styles.active : null;

  const upcomingCount = upcomingRides().length;
  const pastCount = pastRides().length;

  return (
    <div>
      <div className={styles.fltr_cm}>
        <ul className={styles.links}>
          <li onClick={() => handleStatus("")} className={nearestRide}>
            Nearest rides
          </li>

          <li onClick={() => handleStatus("upcoming")} className={upcoming}>
            <span>Upcoming rides {`(${upcomingCount})`}</span>
          </li>

          <li onClick={() => handleStatus("past")} className={past}>
            <span>Past rides {`(${pastCount})`}</span>
          </li>
        </ul>

        <div className={styles.filter_relative}>
          <div
            onClick={() => {
              setShowMenu((stat) => !stat);
            }}
            className={styles.btn_filter}
            role="button"
          >
            <span className={styles.icon}>
              <Image src={filter} />
            </span>
            Filters
          </div>
          {showMenu ? <DropDown setMenu={setShowMenu} /> : <></>}
        </div>
      </div>
    </div>
  );
};
