import { useState, useEffect } from "react";
import { API } from "../api/api";
import Cameras from "../components/Cameras";
import SelectRover from "../components/SelectRover";
import Sol from "../components/Sol";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance";

const Rover = () => {
  const [curiosityPhotos, setCuriosityPhotos] = useState([]);
  const [rover, setRover] = useState(null);
  const [sol, setSol] = useState(100);
  const [camera, setCamera] = useState("");
  const [userInfo,setUserInfo] = useState(null);
  const navigate = useNavigate();

  const getAllPhotos = async () => {
    if (rover !== null) {
      API.get(
        `/${rover}/photos?sol=${sol}&api_key=aDRsDwiBszAJWlDDu9Z9cpSTyhTAHQC25NGfp55C`
      ).then((res) => {
        setCuriosityPhotos(res.data.photos);
      });
    }
  };

  const filteredPhotos = curiosityPhotos.filter((item) =>
    item.camera.name.toLowerCase().includes(camera.toLowerCase())
  );

  const getUserInfo = async () => {
    try{
      const response = await axiosInstance.get("/get-user");
      if(response.data && response.data.user){
        setUserInfo(response.data.user);
      }
    }catch(error){
        if(error.response.status === 401){
          localStorage.clear();
          navigate("/login");
        }
    }
  };

  useEffect(() => {
    getAllPhotos();
    getUserInfo();
  }, [rover, sol]);

  return (
    <article className="rover">
      <div className="controlPanel">
        <h2>{rover !== null ? rover.toUpperCase() : "Select the rover:"}</h2>
        <SelectRover setRover={setRover} setCamera={setCamera} />
        {rover !== null ? (
          <>
            <Sol sol={sol} setSol={setSol} />
            <Cameras setCamera={setCamera} camera={camera} rover={rover} />
          </>
        ) : null}
      </div>
      {curiosityPhotos.length ? (
        <div className="gallery cf">
          {filteredPhotos.map((item) => (
            <div key={item.id}>
              <img src={item.img_src} alt={item.camera.full_name} />
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery">Select The Rover and The Camera to View the Images...... </div>
      )}
    </article>
  );
};

export default Rover;
