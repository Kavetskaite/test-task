import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./drawer.scss";

interface DrawerProps {
  list: ListData[];
  shouldExtendDrawer?: boolean;
}

export enum LinkType {
  internal,
  external,
}

export interface ListData {
  icon: ReactNode;
  link: string;
  linkType?: LinkType;
}

export const Drawer: FC<DrawerProps> = ({ list }) => {
  const navigate = useNavigate();

  const handleItemClick = (item: ListData) => {
    navigate(`${item.link}`);
  };

  return (
    <div className="drawer-wrapper">
      <MenuIcon className="menu-icon" />
      {list.map((item, index) => {
        const isSelected = window.location.pathname === item.link;

        return (
          <div
            key={index}
            className={isSelected ? "list-icon-selected" : "list-icon"}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};
