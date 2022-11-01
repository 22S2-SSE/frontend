import { useState } from "react";
import IconSelect from "./IconSelect";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
const HotelFilter = () => {
  const [age, setAge] = useState("Adelaide");
  const [cost, setCost] = useState("200-499");
  const [bookDate, setBookDate] = useState("10,Nov,2022");

  const handleChange = (event, filterItem) => {
    switch (filterItem) {
      case 'age':
        setAge(event.target.value);
        break;
      case 'cost':
        setCost(event.target.value);
        break;
      case 'bookDate':
        setBookDate(event.target.value);
        break;
    
      default:
        break;
    }
  };

  return (
    <div className=" rounded-3xl bg-blue-100 h-32 w-1/2 mx-auto -mt-7 px-8 py-2">
      <p className=" text-purple-700 font-extrabold text-xl mb-2 text-left">
        Filter
      </p>

      <div className="flex justify-between ">
        <div className="flex space-x-5">
          <div>
            <IconSelect
              age={age}
              handleChange={e => handleChange(e, "age")}
              iconComponent={<LocationOnOutlinedIcon />}
              menuItems={["Adelaide", "Melbourne", "Sedny"]}
            />
          </div>
          <div className="ml-1">
            <IconSelect
              age={cost}
              handleChange={e => handleChange(e, "cost")}
              iconComponent={<AttachMoneyOutlinedIcon />}
              menuItems={["0-199", "200-499", "500-2000"]}
            />
          </div>
          <div className="ml-1">
            <IconSelect
              age={bookDate}
              handleChange={e => handleChange(e, "bookDate")}
              iconComponent={<CalendarMonthOutlinedIcon />}
              menuItems={["9,Nov,2022", "10,Nov,2022", "11,Nov,2022"]}
            />
          </div>
          {/* <div className="ml-1">
            <IconSelect age={age} handleChange={handleChange} />
          </div> */}
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
