import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Drawer } from "../../components";
import { getLabelTitle } from "../../helpers";
import { selectLabels } from "../../store/selectors";
import { InfoSection, WorkLogsSection } from "./components";
import './profile.scss';

export const Profile = () => {
  const { control } = useForm();

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
      <div className="profile">
        <h1 className="profile-title">{getLabelTitle(labels, "my-profile")}</h1>
        <InfoSection control={control} />
        <WorkLogsSection control={control} />
      </div>
    </>
  );
};
