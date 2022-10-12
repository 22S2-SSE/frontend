// import { ReactComponent as ReactLogo } from "../assets/Dating.svg";
import background from '../assets/background.png'
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <>
      <div style={{
        background: `url(${background}) center center no-repeat`,
        minHeight: '100vh'
      }}>
        {/* <ReactLogo style={{
          position: 'absolute',
          left: '25px',
          top: '20px',
          width: '7%',
          height: '7%'
        }}/> */}
        <div className=" text-white font-bold text-3xl pt-40">id: {id}</div>
      </div>
    </>
  );
};

export default Profile;
