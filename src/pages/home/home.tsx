import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Drawer } from "../../components";
import homeImage from "../../assets/home-image.png";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { getLabelTitle } from "../../helpers";
import { useSelector } from "react-redux";
import { selectLabels } from "../../store/selectors";

export const Home = () => {
  const navigate = useNavigate();

  const labels = useSelector(selectLabels);

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
        <h1 className="home-title">{getLabelTitle(labels, "coming-soon")}</h1>
        <button
          className="profile-btn"
          onClick={() => {
            navigate("/profile");
          }}
        >
          {getLabelTitle(labels, "edit-profile-and-worklog")}
        </button>
        <button className="logout-btn">{getLabelTitle(labels, "logout")}</button>
      </div>
    </>
  );
};
