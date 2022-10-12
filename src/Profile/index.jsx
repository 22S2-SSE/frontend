// import { ReactComponent as ReactLogo } from "../assets/Dating.svg";
import background from "../assets/background.png";
import { useParams } from "react-router-dom";
import profilePhoto from "../assets/profilePhoto.png";
import DetailTabs from "./DetailTabs";
const Profile = () => {
  const { id } = useParams();

  return (
    <>
      <div
        style={{
          background: `rgb(221,182,145)`,
          minHeight: "100vh",
        }}
      >
        <div
          className=" w-full flex justify-around py-5"
          style={{
            background: "rgb(240,222,204)",
            position: "relative",
            top: "200px",
          }}
        >
          <div className=" w-1/4">
            <p className=" font-bold text-2xl">Chandri Anggara</p>
            <p>Junior UI/UX Design - {id}</p>
            <div className="mt-4">
              <p className=" font-bold text-2xl">My Pictures</p>
              <div className="grid grid-cols-2 gap-4">
                <img src={profilePhoto} alt="" />
                <img src={profilePhoto} alt="" />
                <img src={profilePhoto} alt="" />
                <img src={profilePhoto} alt="" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-left font-bold text-2xl pl-1">More Detail</p>
            <DetailTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
