import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profile from './profile.json'
import preference from './preference.json'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DetailTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Detail" {...a11yProps(0)} />
          <Tab label="Preference" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} />
            <Tab label="Item Four" {...a11yProps(3)} />
            <Tab label="Item Five" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {(() => {
          let td = [];
          for (const i in profile) {
            td.push(
              <div
              className="flex justify-around font-semibold rounded-lg mt-2"
              style={{
                background: "rgb(202,182,166)",
              }}
            >
              <div className=" text-left w-36">{i}</div>
              <div className=" text-left w-36">{profile[i]}</div>
            </div>
            ) 
          }
          return td;
        })()}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {(() => {
          let td = [];
          for (const i in preference) {
            td.push(
              <div
              className="flex justify-around font-semibold rounded-lg mt-2"
              style={{
                background: "rgb(202,182,166)",
              }}
            >
              <div className=" text-left w-36">{i}</div>
              <div className=" text-left w-36">{profile[i]}</div>
            </div>
            ) 
          }
          return td;
        })()}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default DetailTabs;
