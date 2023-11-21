import Sidebar from "./../componants/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "./../componants/Map";
import User from "../componants/User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
