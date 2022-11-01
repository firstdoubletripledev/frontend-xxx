import { connected } from "process";
import React, { useState } from "react";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";

import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="white">
      <div className="container dis-f">
        <div className="dis-f ai-c jc-s flex1 row-reverse-991">
          <div className="dis-f ai-c">
            <div
              onClick={() => setIsMobile(true)}
              className="hamburger-icon-container"
            >
              <AiOutlineMinus
                className=""
                style={{ position: "absolute", top: "0%" }}
                fontSize={"25px"}
              />
              <AiOutlineMinus
                className=""
                style={{ position: "absolute", top: "20%" }}
                fontSize={"25px"}
              />
              <AiOutlineMinus
                className=""
                style={{ position: "absolute", top: "40%" }}
                fontSize={"25px"}
              />
              <AiOutlineMinus
                className=""
                style={{ position: "absolute", top: "60%" }}
                fontSize={"25px"}
              />
            </div>
            <img
              className=""
              style={{ width: "48px", height: "48px" }}
              src="/logo.png"
              alt=""
            />
          </div>
          <div className={`${isMobile ? "hamburger-box" : ""} justify`}>
            <div
              className={`${isMobile
                ? "hamburger-cancel-container"
                : ""} dis-n`}
            >
              <AiOutlineClose
                onClick={() => setIsMobile(false)}
                className="cu-po hamburger-cancel-btn"
                fontSize={"35px"}
                color="white-color"
              />
            </div>
            <ul className="hamburger justify li-none-style">
              <li className="hamburger-list">Send</li>
              <li className="hamburger-list">Receive</li>
              <li className="hamburger-list">Find locations</li>
              <li className="hamburger-list">Track a transfer</li>
              <li className="hamburger-list">Help</li>
            </ul>
          </div>
          <div
            onClick={() => setIsMobile(false)}
            className={`${isMobile ? "hamburger-bg" : ""} dis-n`}
          />
        </div>
        <div className="dis-f ai-c flex1">
          <div className="justify flex1">
            <button className="gap5 btn-small purple-bg w10">
              <div className="justify gap5">
                <img
                  className=""
                  width="30px"
                  height="30px"
                  src="/assets/images/tokens/bnb.png"
                  alt=""
                />
                <BsChevronDown color="white" fontSize="18px" />
              </div>
              <div className="white-color">100$</div>
            </button>
          </div>
          <div className="justify flex2">
            <div
              className="ml1 br-50 white-bg justify"
              style={{ padding: "7px", width: "40px", height: "40px" }}
            >
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/icons/wallet.png"
                alt=""
              />
            </div>
            <div
              className="ml1 br-50 white-bg justify"
              style={{ padding: "7px", width: "40px", height: "40px" }}
            >
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/icons/bell.png"
                alt=""
              />
            </div>
            <div
              className="ml1 br-50 white-bg justify"
              style={{ padding: "7px", width: "40px", height: "40px" }}
            >
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/icons/bear.png"
                alt=""
              />
            </div>
            <div
              className="ml1 br-50"
              style={{ width: "40px", height: "40px" }}
            >
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/avatar/Avatar1.png"
                alt=""
              />
            </div>
            <div
              className="ml1 br-50"
              style={{ width: "40px", height: "40px" }}
            >
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/flags/united-states.png"
                alt=""
              />
            </div>
          </div>
          <div className="dis-f ai-c jc-fe flex1">
            <div className="br-50" style={{ width: "40px", height: "40px" }}>
              <img
                className="mauto"
                width="100%"
                height="100%"
                src="/assets/images/moon.png"
                alt="switch"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
