import image1 from "../assets/photos/IMG_2905.JPG";
import image2 from "../assets/photos/IMG_2311.JPG";
import image3 from "../assets/photos/IMG_1334.JPG";
import image4 from "../assets/photos/IMG_2228.JPG";
import image5 from "../assets/photos/IMG_3061.JPG";
import image6 from "../assets/photos/IMG_0804.JPG";
import image7 from "../assets/photos/IMG_3206.JPG";
import image8 from "../assets/photos/IMG_3211.JPG";
import image9 from "../assets/photos/IMG_4723.JPG";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="h-screen pb-[12%] pt-[1.49%] overflow-hidden">
      <div className="overflow-y-scroll overflow-x-hidden h-full w-full">
        <div className="flex-row flex-wrap justify-center flex">
          <div className="flex flex-col  w-[40.5%] h-[32.9%] space-y-[1.49%] pb-[1.49%]">
            <img
              src={image1}
              alt="Portfolio"
              className="px-[2.14%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            />

            <img
              src={image3}
              alt="Portfolio"
              className="px-[2.14%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          </div>
          <div className="flex flex-col w-[53.4%] space-y-[2.35%] border-solid border-purple-400">
            <img
              src={image2}
              alt="Portfolio"
              className="hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() =>
                document.getElementById("my_modal_two").showModal()
              }
            />
            <img
              src={image4}
              alt="Portfolio"
              className="hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            />
          </div>
          <div className="flex flex-row pl-[0.9%] w-[93.49%] pb-[1.49%] space-x-[1.49%]">
            {" "}
            <img
              src={image5}
              alt="Portfolio"
              className="w-[62.87%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            />
            <img
              src={image6}
              alt="Portfolio"
              className=" w-[36.1%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_6").showModal()}
            />
          </div>
          <img
            src={image7}
            alt="Portfolio"
            className=" pl-[0.9%] w-[93.9%] pb-[1.49%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
            onClick={() => document.getElementById("my_modal_7").showModal()}
          />
          <div className="flex-row flex pl-[0.3%] pb-0 w-[92.9%] h-[16%] space-x-[1.49%]">
            <img
              src={image8}
              alt="Portfolio"
              className="w-[58.53%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_8").showModal()}
            />
            <img
              src={image9}
              alt="Portfolio"
              className="w-[40.5%] hover:cursor-pointer hover:grayscale-0 grayscale hover:duration-500 hover:ease-in-out"
              onClick={() => document.getElementById("my_modal_9").showModal()}
            />
          </div>
        </div>
      </div>

      <dialog
        id="my_modal_1"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0 "
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image1} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_two"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0 overflow-x-scroll"
      >
        <p className=" absolute pb-[35%]  text-base-black">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image2} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_3"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0 "
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image3} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_4"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0 "
      >
        <p className=" absolute pb-[35%]  text-base-black">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image4} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_5"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0 "
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image5} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_6"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll "
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image6} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_7"
        class="modal duration-700 bg-none h-[115vh] mt-[-5%] overflow-scroll p-0"
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image7} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_8"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0"
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image8} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_9"
        class="modal duration-700 bg-none w-screen h-[115vh] mt-[-5%] overflow-scroll p-0"
      >
        <p className=" absolute pb-[35%]  text-base-100">
          {" "}
          PRESS ESC TO ESCAPE
        </p>

        <img className="w-full" src={image9} />

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Portfolio;
