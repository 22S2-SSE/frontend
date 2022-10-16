import hotelBackground from "../assets/hotelBackground.png";
import HotelFilter from "./HotelFilter.jsx";
import HotelItem from "./HotelItem";
import hotel1 from '../assets/hotel/1.png'

const Hotel = () => {
  const description = `1266/14, W Club Rd, Race Course, Gopalapuram, Coimbatore, Set along a bustling road lined with shops and eateries, this unpretentious budget hotel is 1 km from Coimbatore International Airport and 10 km from the city centre.`
  const rs = 4000
  const hotelName = '1 room | 1 Night'
  const location = 'Adelaide'
  const hotelImage = <img src={hotel1} alt="" style={{
    width: '100%',
    borderRadius: '5%'
    // height: '200px'
  }}/>
  
  return (
    <div
      style={{
        background: `rgb(221,182,145)`,
        minHeight: "100vh",
      }}
      className="pb-20"
    >
      <div
        className="w-full"
        style={{
          background: `url(${hotelBackground})`,
          minHeight: "25vh",
        }}
      ></div>
      <HotelFilter />
      <div className=" grid grid-cols-2 gap-x-10 gap-y-10 px-40 mt-4">
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
        <HotelItem description={description} hotelName={hotelName} rs={rs} location={location} hotelImage={hotelImage} />
      </div>
    </div>
  );
};

export default Hotel;
