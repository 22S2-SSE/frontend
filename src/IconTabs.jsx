import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { useNavigate } from "react-router-dom";
export default function IconTabs() {
  const naviagte = useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue, '123')
    setValue(newValue);
    naviagte(tabItems[newValue].route)
  };

  const tabItems = [
    {
      icon: <BedOutlinedIcon />,
      label: "Hotel reservation",
      route: '/hotel'
    },
    {
      icon: <SearchOutlinedIcon />,
      label: "Search",
    },
    {
      icon: <TravelExploreOutlinedIcon />,
      label: "Explore",
    },
    {
      icon: <ForumOutlinedIcon />,
      label: "Message",
    },
    {
      icon: <GroupAddOutlinedIcon />,
      label: "Match records",
      route: '/dating/aaabbbccc'
    },
    {
      icon: <PersonPinIcon />,
      label: "",
      route: '/profile/aaabbbccc'
    },
  ];

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className=" absolute left-1/4"
    >
      {
        tabItems.map(tabItem => <Tab icon={tabItem.icon} label={tabItem.label} iconPosition="start"/>)
      }
    </Tabs>
  );
}
