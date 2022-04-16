import { useEffect } from "react";
import styles from "./Filters.module.css";
import { useApi } from "../Context/Apihandle";

export const DropDown = ({ setMenu }, { drop_menu, control }) => {
  const { filters, handleFilters } = useApi();

  useEffect(() => {
    function handleClick({ target }) {
      const menu = document.getElementsByClassName(styles.drop_menu)[0];
      if (!menu.contains(target)) {
        setMenu(true);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [styles.drop_menu, setMenu]);

  return (
    <>
      <ul className={styles.drop_menu}>
        <li>Filters</li>

        <li>
          <select
            onChange={({ target }) => {
              handleFilters({ ...filters, state: target.value });
              setMenu(false);
            }}
            value={filters.state}
            className={styles.control}
          >
            <option value="">State</option>
            <option value="Andhra Pradesh">Andhra Pradesh </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh </option>
            <option value="Assam">Assam </option>
            <option value="Chandigarh ">Chandigarh </option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Tamil Nadu"> Tamil Nadu </option>
            <option value="Telangana">Telangana</option>
            <option value="Uttar Pradesh">Uttar Pradesh </option>
          </select>
        </li>

        <li>
          <select
            onChange={({ target }) => {
              handleFilters({ ...filters, city: target.value });
              setMenu(false);
            }}
            value={filters.city}
            className={styles.control}
          >
            <option value="">City</option>
            <option value="Delhi"> Delhi</option>
            <option value="Seohara">Seohara</option>
            <option value="Narsinghgarh">Narsinghgarh</option>
            <option value="Rewari">Rewari</option>
            <option value="Thiruvarur">Thiruvarur</option>
            <option value="Rayadurg">Rayadurg</option>
            <option value="Sundarnagar">Sundarnagar</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Taranagar">Taranagar</option>
            <option value="Talcher">Talcher</option>
            <option value="Surandai">Surandai</option>
          </select>
        </li>
      </ul>
    </>
  );
};
