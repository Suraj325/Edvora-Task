import Image from "next/image";
import styles from "./Navbar.module.css";
import logoImg from "../public/assets/logo.svg";
import { useApi } from "../Context/Apihandle";

export const NavBar = ({ logo, username, avatar, row, navbar }) => {
  const { user } = useApi();
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.logo}>
            <Image src={logoImg} alt="logo" />
          </div>
          {
            <div className={styles.row}>
              <p className={styles.username}>{user.name}</p>
              <div className={styles.avatar}>
                <img src={user.url} alt="avatar" />
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};
