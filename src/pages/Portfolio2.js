import image1 from "../assets/photos/IMG_2905.JPG";
import image2 from "../assets/photos/IMG_2311.JPG";
import image3 from "../assets/photos/IMG_1334.JPG";
import image4 from "../assets/photos/IMG_2228.JPG";
import image5 from "../assets/photos/IMG_3061.JPG";
import image6 from "../assets/photos/IMG_0804.JPG";
import image7 from "../assets/photos/IMG_3206.JPG";
import image8 from "../assets/photos/IMG_3211.JPG";
import image9 from "../assets/photos/IMG_4723.JPG";

function Portfolio2() {
  return (
    <div className="flex flex-col h-[160vh] mt-[-10%] overflow-scroll">
      <div className="w-full">
        <img src={image1} className="w-full" />
      </div>
      <div className="w-full">
        {" "}
        <img src={image2} className="w-full" />
      </div>
      <div className="w-full">
        <img src={image3} className="w-full" />
      </div>

      <div className="w-full">
        <img src={image4} className="w-full" />
      </div>
      <div className="w-full">
        <img src={image5} className="w-full" />
      </div>
      <div className="w-full">
        <img src={image6} className="w-full" />
      </div>
      <div className="w-full">
        <img src={image7} className="w-full" />
      </div>

      <div className="w-full">
        <img src={image8} className="w-full" />
      </div>
      <div className="w-full">
        <img src={image9} className="w-full" />
      </div>
    </div>
  );
}

export default Portfolio2;
