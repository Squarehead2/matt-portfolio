import PortfolioImage from "./components/PortfolioImage.js";
import { ReactComponent as Instagram } from "./assets/icons/instagram.svg";
import { ReactComponent as Tiktok } from "./assets/icons/tiktok.svg";
import { ReactComponent as Email } from "./assets/icons/email.svg";
import Portfolio from "./pages/Portfolio.js";
import Portfolio2 from "./pages/Portfolio2.js";
import StringToPTags from "./components/StringToPTags.js";

import avatar from "./assets/images/avatar.jpg";

import "./App.css"; // Make sure to import your CSS file

function App() {
  return (
    <div className="w-full h-screen overflow-y-hidden m-0 p-0 bg-secondary">
      <div className="navbar h-1/6vh bg-neutral text-neutral-content p-0 m-0">
        <div className="flex flex-row items-center justify-center w-1/3 relative">
          <p
            className="text-2xl text-center hover:cursor-pointer hover:shadow-lg rise-on-hover"
            onClick={() => {
              window.location.href = "/"; // Redirect to home page);
            }}
          >
            MATTHEW <br></br>
            LISK
          </p>
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          <div className="w-[40%]">
            <div
              class="tooltip tooltip-bottom tooltip-secondary"
              data-tip="portfolio"
            >
              <div
                className="w-full hover:cursor-pointer "
                onClick={() =>
                  document.getElementById("my_modal_portfolio").showModal()
                }
              >
                <PortfolioImage />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*    */}
      <div className="flex flex-row flex-grow">
        <div className="w-1/4 bg-base-100">
          <div className="flex relative border-solid border-2 h-screen box-border py-4 align-top justify-end pr-4 overflow-hidden">
            <div className="flex flex-row justify-evenly w-full">
              <div className="flex flex-col w-4 items-center text-xxxs space-y-0">
                <Instagram className="w-full" />

                <StringToPTags inputString="https://www.instagram.com/samedoi?igsh=MTBqd2lzNWFsYm1haQ%3D%3D&utmsource=qr" />
              </div>
              <div className="flex flex-col items-center text-xxxs w-4">
                <Tiktok className="w-full" />
                <StringToPTags inputString="https://www.tiktok.com/@doiheci?t=8nLSW52mZEL&r=1" />
              </div>

              <div className="flex flex-col items-center text-xxxs w-4">
                <Email
                  onClick={() => {
                    window.open("https://www.google.ca");
                  }}
                  className="w-4 h-4"
                />

                <StringToPTags inputString="mattlis110@gmail.com" />
              </div>
            </div>
            <div
              class="avatar absolute bottom-[-5%] right-0 left-[65%] w-full grayscale overflow-hidden hover:bottom-[20%] hover:left-[35%] transition-all duration-700 hover:cursor-pointer"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <div class="mask mask-hexagon w-48">
                <img src={avatar} />
              </div>
              <dialog id="my_modal_2" class="modal bg-none">
                <p className=" text-base-100"> PRESS ESC TO ESCAPE</p>
                <div class="w-96">
                  <img className="w-full" src={avatar} />
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
            <div>
              <dialog
                id="my_modal_portfolio"
                class="modal duration-700 h-screen"
              >
                <p className="absolute text-base-100 pb-[35%]">
                  {" "}
                  PRESS ESC TO ESCAPE
                </p>
                <div class="w-full">
                  <Portfolio2 />
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-secondary">
          <div className="flex">
            <Portfolio className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
