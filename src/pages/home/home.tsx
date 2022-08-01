import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Drawer } from "../../components";
import homeImage from "../../assets/home-image.png";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        list={[
          {
            icon: <DashboardIcon />,
            link: "/dashboard",
          },
          {
            icon: <PermContactCalendarIcon />,
            link: "/profile",
          },
        ]}
      />
      <div className="home">
        <img src={homeImage} className="home-image" />
        <h1 className="home-title">Coming soon</h1>
        <button
          className="profile-btn"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Edit my profile and my worklog
        </button>
        <button className="logout-btn">Logout</button>
      </div>
    </>
  );
};
