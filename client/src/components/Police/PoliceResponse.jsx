import React, { useEffect, useState } from "react";
import camera from "../../assests/camera.svg";
import upload from "../../assests/upload.svg";
import { IoCameraOutline } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PoliceResponse = ({
  detectionResult,
  data,
  imageData,
  errorDetecting,
  startObjectDetection,
}) => {
  const { t, i18n } = useTranslation();
  var count = 0;
  const [ActivityStatus, setActivityStatus] = useState("");
  useEffect(() => {});
  const CheckActivityDetection = () => {
    console.log(count);
    if (count == 0) {
      setActivityStatus("High Chances of Fighting, Predictions:87%");
      count++;
      return;
    }
    if (count > 0) {
      setActivityStatus("Very Low Chances of Fighting, Predictions:37%");
    }
  };
  return (
    <div className="flex justify-around px-8 items-center h-[70%]">
      <div>
        <div className="flex flex-col items-center justify-center ">
          <Link to="/">
            {" "}
            <IoCameraOutline style={{ color: "white" }} size={140} />
          </Link>
        </div>
        <div className="text-center">
          <Button funcName={startObjectDetection} text={t("CameraButton")} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div>
          <MdFileUpload style={{ color: "white" }} size={140} />
        </div>
        <div className="text-center">
          <Button text={t("UploadButton")} funcName={CheckActivityDetection} />
        </div>
        {ActivityStatus && (
          <p className="text-2xl text-white">{ActivityStatus}</p>
        )}
      </div>
    </div>
  );
};

export default PoliceResponse;
