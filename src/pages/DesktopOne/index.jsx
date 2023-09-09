import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto overflow-auto w-full">
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="bg-black-900 flex flex-col items-center justify-start pt-12 w-full h-full">
            <div className="flex flex-col items-center justify-start w-full">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 sm:-mt-400 w-full">
                <div className="h-[59px] relative w-[13%] md:w-full">
                  <div className="h-[59px] m-auto w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700 top-[3%] w-max"
                      size="txtInterSemiBold3926"
                    >
                      <span className="text-white-A700 font-inter text-left font-semibold">
                        Sc
                      </span>
                      <span className="text-red-A400 font-inter text-left font-semibold">
                        a
                      </span>
                      <span className="text-white-A700 font-inter text-left font-semibold">
                        nkart
                      </span>
                    </Text>
                    <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-end justify-between left-[17%] md:left-[44%] sm:left-[38%] my-auto w-[59px]">
                      <Img
                        className="h-[13px] mt-[46px] w-3"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <div className="flex flex-col gap-[33px] items-center justify-start">
                        <Img
                          className="img-invert h-[13px] w-3"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-[13px] w-3"
                          src="images/img_signal.svg"
                          alt="signal_One"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="img-invert absolute h-[13px] left-[17%] md:left-[44%] sm:left-[38%] top-[0] w-3"
                    src="images/img_computer.svg"
                    alt="computer_One"
                  />
                  <Img
                    className="absolute bottom-[14%] h-px left-[23%] md:left-[46%] sm:left-[41%]"
                    src="images/img_vector86.svg"
                    alt="vectorEightySix"
                  />
                </div>
                <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[42px] sm:hidden items-center justify-end md:ml-[0] ml-[596px] pl-2.5 w-[561px] sm:w-full common-row-list">
                  <li>
                    <a
                      href="#store"
                      className="text-center text-gray-400 text-lg"
                    >
                      <Text size="txtInterMedium18">Store App</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#consumer"
                      className="text-center text-gray-400 text-lg"
                    >
                      <Text size="txtInterMedium18">Consumer App</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-center text-gray-400 text-lg"
                    >
                      <Text size="txtInterMedium18">Pricing</Text>
                    </a>
                  </li>
                  <li>
                    -py-[5px] px-[23px] rounded-[36px]
                    <a href="#contact">
                      <Button className="bg-red-800 cursor-pointer font-medium px-[13px] py-[13px] rounded-[36px] text-center text-gray-100 text-xl">
                        Contact Us
                      </Button>
                    </a>
                  </li>
                </ul>
              </header>
              <Text
                className="mt-[74px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-100 text-center"
                size="txtInterMedium30"
              >
                Welcome to Scankart
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[15px] w-full">
                <Img
                  className="h-[261px] md:h-auto md:mt-0 mt-[247px] object-cover"
                  src="images/img_ellipse61.png"
                  alt="ellipseSixtyOne"
                />
                <div className="flex flex-col items-center justify-start sm:-mt-[600px] mb-[102px] md:px-5 sm:-mt-100">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="md:text-5xl text-[64px] text-center text-white-A700"
                      size="txtInterBold64"
                    >
                      AI Powered Retail
                    </Text>
                    <Text
                      className="mt-0.5 md:text-5xl text-[64px] text-center text-white-A700"
                      size="txtInterBold64"
                    >
                      <span className="text-white-A700 font-inter font-bold">
                        One{" "}
                      </span>
                      <span className="text-red-800 font-inter font-bold">
                        Unified POS
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[36.00px] mt-[18px] text-2xl md:text-[22px] text-blue_gray-100_a5 text-center sm:text-xl w-full"
                    size="txtInterMedium24"
                  >
                    Streamline your business with ease. Scan, track, and manage
                    inventory, sales, and customer interactions effortlessly
                    through a simple and intuitive app interface.
                  </Text>
                  <Button className="bg-gradient  cursor-pointer font-semibold mt-[42px] py-[25px] rounded-[40px] text-2xl md:text-[22px] text-center text-gray-100 sm:text-xl w-[400px]">
                    Join the Retail Revolution
                  </Button>
                </div>
                <Img
                  className="h-[261px] md:h-auto md:mt-0 mt-[247px] object-cover"
                  src="images/img_ellipse62.png"
                  alt="ellipseSixtyTwo"
                />
              </div>
            </div>
          </div>
          {/* Inventory Management */}
          <div id="store" className="container-snap flex flex-col items-center justify-start overflow-y-scroll transform -rotate-90 h-[1250px] w-full">
            <div className="flex-none w-[1270px] h-[1270px] md:w-full md:h-full transform rotate-90">
              <div className="w-full h-full p-5 relative">
                <div className="h-[1170px] m-auto w-full">
                  <div className="absolute bg-red-800 h-[1170px] inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-[1170px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-[1170px] m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[119px] h-max inset-y-[0] justify-start left-[5%] my-auto w-3/4">
                      <div className="flex sm:flex-col flex-row gap-[25px] items-end justify-start w-[46%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                          <div className="h-[59px] relative w-full">
                            <div className="h-[59px] m-auto w-full">
                              <Text
                                className="absolute inset-x-[0] mx-auto sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700 top-[3%] w-max"
                                size="txtInterSemiBold3926"
                              >
                                <span className="text-white-A700 font-inter text-left font-semibold">
                                  Sc
                                </span>
                                <span className="text-red-A400 font-inter text-left font-semibold">
                                  a
                                </span>
                                <span className="text-white-A700 font-inter text-left font-semibold">
                                  nkart
                                </span>
                              </Text>
                              <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-end justify-between left-[17%] md:left-[44%] sm:left-[38%] my-auto w-[59px]">
                                <Img
                                  className="h-[13px] mt-[46px] w-3"
                                  src="images/img_computer.svg"
                                  alt="computer_Two"
                                />
                                <div className="flex flex-col gap-[33px] items-center justify-start">
                                  <Img
                                    className="img-invert h-[13px] w-3"
                                    src="images/img_signal.svg"
                                    alt="signal_Two"
                                  />
                                  <Img
                                    className="h-[13px] w-3"
                                    src="images/img_signal.svg"
                                    alt="signal_Three"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="img-invert absolute h-[13px] left-[17%] md:left-[44%] sm:left-[38%] top-[0] w-3"
                              src="images/img_computer.svg"
                              alt="computer_Three"
                            />
                            <Img
                              className="absolute bottom-[14%] h-px left-[23%]"
                              src="images/img_vector86.svg"
                              alt="vectorEightySix_One"
                            />
                          </div>
                        </div>
                        <Text
                          className="sm:mt-0 mt-[9px] sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700"
                          size="txtInterSemiBold3926"
                        >
                          Store App
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[65px] w-[93%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="leading-[76.00px] md:text-5xl text-6xl text-white-A700"
                            size="txtInterBold60"
                          >
                            <span className="text-red-A400 font-inter text-left font-bold">
                              Transform
                            </span>
                            <span className="text-white-A700 font-inter text-left font-bold">
                              <>
                                {" "}
                                your Business
                                <br />
                                with{" "}
                              </>
                            </span>
                            <span className="text-red-A400 font-inter text-left font-bold">
                              Scankart™
                            </span>
                          </Text>
                          <div className="flex flex-col gap-[25px] items-start justify-start mt-[68px]">
                            <Text
                              className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                              size="txtInterSemiBold36"
                            >
                              INVENTORY MANAGEMENT
                            </Text>
                            <Text
                              className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-full"
                              size="txtInterBold56"
                            >
                              Just Automate Your Stock Control
                            </Text>
                            <Text
                              className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                              size="txtInterMedium32"
                            >
                              <>
                                AI Powered Stock-In
                                <br />
                                Expiry & Stock Alerts
                                <br />
                                Scan based Auditing
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-9 items-center justify-start mt-[60px] w-[78%] md:w-full">
                            <Img
                              className="h-[84px]"
                              src="images/img_group22225.svg"
                              alt="group22225"
                            />
                            <Img
                              className="h-[84px] md:h-auto object-cover"
                              src="images/img_group.png"
                              alt="group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[10%] flex flex-col items-center justify-start outline outline-[6px] outline-black-900_01 p-6 sm:px-5 right-[9%] rounded-[24px] w-1/4">
                  <div className="flex flex-col gap-3 items-center justify-start mb-[38px] mt-6 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-3/4 md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconsaxlinear.svg"
                          alt="iconsaxlinear"
                        />
                        <Text
                          className="mt-[3px] text-lg text-red-800"
                          size="txtInterMedium18Red800"
                        >
                          Inventory Management
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between mt-[18px] w-full">
                        <Input
                          name="group21746"
                          placeholder="Search by product name"
                          className="font-medium p-0 placeholder:text-gray-600_cc text-[13px] text-gray-600_cc text-left w-full"
                          wrapClassName="bg-white-A700 border border-gray-600 border-solid flex px-3 py-[11px] rounded-[21px]"
                          type="text"
                          prefix={
                            <Img
                              className="h-5 mr-2 my-auto"
                              src="images/img_search.svg"
                              alt="search"
                            />
                          }
                          suffix={
                            <Img
                              className="h-5 ml-[33px] my-auto"
                              src="images/img_iconsax_linear_microphone.svg"
                              alt="Iconsax/Linear/microphone"
                            />
                          }
                        ></Input>
                        <Button className="bg-white-A700 border border-red-800_59 border-solid flex h-[42px] items-center justify-center p-[11px] rounded-[50%] w-[42px]">
                          <Img
                            className="h-5"
                            src="images/img_setting4svgrepocom.svg"
                            alt="setting4svgrepo"
                          />
                        </Button>
                      </div>
                      <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-start mt-4 p-4 rounded-lg w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Britannia Good Day Choco Chip
                            </Text>
                            <div className="flex flex-row gap-[37px] items-start justify-start mt-[7px] w-[79%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[13px] text-gray-900"
                                  size="txtInterRegular13"
                                >
                                  Wt. : 400 gms
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-evenly w-[44%]">
                                <Text
                                  className="text-[13px] text-gray-600"
                                  size="txtInterRegular13Gray600"
                                >
                                  MRP
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600"
                                  size="txtInterRegular13Gray600"
                                >
                                  :
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-900"
                                  size="txtInterRegular13"
                                >
                                  ₹ 140.00
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[17px] items-start justify-between mt-[13px] w-full">
                              <Img
                                className="h-[70px] md:h-auto object-cover rounded"
                                src="images/img_rectangle24.png"
                                alt="rectangleTwentyFour"
                              />
                              <div className="flex flex-col gap-[17px] items-end justify-start">
                                <List
                                  className="flex flex-col gap-2.5 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <div className="flex flex-col items-center justify-start mt-[7px]">
                                      <Text
                                        className="text-[13px] text-gray-600"
                                        size="txtInterRegular13Gray600"
                                      >
                                        S.P
                                      </Text>
                                    </div>
                                    <Button className="border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[11px] py-[7px] rounded text-[13px] text-center text-gray-900">
                                      70.00
                                    </Button>
                                    <Img
                                      className="h-6 ml-10 w-6"
                                      src="images/img_arrowright.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex md:flex-1 flex-row items-center justify-start mr-0.5 my-0 w-[99%] md:w-full">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-[13px] text-gray-600"
                                        size="txtInterRegular13Gray600"
                                      >
                                        Qty.
                                      </Text>
                                    </div>
                                    <Button className="bg-blue_gray-100_59 border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[7px] py-[7px] rounded text-[13px] text-center text-gray-600">
                                      17
                                    </Button>
                                    <Img
                                      className="h-5 ml-[42px] w-5"
                                      src="images/img_file.svg"
                                      alt="file"
                                    />
                                  </div>
                                </List>
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="text-[10px] text-gray-600 text-right"
                                    size="txtInterRegular10"
                                  >
                                    Updated : 06 Aug 2023 01:14 PM
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-start mt-3 p-4 rounded-lg w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Britannia Marie Gold
                            </Text>
                            <div className="flex flex-row gap-[38px] items-start justify-start mt-2 w-[77%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[13px] text-gray-900"
                                  size="txtInterRegular13"
                                >
                                  Wt. : 500 gms
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-evenly w-[43%]">
                                <Text
                                  className="text-[13px] text-gray-600"
                                  size="txtInterRegular13Gray600"
                                >
                                  MRP
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-600"
                                  size="txtInterRegular13Gray600"
                                >
                                  :
                                </Text>
                                <Text
                                  className="text-[13px] text-gray-900"
                                  size="txtInterRegular13"
                                >
                                  ₹ 90.00
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[17px] items-start justify-between mt-[13px] w-full">
                              <Img
                                className="h-[70px] md:h-auto object-cover rounded"
                                src="images/img_rectangle24_70x68.png"
                                alt="rectangleTwentyFour_One"
                              />
                              <div className="flex flex-col gap-[17px] items-end justify-start">
                                <List
                                  className="flex flex-col gap-2.5 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                    <div className="flex flex-col items-center justify-start mt-[7px]">
                                      <Text
                                        className="text-[13px] text-gray-600"
                                        size="txtInterRegular13Gray600"
                                      >
                                        S.P
                                      </Text>
                                    </div>
                                    <Button className="border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[11px] py-[7px] rounded text-[13px] text-center text-gray-900">
                                      45.00
                                    </Button>
                                    <Img
                                      className="h-6 ml-10 w-6"
                                      src="images/img_arrowright.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex md:flex-1 flex-row items-center justify-start mr-0.5 my-0 w-[99%] md:w-full">
                                    <div className="flex flex-col items-center justify-start">
                                      <Text
                                        className="text-[13px] text-gray-600"
                                        size="txtInterRegular13Gray600"
                                      >
                                        Qty.
                                      </Text>
                                    </div>
                                    <Button className="bg-blue_gray-100_59 border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[7px] py-[7px] rounded text-[13px] text-center text-gray-600">
                                      17
                                    </Button>
                                    <Img
                                      className="h-5 ml-[42px] w-5"
                                      src="images/img_file.svg"
                                      alt="file"
                                    />
                                  </div>
                                </List>
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="text-[10px] text-gray-600 text-right"
                                    size="txtInterRegular10"
                                  >
                                    Updated : 06 Aug 2023 01:14 PM
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-start p-4 rounded-lg w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            Parle 2020 Gold Cookies
                          </Text>
                          <div className="flex flex-row gap-[38px] items-start justify-start mt-2 w-[79%] md:w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[13px] text-gray-900"
                                size="txtInterRegular13"
                              >
                                Wt. : 600 gms
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[44%]">
                              <Text
                                className="text-[13px] text-gray-600"
                                size="txtInterRegular13Gray600"
                              >
                                MRP
                              </Text>
                              <Text
                                className="text-[13px] text-gray-600"
                                size="txtInterRegular13Gray600"
                              >
                                :
                              </Text>
                              <Text
                                className="text-[13px] text-gray-900"
                                size="txtInterRegular13"
                              >
                                ₹ 180.00
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[17px] items-start justify-between mt-[13px] w-full">
                            <Img
                              className="h-[70px] md:h-auto object-cover rounded"
                              src="images/img_rectangle24_1.png"
                              alt="rectangleTwentyFour_Two"
                            />
                            <div className="flex flex-col gap-[17px] items-end justify-start">
                              <List
                                className="flex flex-col gap-2.5 items-center w-full"
                                orientation="vertical"
                              >
                                <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                                  <div className="flex flex-col items-center justify-start mt-[7px]">
                                    <Text
                                      className="text-[13px] text-gray-600"
                                      size="txtInterRegular13Gray600"
                                    >
                                      S.P
                                    </Text>
                                  </div>
                                  <Button className="border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[11px] py-[7px] rounded text-[13px] text-center text-gray-900">
                                    90.00
                                  </Button>
                                  <Img
                                    className="h-6 ml-10 w-6"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex md:flex-1 flex-row items-center justify-start mr-0.5 my-0 w-[99%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[13px] text-gray-600"
                                      size="txtInterRegular13Gray600"
                                    >
                                      Qty.
                                    </Text>
                                  </div>
                                  <Button className="bg-blue_gray-100_59 border border-gray-600_59 border-solid cursor-pointer font-semibold min-w-[98px] ml-[7px] py-[7px] rounded text-[13px] text-center text-gray-600">
                                    20
                                  </Button>
                                  <Img
                                    className="h-5 ml-[42px] w-5"
                                    src="images/img_file.svg"
                                    alt="file"
                                  />
                                </div>
                              </List>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[10px] text-gray-600 text-right"
                                  size="txtInterRegular10"
                                >
                                  Updated : 06 Aug 2023 01:14 PM
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-[1270px] h-[1270px] md:w-full md:h-full transform rotate-90">
              <div className="w-full h-full p-5 relative">
                <div className="h-[1024px] m-auto w-full">
                  <div className="absolute bg-red-800 h-[1024px] inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-[1024px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-[1024px] m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_One"
                    />
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-6xl text-white-A700"
                        size="txtInterBold60"
                      >
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Transform
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          <>
                            {" "}
                            your Business
                            <br />
                            with{" "}
                          </>
                        </span>
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Scankart™
                        </span>
                      </Text>
                      <div className="flex flex-col gap-[25px] items-start justify-start mt-[68px]">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                          size="txtInterSemiBold36"
                        >
                          PAPERLESS RETAIL
                        </Text>
                        <Text
                          className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-full"
                          size="txtInterBold56"
                        >
                          <>
                            More Power, Less Paper
                            <br />
                            Go Digital
                          </>
                        </Text>
                        <Text
                          className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                          size="txtInterMedium32"
                        >
                          <>
                            Digital Receipts
                            <br />
                            Mobile Checkout
                            <br />
                            Digital Displays
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-9 items-center justify-start mt-[60px] w-[78%] md:w-full">
                        <Img
                          className="h-[84px]"
                          src="images/img_group22225.svg"
                          alt="group22225_One"
                        />
                        <Img
                          className="h-[84px] md:h-auto object-cover"
                          src="images/img_group.png"
                          alt="group_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-start justify-end my-auto p-6 sm:px-5 right-[9%] rounded-bl-[24px] rounded-br-[24px] w-1/4">
                  <div className="flex flex-row gap-2 items-center justify-start mt-6 w-[47%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconsaxlinear.svg"
                      alt="iconsaxlinear_One"
                    />
                    <Text
                      className="text-lg text-red-800"
                      size="txtInterMedium18Red800"
                    >
                      Order Details
                    </Text>
                  </div>
                  <div className="border border-gray-600_59 border-solid flex flex-col items-start justify-start mt-5 p-4 rounded-[12px] w-auto">
                    <div className="flex flex-col gap-[22px] items-start justify-start w-[98%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-teal-700 sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          Payment Successful
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[37px] items-center justify-start w-[67%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Customer ID
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              9035839
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[81px] items-start justify-start w-[91%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Name
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Rahul Kr. Varshney
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[46px] items-center justify-start w-[73%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Invoice No.{" "}
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              INV220534
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-start justify-start w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Date & Time
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              04 Aug 2023 10:15 AM
                            </Text>
                          </div>
                          <div className="flex flex-row gap-5 items-center justify-start w-4/5 md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Payment Mode
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Cash Payment
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-center justify-start w-3/4 md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Txn. No.
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              TID1238954
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[35px] items-center justify-start w-[66%] md:w-full">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtInterMedium14Gray600"
                            >
                              Amount Paid
                            </Text>
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              ₹ 300.00
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start mt-[19px] w-full">
                    <Text
                      className="text-red-800 text-sm"
                      size="txtInterMedium14Red800"
                    >
                      Items Purchased
                    </Text>
                    <div className="border border-gray-600_59 border-solid flex flex-col h-[136px] md:h-auto items-start justify-center p-4 rounded-[12px] w-[312px]">
                      <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <div className="flex flex-row gap-5 items-center justify-between w-full">
                            <Img
                              className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                              src="images/img_ellipse6.png"
                              alt="ellipseSix"
                            />
                            <Img
                              className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                              src="images/img_ellipse7.png"
                              alt="ellipseSeven"
                            />
                          </div>
                          <div className="flex flex-row gap-5 items-center justify-between w-full">
                            <Text
                              className="text-center text-gray-900 text-xs"
                              size="txtInterMedium12"
                            >
                              <>
                                Parle 2020
                                <br />
                                Gold Co..
                              </>
                            </Text>
                            <Text
                              className="text-center text-gray-900 text-xs"
                              size="txtInterMedium12"
                            >
                              <>
                                Britannia
                                <br />
                                GoodDay..
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="border border-red-800 border-solid cursor-pointer font-medium min-w-[312px] mt-[120px] py-3.5 rounded text-base text-center text-red-800">
                    Exchange or Return
                  </Button>
                  <Button className="bg-red-800 cursor-pointer font-medium min-w-[312px] mt-4 py-3.5 rounded text-base text-center text-white-A700">
                    Download Invoice
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-none w-[1270px] h-[1270px] md:w-full md:h-full transform rotate-90">
              <div className="w-full h-full p-5 relative">
                <div className="h-[1024px] m-auto w-full">
                  <div className="absolute bg-red-800 h-[1024px] inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-[1024px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-[1024px] m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_Two"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[68px] h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-6xl text-white-A700"
                        size="txtInterBold60"
                      >
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Transform
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          <>
                            {" "}
                            your Business
                            <br />
                            with{" "}
                          </>
                        </span>
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Scankart™
                        </span>
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                            <Text
                              className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                              size="txtInterSemiBold36"
                            >
                              VENDOR MANAGEMENT
                            </Text>
                            <Text
                              className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-full"
                              size="txtInterBold56"
                            >
                              <>
                                Keeping your Vendors
                                <br />
                                On-Track
                              </>
                            </Text>
                            <Text
                              className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                              size="txtInterMedium32"
                            >
                              <>
                                Demand Forecasting
                                <br />
                                Supply & Payment Tracking
                                <br />
                                Performance Reports
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-9 items-center justify-start w-[85%] md:w-full">
                            <Img
                              className="h-[84px]"
                              src="images/img_group22225.svg"
                              alt="group22225_Two"
                            />
                            <Img
                              className="h-[84px] md:h-auto object-cover"
                              src="images/img_group.png"
                              alt="group_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col gap-[19px] h-max inset-y-[0] items-start justify-center my-auto p-6 sm:px-5 right-[9%] rounded-[24px] w-1/4">
                  <div className="flex flex-row gap-2 items-start justify-start mt-6 w-[68%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconsaxlinear.svg"
                      alt="iconsaxlinear_Two"
                    />
                    <Text
                      className="mt-[3px] text-lg text-red-800"
                      size="txtInterMedium18Red800"
                    >
                      Vendor Management
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-[11px] items-center mb-[235px] w-full"
                    orientation="vertical"
                  >
                    <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-start p-[15px] rounded-lg w-auto">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-start justify-start w-[71%] md:w-full">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_ellipse1.png"
                            alt="ellipseOne"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%]">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Raghunath Wholesaler
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-0.5">
                              <Text
                                className="text-gray-600 text-xs"
                                size="txtInterRegular12"
                              >
                                VID : N.A.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="border border-blue-700 border-solid cursor-pointer font-semibold min-w-[282px] py-2.5 rounded-[18px] text-blue-700 text-center text-xs">
                          Rs. 42000.00 Due
                        </Button>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12Gray600"
                        >
                          <span className="text-gray-600 font-inter text-left font-medium">
                            Last Purchased on{" "}
                          </span>
                          <span className="text-gray-900 font-inter text-left font-medium">
                            24th Aug 2023
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-start p-[15px] rounded-lg w-auto">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_ellipse1.png"
                            alt="ellipseOne"
                          />
                          <div className="flex flex-col items-start justify-start w-[77%]">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Lal Kishan Thok Vikreta
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-[3px]">
                              <Text
                                className="text-gray-600 text-xs"
                                size="txtInterRegular12"
                              >
                                VID : N.A.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="border border-blue-700 border-solid cursor-pointer font-semibold min-w-[282px] py-2.5 rounded-[18px] text-blue-700 text-center text-xs">
                          Rs. 37950.00 Due
                        </Button>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12Gray600"
                        >
                          <span className="text-gray-600 font-inter text-left font-medium">
                            Last Purchased on{" "}
                          </span>
                          <span className="text-gray-900 font-inter text-left font-medium">
                            14th Aug 2023
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="border border-gray-600_59 border-solid flex flex-col items-center justify-center p-[15px] rounded-lg w-auto">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-[62%] md:w-full">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_ellipse1.png"
                            alt="ellipseOne"
                          />
                          <div className="flex flex-col items-start justify-start w-[73%]">
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              A-Star Kirana Mart
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-[3px]">
                              <Text
                                className="text-gray-600 text-xs"
                                size="txtInterRegular12"
                              >
                                VID : N.A.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="border border-solid border-teal-700 cursor-pointer font-semibold min-w-[282px] py-2.5 rounded-[18px] text-center text-teal-700 text-xs">
                          No Dues
                        </Button>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtInterMedium12Gray600"
                        >
                          <span className="text-gray-600 font-inter text-left font-medium">
                            Last Purchased on{" "}
                          </span>
                          <span className="text-gray-900 font-inter text-left font-medium">
                            11th Aug 2023
                          </span>
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex-none w-[1270px] h-[1270px] md:w-full md:h-full transform rotate-90">
              <div className="w-full h-full p-5 relative">
                <div className="h-[1024px] m-auto w-full">
                  <div className="absolute bg-red-800 h-[1024px] inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-[1024px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-[1024px] m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_Three"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[68px] h-max inset-y-[0] justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] ml-2 md:ml-[0] md:text-5xl text-6xl text-white-A700"
                        size="txtInterBold60"
                      >
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Transform
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          <>
                            {" "}
                            your Business
                            <br />
                            with{" "}
                          </>
                        </span>
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Scankart™
                        </span>
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                            <Text
                              className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                              size="txtInterSemiBold36"
                            >
                              STORE ANALYTICS
                            </Text>
                            <Text
                              className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-full"
                              size="txtInterBold56"
                            >
                              <>
                                Empowering You with
                                <br />
                                Data Wisdom
                              </>
                            </Text>
                            <Text
                              className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                              size="txtInterMedium32"
                            >
                              <>
                                360° Store Analysis
                                <br />
                                Visual Reports
                                <br />
                                Predictive Analytics
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-9 items-center justify-start w-[85%] md:w-full">
                            <Img
                              className="h-[84px]"
                              src="images/img_group22225.svg"
                              alt="group22225_Three"
                            />
                            <Img
                              className="h-[84px] md:h-auto object-cover"
                              src="images/img_group.png"
                              alt="group_Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto pt-11 right-[9%] rounded-bl-[24px] rounded-br-[24px] w-1/4">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row gap-2 items-start justify-between w-[67%]">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_ellipse1_42x42.png"
                            alt="ellipseOne"
                          />
                          <div className="flex flex-col items-center justify-start mt-[3px]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-base text-gray-900"
                                    size="txtInterSemiBold16"
                                  >
                                    King’s Store
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                                <Text
                                  className="text-gray-600 text-xs"
                                  size="txtInterMedium12Gray600"
                                >
                                  14/110, Moti Mill Compound
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </div>
                      <Input
                        name="group21746_One"
                        placeholder="Search by product name"
                        className="font-medium p-0 placeholder:text-gray-600_cc text-[13px] text-gray-600_cc text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-600 border-solid flex mt-[15px] p-[11px] rounded-[21px] w-full"
                        type="text"
                        prefix={
                          <Img
                            className="h-5 mr-2 my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        }
                        suffix={
                          <Img
                            className="h-5 ml-[35px] my-auto"
                            src="images/img_iconsax_linear_microphone.svg"
                            alt="Iconsax/Linear/microphone"
                          />
                        }
                      ></Input>
                      <div className="flex flex-col items-center justify-start mt-5 w-full">
                        <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-[86%] md:w-full">
                            <Text
                              className="text-center text-red-800 text-sm"
                              size="txtInterMedium14Red800"
                            >
                              Customer
                            </Text>
                            <Text
                              className="text-center text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Scan
                            </Text>
                            <Text
                              className="text-center text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              Product
                            </Text>
                          </div>
                          <div className="flex flex-col relative w-full">
                            <Line className="bg-gray-600 h-px mx-auto w-full" />
                            <Line className="bg-red-800 h-[5px] mb-auto mt-[-1px] rounded-sm w-[34%] z-[1]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[21px] w-full">
                        <Text
                          className="text-[13px] text-red-800"
                          size="txtInterSemiBold13"
                        >
                          Today’s Analysis
                        </Text>
                        <a
                          href="javascript:"
                          className="text-[13px] text-gray-600 text-right"
                        >
                          <Text size="txtInterMedium13">View More</Text>
                        </a>
                      </div>
                      <div className="gap-4 grid grid-cols-2 justify-center min-h-[auto] mt-4 w-full">
                        <div className="bg-gray-100_01 flex flex-1 flex-col gap-2 items-center justify-start p-[17px] rounded-md w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                            size="txtInterSemiBold24Gray900"
                          >
                            100
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start mb-0.5 w-[99%] md:w-full">
                            <Img
                              className="h-8 w-8"
                              src="images/img_music.svg"
                              alt="music"
                            />
                            <Text
                              className="leading-[16.00px] text-[13px] text-gray-600 w-[65%] sm:w-full"
                              size="txtInterMedium13"
                            >
                              <>
                                Number of
                                <br />
                                Visits
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-1 flex-col items-end justify-start p-2.5 rounded-md w-full">
                          <div className="flex flex-col gap-[9px] justify-start mb-2.5 w-[94%] md:w-full">
                            <div className="flex flex-row gap-9 items-start justify-end md:ml-[0] ml-[39px] w-[67%] md:w-full">
                              <Text
                                className="mt-1.5 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                                size="txtInterSemiBold24Gray900"
                              >
                                80
                              </Text>
                              <div className="bg-purple-400 h-3 mb-6 rounded-[50%] w-3"></div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start mr-2 w-[94%] md:w-full">
                              <Img
                                className="h-8 w-8"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Text
                                className="leading-[16.00px] text-[13px] text-gray-600 w-[65%] sm:w-full"
                                size="txtInterMedium13"
                              >
                                <>
                                  Number of
                                  <br />
                                  Customers
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-1 flex-col items-end justify-start p-2.5 rounded-md w-full">
                          <div className="flex flex-col gap-[9px] justify-start mb-2.5 w-[94%] md:w-full">
                            <div className="flex flex-row gap-9 items-start justify-end md:ml-[0] ml-[39px] w-[67%] md:w-full">
                              <Text
                                className="mt-1.5 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                                size="txtInterSemiBold24Gray900"
                              >
                                48
                              </Text>
                              <div className="bg-orange-600 h-3 mb-6 rounded-[50%] w-3"></div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start mr-2 w-[94%] md:w-full">
                              <Img
                                className="h-8 w-8"
                                src="images/img_usersgrouptwo.svg"
                                alt="usersgrouptwo"
                              />
                              <Text
                                className="leading-[16.00px] text-[13px] text-gray-600 w-[65%] sm:w-full"
                                size="txtInterMedium13"
                              >
                                <>
                                  Repeated
                                  <br />
                                  Customers
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-1 flex-col items-end justify-start p-2.5 rounded-md w-full">
                          <div className="flex flex-col gap-[9px] justify-start mb-2.5 w-[94%] md:w-full">
                            <div className="flex flex-row gap-[37px] items-start justify-end ml-10 md:ml-[0] w-[66%] md:w-full">
                              <Text
                                className="h-[30px] mt-1.5 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                                size="txtInterSemiBold24Gray900"
                              >
                                32
                              </Text>
                              <div className="bg-indigo-500 h-3 mb-6 rounded-[50%] w-3"></div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start mr-2 w-[94%] md:w-full">
                              <Img
                                className="h-8 w-8"
                                src="images/img_usersgrouprou.svg"
                                alt="usersgrouprou"
                              />
                              <Text
                                className="leading-[16.00px] text-[13px] text-gray-600 w-[65%] sm:w-full"
                                size="txtInterMedium13"
                              >
                                <>
                                  First Time
                                  <br />
                                  Customers
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[293px] md:h-[328px] relative w-full">
                      <div className="absolute flex h-[293px] md:h-[328px] inset-[0] justify-end m-auto w-[87%]">
                        <div className="border border-gray-600_59 border-solid h-[328px] mt-auto mx-auto rounded-md w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-[17px] inset-x-[0] items-center justify-end mx-auto w-[91%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-600_cc text-xs"
                                  size="txtInterMedium12Gray600cc"
                                >
                                  Total No. of Visits
                                </Text>
                                <div className="flex flex-row gap-2.5 items-center justify-between mt-[3px] w-[96%] md:w-full">
                                  <Text
                                    className="text-gray-900 text-lg"
                                    size="txtInterSemiBold18"
                                  >
                                    100
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly">
                                    <Text
                                      className="text-red-A400 text-xs"
                                      size="txtInterMedium12RedA400"
                                    >
                                      02.00%
                                    </Text>
                                    <Img
                                      className="h-2.5 mt-0.5 w-2.5"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-32 items-center justify-start pt-[7px] px-[7px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group15.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[117px] mt-1"
                                    src="images/img_group22105.svg"
                                    alt="group22105"
                                  />
                                </div>
                                <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                                  <Text
                                    className="text-[11px] text-center text-gray-600"
                                    size="txtInterMedium11"
                                  >
                                    09 AM
                                  </Text>
                                  <Text
                                    className="text-[11px] text-center text-gray-600"
                                    size="txtInterMedium11"
                                  >
                                    01 PM
                                  </Text>
                                  <Text
                                    className="text-[11px] text-center text-gray-600"
                                    size="txtInterMedium11"
                                  >
                                    05 PM
                                  </Text>
                                  <Text
                                    className="text-[11px] text-center text-gray-600"
                                    size="txtInterMedium11"
                                  >
                                    09 PM
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="mt-3 text-[11px] text-gray-600_cc"
                              size="txtInterMedium11Gray600cc"
                            >
                              <span className="text-gray-600_cc font-inter text-left font-medium">
                                Total customers step-in yesterday is{" "}
                              </span>
                              <span className="text-gray-900 font-inter text-left font-medium">
                                102
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[26px] items-center justify-between w-full">
                            <Text
                              className="text-gray-600_cc text-xs"
                              size="txtInterMedium12Gray600cc"
                            >
                              <>
                                Graphical
                                <br />
                                Representation
                              </>
                            </Text>
                            <div className="border border-gray-600_59 border-solid flex flex-row items-center justify-between px-3 py-1.5 rounded-[18px] w-auto">
                              <Text
                                className="text-gray-900 text-xs w-[57px]"
                                size="txtInterMedium12"
                              >
                                Bar Graph
                              </Text>
                              <Img
                                className="h-6 w-[18px]"
                                src="images/img_iconsaxboldarrowdown2.svg"
                                alt="iconsaxboldarro"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] h-28 md:h-[78px] inset-x-[0] mx-auto w-full">
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-20 inset-x-[0] items-center justify-end mx-auto p-[15px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group21692.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-between mt-0.5 w-[79%] md:w-full">
                            <div className="flex flex-col gap-[5px] items-center justify-start w-[45px]">
                              <Img
                                className="h-7 w-7"
                                src="images/img_file_gray_900.svg"
                                alt="file"
                              />
                              <Text
                                className="text-[10px] text-center text-gray-900"
                                size="txtInterMedium10"
                              >
                                Inventory
                              </Text>
                            </div>
                            <Text
                              className="mt-[27px] text-center text-gray-900 text-xs"
                              size="txtInterMedium12"
                            >
                              Sell
                            </Text>
                            <div className="flex flex-col items-center justify-start">
                              <Img
                                className="h-7 w-7"
                                src="images/img_iconsaxtwotonescan.svg"
                                alt="iconsaxtwotones"
                              />
                              <Text
                                className="mt-1 text-[10px] text-center text-gray-900"
                                size="txtInterMedium10"
                              >
                                Add
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gradient1  flex flex-col h-16 inset-x-[0] items-center justify-start mx-auto p-1 rounded-[50%] top-[0] w-16">
                          <Button className="bg-red-700_e5 flex h-14 items-center justify-center p-3.5 rounded-[50%] w-14">
                            <Img
                              className="h-[26px]"
                              src="images/img_qrcode.svg"
                              alt="qrcode"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="consumer" className="flex flex-col h-full items-center justify-start w-full">
            <div className="h-[1170px] md:px-5 relative w-full">
              <div className="h-fit m-auto w-full">
                <div className="absolute bg-red-800 h-[1170px] inset-y-[0] my-auto right-[0] w-[22%]"></div>
                <div className="absolute h-[1170px] inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                  <Img
                    className="h-[1170px] m-auto object-cover w-full"
                    src="images/img_rectangle119.png"
                    alt="rectangle119_Four"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[134px] h-[859px] md:h-auto justify-start left-[5%] top-[10%] w-[859px]">
                    <div className="flex sm:flex-col flex-row gap-[25px] items-end justify-start w-[56%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                        <div className="h-[59px] relative w-full">
                          <div className="h-[59px] m-auto w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700 top-[3%] w-max"
                              size="txtInterSemiBold3926"
                            >
                              <span className="text-white-A700 font-inter text-left font-semibold">
                                Sc
                              </span>
                              <span className="text-red-A400 font-inter text-left font-semibold">
                                a
                              </span>
                              <span className="text-white-A700 font-inter text-left font-semibold">
                                nkart
                              </span>
                            </Text>
                            <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-end justify-between left-[17%] md:left-[44%] sm:left-[38%] my-auto w-[59px]">
                              <Img
                                className="h-[13px] mt-[46px] w-3"
                                src="images/img_computer.svg"
                                alt="computer_Four"
                              />
                              <div className="flex flex-col gap-[33px] items-center justify-start">
                                <Img
                                  className="img-invert h-[13px] w-3"
                                  src="images/img_signal.svg"
                                  alt="signal_Four"
                                />
                                <Img
                                  className="h-[13px] w-3"
                                  src="images/img_signal.svg"
                                  alt="signal_Five"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="img-invert absolute h-[13px] left-[17%] md:left-[44%] sm:left-[38%] top-[0] w-3"
                            src="images/img_computer.svg"
                            alt="computer_Five"
                          />
                          <Img
                            className="absolute bottom-[14%] h-px left-[23%]"
                            src="images/img_vector86.svg"
                            alt="vectorEightySix_Two"
                          />
                        </div>
                      </div>
                      <Text
                        className="sm:mt-0 mt-[9px] sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700"
                        size="txtInterSemiBold3926"
                      >
                        Consumer App
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[65px] w-[93%] md:w-full">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-6xl text-white-A700 w-full"
                        size="txtInterBold60"
                      >
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Transform
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          <>
                            {" "}
                            the Way You
                            <br />
                            Shop with{" "}
                          </>
                        </span>
                        <span className="text-red-A400 font-inter text-left font-bold">
                          Scankart™
                        </span>
                        <span className="text-white-A700 font-inter text-left font-bold">
                          {" "}
                        </span>
                      </Text>
                      <div className="flex flex-col items-start justify-start mt-[68px]">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                          size="txtInterSemiBold36"
                        >
                          INSTANT CHECKOUT
                        </Text>
                        <Text
                          className="mt-7 md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                          size="txtInterBold56"
                        >
                          Scan, Compare & Buy
                        </Text>
                        <Text
                          className="leading-[48.00px] mt-4 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                          size="txtInterMedium32"
                        >
                          <>
                            AI Shopping Mate (SKAI)
                            <br />
                            Onboard Stores & Earn
                            <br />
                            Compare Best Prices
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[84px] mt-[60px]"
                        src="images/img_group22258.svg"
                        alt="group22258"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 bottom-[12%] flex flex-col items-center justify-start pt-[47px] right-[9%] rounded-bl-[24px] rounded-br-[24px] w-1/4">
                <div className="flex flex-col gap-5 items-end justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-[94%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-[93%] md:w-full">
                      <Img
                        className="h-[34px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <div className="flex flex-col items-center justify-start ml-2 w-[51%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-start w-[81%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[85%]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-base text-gray-900"
                                    size="txtInterSemiBold16"
                                  >
                                    Gandhi Nagar
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-4 ml-[3px] w-4"
                                src="images/img_arrowdown_gray_900.svg"
                                alt="arrowdown_One"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                              <Text
                                className="text-gray-600 text-xs"
                                size="txtInterMedium12Gray600"
                              >
                                14/110, Moti Mill Compound
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-8 ml-[88px] mt-0.5 w-8"
                        src="images/img_file_gray_900_32x32.svg"
                        alt="file_One"
                      />
                    </div>
                    <Input
                      name="group21746_Two"
                      placeholder="Search by product name"
                      className="font-medium p-0 placeholder:text-gray-600_cc text-[13px] text-gray-600_cc text-left w-full"
                      wrapClassName="bg-white-A700 border border-gray-600_59 border-solid flex p-[11px] rounded-[21px] w-[93%]"
                      type="text"
                      prefix={
                        <Img
                          className="h-5 mr-2 my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      }
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_iconsax_linear_microphone.svg"
                          alt="Iconsax/Linear/microphone"
                        />
                      }
                    ></Input>
                    <div className="flex flex-row gap-24 items-end justify-start w-[93%] md:w-full">
                      <div className="flex flex-col items-center justify-start my-[5px] w-[30%]">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="text-[13px] text-red-800"
                            size="txtInterSemiBold13"
                          >
                            Wallet Balance
                          </Text>
                          <div className="flex flex-row font-archivo gap-2 items-center justify-start w-[96%] md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_addtosvgrepocom.svg"
                              alt="addtosvgrepocom"
                            />
                            <Text
                              className="text-gray-900 text-lg"
                              size="txtArchivoRomanMedium18"
                            >
                              ₹ 2500
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[58px] items-center justify-end p-2.5 w-2/5"
                        style={{
                          backgroundImage: "url('images/img_group21930.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-1.5 items-center justify-between mt-0.5 w-[99%] md:w-full">
                          <Img
                            className="h-9 md:h-auto object-cover w-9"
                            src="images/img_savetheplanet.png"
                            alt="savetheplanet"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[13px] text-center text-gray-900_01"
                              size="txtInterMedium13Gray90001"
                            >
                              Go Green
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Button className="bg-blue_gray-100_7f cursor-pointer font-medium leading-[normal] min-w-[168px] py-[35px] rounded text-center text-gray-600 text-xs">
                          Promotional Offers
                        </Button>
                        <Button className="bg-blue_gray-100_7f cursor-pointer font-medium leading-[normal] min-w-[168px] py-[35px] rounded text-center text-gray-600 text-xs">
                          Promotional Offers
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[455px] md:h-[459px] relative w-full">
                    <div className="md:h-[459px] h-[461px] m-auto pb-1.5 w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[87%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[13px] text-red-800"
                                size="txtInterSemiBold13"
                              >
                                ScanKart Stores
                              </Text>
                              <Text
                                className="text-[13px] text-gray-600 text-right"
                                size="txtInterMedium13"
                              >
                                View in Map
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                <List
                                  className="sm:flex-col flex-row gap-5 grid grid-cols-4 justify-center w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                      src="images/img_ellipse8.png"
                                      alt="ellipseEight"
                                    />
                                    <Text
                                      className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                      size="txtInterMedium10"
                                    >
                                      <>
                                        Shivam A<br />
                                        Mart
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                      src="images/img_ellipse7_63x63.png"
                                      alt="ellipseSeven"
                                    />
                                    <Text
                                      className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                      size="txtInterMedium10"
                                    >
                                      <>
                                        King’s Food
                                        <br />
                                        Mart
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                      src="images/img_ellipse6_63x63.png"
                                      alt="ellipseSix"
                                    />
                                    <Text
                                      className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                      size="txtInterMedium10"
                                    >
                                      Raghav Kirana Mart
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                      src="images/img_ellipse3.png"
                                      alt="ellipseThree"
                                    />
                                    <Text
                                      className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                      size="txtInterMedium10"
                                    >
                                      <>
                                        A to Z Food
                                        <br />
                                        Shop
                                      </>
                                    </Text>
                                  </div>
                                </List>
                                <div className="flex flex-row items-center justify-between w-[92%] md:w-full">
                                  <Text
                                    className="text-[8px] text-center text-gray-600"
                                    size="txtInterMedium8"
                                  >
                                    800 Mtrs.
                                  </Text>
                                  <Text
                                    className="text-[8px] text-center text-gray-600"
                                    size="txtInterMedium8"
                                  >
                                    1.2 Kms.
                                  </Text>
                                  <Text
                                    className="text-[8px] text-center text-gray-600"
                                    size="txtInterMedium8"
                                  >
                                    1.6 Kms.
                                  </Text>
                                  <Text
                                    className="text-[8px] text-center text-gray-600"
                                    size="txtInterMedium8"
                                  >
                                    1.7 Kms.
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[22px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <Text
                              className="text-[13px] text-red-800"
                              size="txtInterSemiBold13"
                            >
                              My Offers & Deals
                            </Text>
                            <List
                              className="sm:flex-col flex-row gap-5 grid grid-cols-4 justify-center w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                  src="images/img_ellipse8_63x63.png"
                                  alt="ellipseEight"
                                />
                                <Text
                                  className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                  size="txtInterMedium10"
                                >
                                  <>
                                    Spectacular
                                    <br />
                                    Deals
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                  src="images/img_ellipse7_1.png"
                                  alt="ellipseSeven"
                                />
                                <Text
                                  className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                  size="txtInterMedium10"
                                >
                                  <>
                                    Get Extra
                                    <br />
                                    5% Off
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                  src="images/img_ellipse6_3.png"
                                  alt="ellipseSix"
                                />
                                <Text
                                  className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                  size="txtInterMedium10"
                                >
                                  <>
                                    Get Flat
                                    <br />
                                    20% Off
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                  src="images/img_ellipse3_63x63.png"
                                  alt="ellipseThree"
                                />
                                <Text
                                  className="leading-[13.00px] mt-1 text-[10px] text-center text-gray-900 w-full"
                                  size="txtInterMedium10"
                                >
                                  <>
                                    Get Extra
                                    <br />
                                    10% Off
                                  </>
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[22px] w-full">
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[13px] text-red-800"
                                size="txtInterSemiBold13"
                              >
                                My Previous Orders
                              </Text>
                              <a
                                href="javascript:"
                                className="text-[13px] text-gray-600 text-right"
                              >
                                <Text size="txtInterMedium13">View All</Text>
                              </a>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-row gap-5 items-center justify-between w-full">
                                  <Img
                                    className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                    src="images/img_ellipse3_1.png"
                                    alt="ellipseThree"
                                  />
                                  <Img
                                    className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                    src="images/img_ellipse6_4.png"
                                    alt="ellipseSix_One"
                                  />
                                  <Img
                                    className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                    src="images/img_ellipse7_2.png"
                                    alt="ellipseSeven_One"
                                  />
                                  <Img
                                    className="h-[63px] md:h-auto rounded-[50%] w-[63px]"
                                    src="images/img_ellipse8_1.png"
                                    alt="ellipseEight"
                                  />
                                </div>
                                <div className="flex flex-row gap-5 items-center justify-between mt-1 w-full">
                                  <Text
                                    className="leading-[13.00px] text-[10px] text-center text-gray-900"
                                    size="txtInterMedium10"
                                  >
                                    <>
                                      Safola Soya
                                      <br />
                                      Chunks
                                    </>
                                  </Text>
                                  <Text
                                    className="leading-[13.00px] text-[10px] text-center text-gray-900"
                                    size="txtInterMedium10"
                                  >
                                    <>
                                      Tata Pink
                                      <br />
                                      Salt
                                    </>
                                  </Text>
                                  <Text
                                    className="leading-[13.00px] text-[10px] text-center text-gray-900"
                                    size="txtInterMedium10"
                                  >
                                    <>
                                      Tata
                                      <br />
                                      Toor Dal
                                    </>
                                  </Text>
                                  <Text
                                    className="leading-[13.00px] text-[10px] text-center text-gray-900"
                                    size="txtInterMedium10"
                                  >
                                    Dawat Rozana Rice
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-end mt-[19px]">
                          <Text
                            className="text-[13px] text-amber-900"
                            size="txtInterMedium13Amber900"
                          >
                            Categories
                          </Text>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[1%] flex flex-col h-20 inset-x-[0] items-center justify-end mx-auto p-[18px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group21692.svg')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
                          <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                            <div className="h-[42px] relative w-[42px]">
                              <Img
                                className="h-[42px] m-auto rounded-[50%] w-[42px]"
                                src="images/img_ellipse38.png"
                                alt="ellipseThirtyEight"
                              />
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto text-[9px] text-black-900_01 text-center w-max"
                                size="txtInterMedium9"
                              >
                                SKAI
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="mt-[27px] text-center text-gray-900 text-xs"
                            size="txtInterMedium12"
                          >
                            Scan & Buy
                          </Text>
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_ellipse1_1.png"
                            alt="ellipseOne_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient1  bottom-[11%] flex flex-col h-16 inset-x-[0] items-center justify-start mx-auto p-1 rounded-[50%] w-16">
                      <Button className="bg-red-700_e5 flex h-14 items-center justify-center p-3.5 rounded-[50%] w-14">
                        <Img
                          className="h-[26px]"
                          src="images/img_qrcode.svg"
                          alt="qrcode_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment */}
        <div id="pricing" className="flex flex-col items-start justify-start max-w-[1951px] mt-[103px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full md:w-full">
            <Text
              className="md:text-5xl text-6xl text-center text-gray-100_02"
              size="txtInterBold60Gray10002"
            >
              <span className="text-gray-100_02 items-center font-inter font-bold">
                Join the{" "}
              </span>
              <span className="text-red-A400 font-inter font-bold">
                Retail Revolution
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[109px] w-full">
              <div className="backdrop-opacity-[0.5] bg-red-800_75 blur-[320.00px] h-[478px] mb-[75px] md:mt-0 mt-[145px] rounded-[50%] w-[478px]"></div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[124px] grid md:grid-cols-1 grid-cols-2"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-14 sm:px-5 rounded-[24px] w-full">
                    <div className="flex flex-row items-start justify-center mt-[21px] w-full md:w-full">
                      <Text
                        className="mt-[7px] text-base text-black-900 text-center"
                        size="txtInterMedium16"
                      >
                        Monthly
                      </Text>
                      <Switch
                        onColor=""
                        offColor=""
                        onHandleColor="#c82625"
                        offHandleColor="#c82625"
                        value={false}
                        className="border-2 border-solid ml-[9px] rounded-[22px] red_800_red_800_border3 w-[53%]"
                      />
                      <Text
                        className="ml-[7px] mt-[7px] text-base text-black-900 text-center"
                        size="txtInterMedium16"
                      >
                        Annually
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start mt-8 w-[92%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="bg-clip-text bg-gradient2  sm:text-2xl md:text-[26px] text-[28px] text-center text-transparent"
                          size="txtInterRegular28"
                        >
                          Standard
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="md:text-5xl text-[84px] text-black-900 text-center"
                            size="txtInterBold84"
                          >
                            <span className="md:text-[44px] sm:text-[38px] text-black-900 font-inter text-5xl font-bold">
                              ₹
                            </span>
                            <span className="text-black-900 font-inter font-bold">
                              0
                            </span>
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-full"
                            size="txtInterRegular24"
                          >
                            <>
                              /month
                              <br />
                              billed annually
                            </>
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red-800 cursor-pointer font-semibold min-w-[274px] py-[19px] rounded-[32px] text-center text-gray-100 text-xl">
                        Get Started
                      </Button>
                    </div>
                    <Text
                      className="mt-[26px] text-base text-center text-gray-900"
                      size="txtInterMedium16Gray900"
                    >
                      *FREE FOREVER
                    </Text>
                    <Img
                      className="h-[186px] md:h-auto mt-[25px] object-cover w-[186px]"
                      src="images/img_qrcode32.png"
                      alt="qrcodeThirtyTwo"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-14 sm:px-5 rounded-[24px] w-full">
                    <div className="flex flex-row items-start justify-center mt-[21px] w-full md:w-full">
                      <Text
                        className="mt-[7px] text-base text-black-900 text-center"
                        size="txtInterMedium16"
                      >
                        Monthly
                      </Text>
                      <Switch
                        onColor=""
                        offColor=""
                        onHandleColor="#c82625"
                        offHandleColor="#c82625"
                        value={false}
                        className="border-2 border-solid ml-[9px] rounded-[22px] red_800_red_800_border6 w-[53%]"
                      />
                      <Text
                        className="ml-[7px] mt-[7px] text-base text-black-900 text-center"
                        size="txtInterMedium16"
                      >
                        Annually
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start mt-8 w-[92%] md:w-full">
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <Text
                          className="bg-clip-text bg-gradient2  sm:text-2xl md:text-[26px] text-[28px] text-center text-transparent"
                          size="txtInterRegular28"
                        >
                          Standard
                        </Text>
                        <div className="md:h-[102px] h-[161px] relative w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[65%]">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Text
                                className="mt-[50px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-600"
                                size="txtInterSemiBold32"
                              >
                                ₹799
                              </Text>
                              <Text
                                className="md:text-5xl text-[84px] text-black-900 text-center"
                                size="txtInterBold84"
                              >
                                <span className="md:text-[44px] sm:text-[38px] text-black-900 font-inter text-5xl font-bold">
                                  ₹
                                </span>
                                <span className="text-black-900 font-inter font-bold">
                                  0
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Line className="absolute bg-gray-600 h-0.5 left-[4%] top-[44%] w-[43%]" />
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-2xl top-[56%] md:text-[22px] text-center text-gray-900 sm:text-xl w-full"
                            size="txtInterRegular24"
                          >
                            <>
                              /month
                              <br />
                              billed annually
                            </>
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red-800 cursor-pointer font-semibold min-w-[274px] py-[19px] rounded-[32px] text-center text-gray-100 text-xl">
                        Onboard Store
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[25px] items-center justify-start mt-[26px] w-[64%] md:w-full">
                      <Text
                        className="text-base text-center text-gray-900"
                        size="txtInterMedium16Gray900"
                      >
                        *LIMITED PERIOD OFFER
                      </Text>
                      <Img
                        className="h-[186px] md:h-auto object-cover w-[186px]"
                        src="images/img_qrcode32.png"
                        alt="qrcodeThirtyThree"
                      />
                    </div>
                  </div>
                </div>
              </List>
              <div className="backdrop-opacity-[0.5] bg-red-800_75 blur-[320.00px] h-[478px] mb-[75px] md:mt-0 mt-[145px] rounded-[50%] w-[478px]"></div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[35px] w-[47%] md:w-full">
              <Button className="bg-gradient3  cursor-pointer font-medium min-w-[302px] py-3.5 sm:text-[32.18px] md:text-[34.18px] text-[36.18px] text-center text-white-A700">
                Consumer
              </Button>
              <Button className="bg-gradient3  cursor-pointer font-medium min-w-[302px] py-3.5 sm:text-[32.18px] md:text-[34.18px] text-[36.18px] text-center text-white-A700">
                Store
              </Button>
            </div>
          </div>
        </div>
        <div id="contact" className="h-[678px] md:h-[717px] mt-[77px] md:px-5 relative w-full">
          <footer className="absolute bg-black-900 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto shadow-bs w-full">
            <div className="flex flex-col items-center justify-center mb-[42px] mt-[72px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[86%] md:w-full">
                  <div className="flex flex-col gap-[51px] items-start justify-start w-[49%] md:w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[29%] md:w-full">
                      <div className="h-[59px] relative w-full">
                        <div className="h-[59px] m-auto w-full">
                          <Text
                            className="absolute inset-x-[0] mx-auto sm:text-[35.26px] md:text-[37.26px] text-[39.26px] text-white-A700 top-[3%] w-max"
                            size="txtInterSemiBold3926"
                          >
                            <span className="text-white-A700 font-inter text-left font-semibold">
                              Sc
                            </span>
                            <span className="text-red-A400 font-inter text-left font-semibold">
                              a
                            </span>
                            <span className="text-white-A700 font-inter text-left font-semibold">
                              nkart
                            </span>
                          </Text>
                          <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-end justify-between left-[17%] md:left-[44%] sm:left-[38%] my-auto w-[59px]">
                            <Img
                              className="h-[13px] mt-[46px] w-3"
                              src="images/img_computer.svg"
                              alt="computer_Six"
                            />
                            <div className="flex flex-col gap-[33px] items-center justify-start">
                              <Img
                                className="img-invert h-[13px] w-3"
                                src="images/img_signal.svg"
                                alt="signal_Six"
                              />
                              <Img
                                className="h-[13px] w-3"
                                src="images/img_signal.svg"
                                alt="signal_Seven"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="img-invert absolute h-[13px] left-[17%] md:left-[44%] sm:left-[38%] top-[0] w-3"
                          src="images/img_computer.svg"
                          alt="computer_Seven"
                        />
                        <Img
                          className="absolute bottom-[14%] h-px left-[23%]"
                          src="images/img_vector86.svg"
                          alt="vectorEightySix_Three"
                        />
                      </div>
                      <a
                        href="www.scankart.ai"
                        className="text-white-A700 text-xl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text size="txtInterMedium20">www.scankart.ai</Text>
                      </a>
                    </div>
                    <Text
                      className="bg-clip-text bg-gradient4 leading-[64.00px] md:text-5xl text-[64px] text-transparent w-full"
                      size="txtInterSemiBold64"
                    >
                      <span className="text-white-A700 font-inter text-left font-semibold">
                        Made with{" "}
                      </span>
                      <span className="text-red-A400 font-inter text-left font-semibold">
                        ❤
                      </span>
                      <span className="text-white-A700 font-inter text-left font-semibold">
                        <>
                          ️<br />
                        </>
                      </span>
                      <span className="text-blue_gray-100_59 md:text-[44px] sm:text-[38px] font-inter text-left text-5xl bg-gradient-to-b font-semibold">
                        By Team Scankart
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start md:mt-0 mt-[3px] w-[39%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="flex sm:flex-1 flex-col gap-[37px] items-start justify-start w-[44%] sm:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100_99 sm:text-xl"
                          size="txtInterMedium24Bluegray10099"
                        >
                          QUICK LINKS
                        </Text>
                        <ul className="flex flex-col gap-[15px] items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xl"
                            >
                              <Text size="txtInterMedium20">
                                Features Comparison
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xl"
                            >
                              <Text size="txtInterMedium20">
                                Privacy Policy
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xl"
                            >
                              <Text size="txtInterMedium20">Partnerships</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xl"
                            >
                              <Text size="txtInterMedium20">
                                Terms & Conditions
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-[21px] items-center justify-start w-[37%] sm:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-100_99 sm:text-xl"
                          size="txtInterMedium24Bluegray10099"
                        >
                          GET IN TOUCH
                        </Text>
                        <div className="flex flex-col gap-[13px] items-start justify-start">
                          <a
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20"
                            href="mailto:ceo@scankart.ai"
                          >
                            ceo@scankart.ai
                          </a>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20"
                          >
                            +91 8638440694
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start w-[57%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_play.svg"
                        alt="play"
                      />
                      <Img
                        className="h-12 w-12"
                        src="images/img_info.svg"
                        alt="info"
                      />
                      <Img
                        className="h-12 w-12"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-12 w-12"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-600_3f h-px mt-[84px] w-full" />
                <Text
                  className="mt-[33px] text-blue_gray-100_a5 text-center text-xl"
                  size="txtInterMedium20Bluegray100a5"
                >
                  © 2023, Scankart Innovations Pvt. Ltd. All Rights Reserved.
                </Text>
              </div>
            </div>
          </footer>
          <div className="absolute backdrop-opacity-[0.5] bg-black-900 blur-[50.00px] h-[76px] inset-x-[0] mx-auto top-[0] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
