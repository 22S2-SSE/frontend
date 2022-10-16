import { useState } from "react";
import IconSelect from "./IconSelect";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
const HotelFilter = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className=" rounded-3xl bg-blue-100 h-32 w-1/2 mx-auto -mt-7 px-8 py-2">
      <p className=" text-purple-700 font-extrabold text-xl mb-2 text-left">
        Filter
      </p>

      <div className="flex justify-between ">
        <div className="flex">
          <div>
            <IconSelect
              age={age}
              handleChange={handleChange}
              iconComponent={<LocationOnOutlinedIcon />}
            />
          </div>
          <div className="ml-1">
            <IconSelect
              age={age}
              handleChange={handleChange}
              iconComponent={<AttachMoneyOutlinedIcon />}
            />
          </div>
          <div className="ml-1">
            <IconSelect
              age={age}
              handleChange={handleChange}
              iconComponent={<CalendarMonthOutlinedIcon />}
            />
          </div>
          <div className="ml-1">
            <IconSelect age={age} handleChange={handleChange} />
          </div>
        </div>
        <Button variant="contained" endIcon={<SearchIcon />}>
          Send
        </Button>
        {/* <div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div> */}
      </div>
    </div>
  );
};

export default HotelFilter;
