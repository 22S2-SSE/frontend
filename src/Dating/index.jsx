import WaitingListItem from "./WaitingListItem";
import ButtonMenu from "./ButtonMenu";
import a from "../assets/dating/girls/a.jpg";
import b from "../assets/dating/girls/b.jpg";
import d from "../assets/dating/girls/d.jpg";
import c from "../assets/dating/girls/c.jpg";
import e from "../assets/dating/girls/e.jpg";
import g from "../assets/dating/girls/g.png"
import h from "../assets/dating/girls/h.png"

import profiles from "../Profile/profile.json";
import profiles2 from "../Profile/profile2.json";
import profiles3 from "../Profile/profile3.json";

import { useState } from "react";

const Dating = () => {
  const [profileList, setProfileList] = useState(profiles)

  const renderProfileItems = (profiles) => {
    let content = [];
    for (const profile in profiles) {
      content.push(
        <div
      className="flex justify-around items-center font-semibold rounded-lg mt-2 h-10 hover:bg-gray-200 bg-gray-300">
      <div className=" text-left w-36">{profile}</div>
      <div className=" text-left w-36">{profiles[profile]}</div>
    </div>
      )
    }
    return content;
  };

  const [imageSrc, setImageSrc] = useState(a)

  const changeImage = () => {
    setImageSrc(b)
    setProfileList(profiles2)
  }
  const changeImage2 = () => {
    setImageSrc(c)
    setProfileList(profiles3)
  }

  return (
    <div className="">
      {/* Header */}
      <div
        className="w-full h-20 bg-gradient-to-b from-blue-300 "
        style={{
          minHeight: "25vh",
        }}
      ></div>
      {/* Content */}
      <div className="flex px-10">
        {/* Waiting List */}
        <div className=" basis-1/4">
          <WaitingListItem
            image={a}
            name={"Anika"}
            message={"Oh i don't like fish"}
          />
          <WaitingListItem
            image={b}
            name={"Lili"}
            message={"I really miss you."}
          />
          <WaitingListItem
            image={c}
            name={"Lilly"}
            message={"If I were a stop light, I’d turn"}
          />
          <WaitingListItem
            image={g}
            name={"Jhony"}
            message={"May I have your number?"}
          />
          <WaitingListItem image={d} name={"Shreya"} message={"Hello"} />
          <WaitingListItem
            image={h}
            name={"Cirs"}
            message={"Do you have plan this weekend?"}
          />
        </div>

        {/* Images */}
        <div className=" basis-1/2">
          <img
            src={imageSrc}
            alt=""
            className=" mx-auto"
            style={{
              width: "550px",
              height: "550px",
            }}
          />
          <ButtonMenu changeImage={changeImage} changeImage2={changeImage2}/>
        </div>

        {/* Detail Information */}
        <div className=" basis-1/4">
          {renderProfileItems(profileList)}
        </div>
      </div>
    </div>
  );
};

export default Dating;
