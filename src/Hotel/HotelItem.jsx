import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FormDialog from "./SelectDialog";

const HotelItem = ({ hotelName, rs, description, location, hotelImage, ifVaccination }) => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="flex flex-col flex-nowrap content-end items-center justify-end w-1/3 space-y-2 pt-2">
        <img src={hotelImage} alt="" style={{
          width: '220px',
          height: '220px'
        }}/>
        <div className="flex ">
          <LocationOnOutlinedIcon />
          <p>{location}</p>
        </div>
        <div>
          <FormDialog />
        </div>
      </div>
      <div className=" border rounded-2xl bg-pink-100 px-3 py-1 w-2/3">
        <div className="flex justify-between px-2 mt-1 mb-2 leading-9 font-bold border-b-2 border-black">
          {hotelName}
          <div className=" ">Score: {rs}</div>
        </div>
        <p className="text-left flex flex-col justify-between">
          <p className=" h-56">{description}</p>
          <p className="mt-4 font-bold">Vaccination Free Hotel: {ifVaccination ? "✅" : "❌"}</p>
          
        </p>
      </div>
    </div>
  );
};

export default HotelItem;
