import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const HotelItem = ({ hotelName, rs, description, location, hotelImage }) => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col flex-nowrap content-end items-center justify-end w-1/3 space-y-2 pt-2">
        {hotelImage}
        <div className="flex ">
          <LocationOnOutlinedIcon />
          <p>{location}</p>
        </div>
        <div>
          <Button variant="contained">Select</Button>
        </div>
      </div>
      <div className=" border rounded-2xl bg-pink-100 px-3 py-1 w-2/3">
        <div className="flex justify-between px-2 mt-1 mb-2 leading-9 font-bold border-b-2 border-black">
          {hotelName}
          <div className=" ">Rs. {rs}</div>
        </div>
        <p className="text-left">{description}</p>
      </div>
    </div>
  );
};

export default HotelItem;
