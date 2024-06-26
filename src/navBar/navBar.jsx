import s from "./navBar.module.css";
import CurrentDate from "../currentDate";

function NavBar() {
  return (
    <nav className={s.mainCont}>
      <div className={s.navButton}>
        {/* invisible div to center current time countdown */}
        <div style={{ width: "60px" }}></div>
        <div className={s.time}>
          <CurrentDate />
        </div>
        <button></button>
      </div>
    </nav>
  );
}

export default NavBar;
