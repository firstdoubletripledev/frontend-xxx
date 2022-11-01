import React from "react";
import Layout from "../../components/Layout";

import "./Sign.scss";
import {
  BsArrowUp,
  BsArrowDown,
  BsChevronDown,
  BsChevronCompactUp,
  BsChevronLeft,
  BsChevronRight
} from "react-icons/bs";
import { SiApple } from "react-icons/si";
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";

const Signin = () => {
  return (
    <Layout className="home">
      <section
        className="exchange-section"
        style={{
          background: "url('/assets/images/home/home-first-section.png')",
          backgroundSize: "cover"
        }}
      >
        <div className="container pb2 pt2">
          <div className="row justify">
            <div className="col-sm-12 col-md-12 col-lg-6 mt2">
              <h1 className="">
                Use Flash Transfer service to{" "}
                <span className="primary-color">send</span>,{" "}
                <span className="primary-color">buy</span> or{" "}
                <span className="primary-color" />sell your crypto for{" "}
                <span className="primary-color">cash worldwide</span> in the
                world.
              </h1>
              <p className="gray-color">
                Exchange your cryptocurrency vs cash or buy cryptocurrency with
                cash form our approved partners. You can also send your
                cryptocurrency vs fiat worldwide using a Binance account or
                using your no-custodial wallet ( Flash wallet, Metamask, Binance
                wallet, Trust wallet ...)
              </p>
              <div className="dis-f ai-c gap10 mt1">
                <button className="btn black-bg white-color">
                  Get started
                </button>
                <button className="btn transparent-bg pb0 pt0">
                  <img
                    className=""
                    width="100%"
                    height="40px"
                    src="/assets/images/trustpilot.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mt2">
              <div className="exchange-container w9">
                <div className="exchange-box tc">
                  <p className="black-color bold">Connected Wallet</p>
                  <div className="justify gap10">
                    <img
                      src="/assets/images/tokens/bnb-b.png"
                      width="30px"
                      height="30px"
                      alt=""
                    />
                    <h2 className="">BINANCE</h2>
                  </div>
                </div>

                <div className="exchange-box mt2 justify-s">
                  <div className="">
                    <div className="bold">Amount Send</div>
                    <div>
                      <input
                        className="transprent-bg border-n bold w10"
                        style={{ fontSize: "16px" }}
                        type="input"
                        defaultValue={"100"}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="pink-box">
                      <div className="justify gap10">
                        <img
                          className=""
                          width={"48px"}
                          height={"48px"}
                          src="/assets/images/tokens/busd.png"
                          alt=""
                        />
                        <div>BUSD</div>
                      </div>
                      <div className="justify">
                        <BsChevronDown fontSize={"16px"} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt2 mb2 dis-f ac-c jc-e gap20">
                  <div className="justify po-re">
                    <BsArrowUp
                      className="po-ab"
                      style={{ left: "-7px" }}
                      fontSize={"23px"}
                    />
                    <BsArrowDown
                      className="po-ab"
                      style={{ right: "-6px" }}
                      fontSize={"23px"}
                    />
                  </div>
                  <div className="">
                    1 <span style={{ color: "#F9AA4B" }}>BUSD</span> = 1 EUR
                  </div>
                </div>

                <div className="exchange-box mt2 justify-s">
                  <div className="dis-f fd-c jc-sb h10">
                    <div className="bold">Received Amount</div>
                    <div>
                      <input
                        className="transprent-bg border-n bold w10"
                        style={{ fontSize: "16px" }}
                        type="input"
                        defaultValue={"100"}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="pink-box">
                      <div className="justify gap10">
                        <img
                          className=""
                          width={"48px"}
                          height={"48px"}
                          src="/assets/images/flags/france.png"
                          alt=""
                        />
                        <div>Euro</div>
                      </div>
                      <div className="justify">
                        <BsChevronDown fontSize={"16px"} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt2">
                  <div className="justify-s">
                    <div className="grey-color">Fee</div>
                    <div className="">+2.50 EUR</div>
                  </div>
                </div>
                <div className="mt2">
                  <div className="justify-s">
                    <div className="grey-color">Transfer Time</div>
                    <div className="">1 Min</div>
                  </div>
                </div>
                <div className="mt2" style={{ border: "1px solid #6A6A6A" }} />
                <div className="mt2">
                  <div className="justify-s">
                    <div className="purple-color">Total to pay</div>
                    <div className="">102.50 BUSD</div>
                  </div>
                </div>
                <div className="mt2">
                  <div className="justify-s">
                    <div className="purple-color">Recipient Gets</div>
                    <div className="">100.00 EUR</div>
                  </div>
                </div>
                <div className="mt2 justify">
                  <button className="btn black-bg white-color w10">
                    Continue
                  </button>
                </div>
                <div className="mt2 justify">
                  <button className="btn transparent-bg w10 grey-border">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners res-pt6 res-pb6">
        <div className="container tc">
          <h1 className="white-color bold">Choose from our trusted partners</h1>
          <p className="white-color mt3">
            We make sure your money is delivered quickly and easily. Choose from
            our network of trusted banks, cash pickup locations or mobile money.
          </p>
          <div className="desktop-partners-padding mt3">
            <div className="justify-s gap10">
              <div className="justify-s fd-c gap10 flex4 ">
                <div className="justify-s gap10 w10">
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/binance.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/coinbase.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/orange.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/metamask.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="justify-s gap10 w10">
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/google-wallet.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/apple.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/ramp.png"
                      alt=""
                    />
                  </div>
                  <div className="partners-box">
                    <img
                      className="h10 w10"
                      src="/assets/images/payments/visa.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="dis-f fd-c flex1 gap10">
                <div className="partners-box">
                  <img
                    className="h10 w10"
                    src="/assets/images/payments/trust.png"
                    alt=""
                  />
                </div>
                <div className="partners-box">
                  <img
                    className="h10 w10"
                    src="/assets/images/payments/mastercard.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="counter res-pt7"
        style={{
          background: "url('/assets/images/home/counter.png')",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 tc">
              <h1 className="">+200</h1>
              <div className="mt2">
                <h4 className="purple-color">Fiat Currencies Support</h4>
              </div>
              <div className="mt1 grey-color">
                We support all Fiat currencies in the world!
              </div>
            </div>
            <div className="col-sm-12 col-md-4 tc">
              <h1 className="">6</h1>
              <div className="mt2">
                <h4 className="purple-color">
                  Popular cryptocurrencies available !
                </h4>
              </div>
              <div className="mt1 grey-color">
                You can exchange your cryptocurrencies: BUSD, BNB, BITCOIN,
                MATIC, ETHEREUM and FLASH
              </div>
            </div>
            <div className="col-sm-12 col-md-4 tc">
              <h1 className="">5k</h1>
              <div className="mt2">
                <h4 className="purple-color">Active Users</h4>
              </div>
              <div className="mt1 grey-color">
                Our users are satisfied with the speed, low fees and support !
              </div>
            </div>
          </div>
        </div>
        <div className="normal-bg pt2 pb2" />
      </section>

      <section className="main-futures res-pt6 res-pb6">
        <div className="container">
          <div className="row ai-c">
            <div className="col-sm-12 col-md-6">
              <h1 className="bold">
                Fast, <span className="grey-color">Secure</span>
              </h1>
              <h1 className="">Money Transfers</h1>
              <div className="dis-f gap20 mt1">
                <div className="main-futures-box">
                  <img
                    className=""
                    src="/assets/images/icons/team.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="bold">First Advantage</h4>
                  <p className="grey-color">
                    Ac tincidunt sapien vehicula erat auctor <br />
                    pellentesque rhoncus. Et magna sit morbi <br /> lobortis.
                  </p>
                </div>
              </div>
              <div className="dis-f gap20 mt1">
                <div className="main-futures-box">
                  <img
                    className=""
                    src="/assets/images/icons/clock.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="bold">Second Advantage</h4>
                  <p className="grey-color">
                    Ac tincidunt sapien vehicula erat auctor <br />
                    pellentesque rhoncus. Et magna sit morbi <br /> lobortis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 dis-f jc-e">
              <img
                className=""
                style={{ borderRadius: "15px", width: "85%" }}
                src="/assets/images/home/transfer.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="store res-pt5 res-pb5 overflow-h">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1 className="">
                World First Fast & <span className="purple-color">
                  Secure
                </span>{" "}
                way to send Crepto to Fat anywhere in the world
              </h1>
              <p className="mt3 grey-color">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </p>
              <div className="p2" />
              <div className="mt6 dis-f gap20">
                <button className="btn black-bg justify gap20">
                  <SiApple color="white" fontSize={"18px"} />
                  <div className="white-color">Apple Store</div>
                </button>
                <button className="btn black-bg justify gap20">
                  <RiGooglePlayFill color="white" fontSize={"18px"} />
                  <div className="white-color">Play Store</div>
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="dis-f ai-e">
                <img
                  className="w4"
                  style={{ height: "450px" }}
                  src="/assets/images/home/small-p.png"
                  alt=""
                />
                <img
                  className="w6"
                  src="/assets/images/home/big-p.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signin;
