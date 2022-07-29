import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useForm } from "react-hook-form";
import { Drawer } from "../../components";
import { InfoSection } from "./components";
import './profile.scss';

export const Profile = () => {
  const { control } = useForm();

  return (
    <>
      <Drawer
        list={[
          {
            icon: <DashboardIcon />,
            link: "/",
          },
          {
            icon: <PermContactCalendarIcon />,
            link: "/profile",
          },
        ]}
      />
      <div className="profile">
        <h1 className="profile-title">My Profile</h1>
        <InfoSection control={control} />
      </div>
    </>
  );
};
