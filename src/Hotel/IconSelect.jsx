import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuItem from "@mui/material/MenuItem";

const IconSelect = ({ iconComponent, age, handleChange, menuItems }) => {
  const renderMenuItems = () => {
    let content = [];
    for (const menuItem in menuItems) {
      content.push(
        <MenuItem value={menuItems[menuItem]}>{menuItems[menuItem]}</MenuItem>
      )
    }
    return content;
  };
  return (
    <FormControl fullWidth>
      <Select
        displayEmpty
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              {iconComponent ? <SvgIcon>{iconComponent}</SvgIcon> : <></>}

              {value}
            </Box>
          );
        }}
      >
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
        {renderMenuItems()}
      </Select>
    </FormControl>
  );
};

export default IconSelect;
