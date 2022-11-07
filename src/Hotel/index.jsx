import hotelBackground from "../assets/hotelBackground.png";
import HotelFilter from "./HotelFilter.jsx";
import HotelItem from "./HotelItem";
import hotel1 from "../assets/hotel/1.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotel = () => {
  const [hotelList, setHotelList] = useState([]);

  const renderHotelItems = () => {
    let content = [];
    for (const hotelItem of hotelList) {
      content.push(
        <HotelItem
          description={hotelItem.email}
          hotelName={hotelItem.title}
          rs={hotelItem.score}
          location={hotelItem.status}
          hotelImage={hotelItem.detail}
          ifVaccination={hotelItem.tele}
        />
      )
    }
    return content
  };

  useEffect(() => {
    axios
      .get(`http://124.221.119.113:8081/hotels/findAll`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0dXNlcjEiLCJleHAiOjE2Njg2NjAxNTB9.y_OXE2mqEY4QiE-8wzohRCfN-xkGDpxYOs9WYJUefGJIUQlqf-5u4sZVd2bSoC0co_MbOv8WQ4LJwWkBlYfSvg`,
        },
      })
      .then((res) => {
        setHotelList(res.data);
      });
  }, []);

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
          backgroundImage: `url(${hotelBackground})`,
          backgroundSize: "cover",
          minHeight: "25vh",
        }}
      ></div>
      <HotelFilter />
      <div className=" grid grid-cols-2 gap-x-10 gap-y-10 px-40 mt-4">
        {renderHotelItems()}
      </div>
    </div>
  );
};

export default Hotel;
