import DashHeader from "../../../../components/DashHeader/DashHeader";
import Sidebar from "../../../../layout/Sidebar/Sidebar";
import styles from "./dashboardLayout.module.css";
import TEST from "../../../../assets/Tappi.png";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles["dashboard-layout"]}>
      <Sidebar />

      <main>
        <header className={styles["header"]}>
          <DashHeader name="Tappi" position="Program Co-ordinator" img={TEST} />
        </header>

        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
