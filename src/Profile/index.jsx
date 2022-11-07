// import { ReactComponent as ReactLogo } from "../assets/Dating.svg";
import { useParams } from "react-router-dom";
import profilePhoto from "../assets/profilePhoto.png";
import p1 from '../assets/profile/1.png'
import p2 from '../assets/profile/2.png'
import p3 from '../assets/profile/3.png'
import p4 from '../assets/profile/4.png'
import p5 from '../assets/profile/5.png'
import DetailTabs from "./DetailTabs";
import profileBackground from "../assets/profileBackground.png";
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
          className="w-full"
          style={{
            backgroundImage: `url(${profileBackground})`,
            backgroundSize: "cover",
            minHeight: "25vh",
          }}
        >
        </div>
        <div
          className=" w-full flex justify-around py-3"
          style={{
            background: "rgb(240,222,204)",
            position: "relative",
            // top: "200px",
          }}
        >
          <div className=" w-1/4" style={{
              top: '-100px',
              position: 'relative'
            }}>
            <img className="rounded-full w-36 h-36 ml-28" src={p1} alt=""/>
            <p className=" font-bold text-2xl">Chandri Anggara</p>
            <p>Junior UI/UX Design</p>
            <div className="mt-4">
              <p className=" font-bold text-2xl">My Pictures</p>
              <div className="grid grid-cols-2 gap-5 mt-4">
                <img src={p3} alt="" />
                <img src={p2} alt="" />
                <img src={p5} alt="" />
                <img src={p4} alt="" />
              </div>
            </div>
          </div>
          <div className=" w-2/5">
            <p className="text-left font-bold text-2xl pl-1">More Detail</p>
            <DetailTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
