import React from "react";
import { Button, Img, Input, Line, List, Switch, Text } from "components";
// import { Link } from "react-scroll";

function ScrollToCenterSection({ sectionId }) {
  const myRef = React.useRef(null);
  const [scrolling, setScrolling] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [video, setVideo] = React.useState(true);
  const [youtubeID] = React.useState("rDP1O5MepmQ");
  const [email, setEmail] = React.useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const closeVideo = () => {
    setVideo(false);
  };

  const joinWaitlist = () => {
    const uniqueId = 10544;
    // console.log(email, uniqueId);
    const apiUrl = `https://scankart.onrender.com/proxy/post?url=${encodeURIComponent(
      "https://api.getwaitlist.com/api/v1/signup"
    )}`;

    // Data to send in the request body
    const requestData = {
      email: email,
      waitlist_id: uniqueId,
    };

    // Send a POST request to the API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Allow-Access-Control-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful
          console.log("Joined the waitlist successfully!");
          alert("Joined the waitlist successfully!");
        } else {
          // Request failed
          console.error("Failed to join the waitlist.");
          alert("Failed to join the waitlist.");
        }
      })
      .catch((error) => {
        console.error("Error while joining the waitlist:", error);
      });
  };

  React.useEffect(() => {

    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const halfHeight = window.innerHeight / 8;

        if (rect.top < halfHeight && rect.bottom > halfHeight) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // clearInterval(scrollInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="max-h-[97vh] h-[50%] w-[50%] sm:w-full md:w-full relative">
            <div className="bg-gradient_gray flex flex-col items-center justify-start p-3 md:px-5 rounded-[32px] w-full">
              <div className="bg-black-900 flex flex-col gap-2.5 justify-start p-5 rounded-[24px] w-full">
                <Img
                  className="absolute top-0 right-0 m-4 cursor-pointer"
                  src="images/img_closecirclesvgrepocom.svg"
                  alt="closecirclesvgr"
                  onClick={closePopup}
                />
                <div className="flex flex-col items-center justify-start mb-10 mx-auto w-[91%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-start w-[83%] md:w-full">
                    <Img
                      className="h-12 md:h-auto mb-[3px] object-cover w-12"
                      src="images/img_email1.svg"
                      alt="emailOne"
                    />
                    <Text className="font-semibold sm:mt-0 mt-[7px] text-3xl sm:text-[32px] md:text-[34px] text-white-A700">
                      <span className="text-white-A700 font-inter text-left">
                        Subscribe to
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        our
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        {" "}
                      </span>
                      <span className="text-red-A400 font-inter text-left">
                        Waitlist
                      </span>
                    </Text>
                  </div>
                  <Text className="font-medium leading-[28.00px] mt-3 text-blue_gray-100_a5 text-center text-lg w-[87%] sm:w-full">
                    <span className="text-blue_gray-100_a5 font-inter">
                      Join the Waitlist{" "}
                    </span>
                    <span className="text-blue_gray-100_a5 font-inter font-bold">
                      💌
                    </span>
                    <span className="text-blue_gray-100_a5 font-inter">
                      <>
                        {" "}
                        Now and Secure Your Chance to Be Among the Lucky Few
                        Who&#39;ll Unlock Exclusive Rewards and Gadgets at
                        Launch! 🎉💫
                      </>
                    </span>
                  </Text>
                  {/* <div className="flex sm:flex-col flex-row gap-[18px]  items-center justify-between mt-9 w-full">
                    <input
                      name="email"
                      placeholder="    Enter your email"
                      className="font-medium p-0 placeholder:text-gray-600 text-left h-[50px] rounded-[48px] text-lg w-full bg-white"
                      wrapClassName="sm:flex-1 rounded-[48px] sm:w-full"
                      type="email"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className="!text-white-A700 cursor-pointer font-semibold min-w-[142px] h-[50px] rounded-[28px] text-center text-lg bg-red-800"
                      size="lg"
                      variant="fill"
                      onClick={() => {
                        joinWaitlist(email);
                        closePopup();
                      }}
                    >
                      Join Now
                    </Button>
                  </div> */}
                  <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-9 w-full">
                    <input
                      name="email"
                      placeholder="Enter your email"
                      className="font-medium p-0 pl-2 placeholder:text-gray-600 text-left h-[50px] rounded-[48px] text-lg w-full bg-white"
                      wrapClassName="sm:flex-1 rounded-[48px] sm:w-full"
                      type="email"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className="!text-white-A700 cursor-pointer font-semibold min-w-[142px] h-[50px] rounded-[28px] text-center text-lg bg-red-800"
                      size="lg"
                      variant="fill"
                      onClick={() => {
                        joinWaitlist(email);
                        closePopup();
                      }}
                    >
                      Join Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {video && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="max-h-[97vh] h-screen w-screen sm:w-full md:w-full relative">
            <div className="bg-black-900 flex flex-col gap-2.5 justify-start p-5 rounded-[24px] h-screen w-screen">
              <Img
                className="absolute top-0 right-0 m-4 cursor-pointer"
                src="images/img_closecirclesvgrepocom.svg"
                alt="closecirclesvgr"
                onClick={closeVideo}
              />
              <iframe
                className="h-screen w-screen"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {scrolling ? (
        <div
          ref={myRef}
          id={sectionId}
          className="scrollTo container-snap flex flex-col items-center justify-start overflow-y-scroll h-screen w-screen"
        >
          <div
            id="store"
            className="flex flex-col h-screen items-center justify-start w-screen"
          >
            <div className="h-screen overflow-y-visible md:px-5 relative w-screen">
              <div className="h-screen overflow-y-visible m-auto w-screen">
                <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-screen"></div>
                <div className="absolute h-screen inset-y-[0] left-[0] my-auto w-[79%] md:w-screen">
                  <Img
                    className="h-screen m-auto object-cover w-screen"
                    src="images/img_rectangle119.png"
                    alt="rectangle119_Four"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[134px] h-screen md:h-auto justify-start left-[5%] top-[10%] w-[859px]">
                    <div className="flex flex-row justify-start items-start gap-[25px]">
                      <div className="h-[130px] relative w-[23%] -mt-[43px] md:w-screen">
                        <Img
                          className="absolute flex flex-row gap-[10px] items-start justify-between ml-[1%] mt:[110px] md:left-[44%] sm:left-[38%] my-auto w-[360px] h-[150px]"
                          src="images/img_logo.png"
                        />
                      </div>
                      <Text
                        className="sm:mt-0 sm:text-[34.26px] ml-[1%] md:text-[37.26px] mt-[1%] text-[32.26px] text-white-A700"
                        size="txtInterSemiBold3926"
                      >
                        Store App
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] -mt-[10px] top-[5%] ml-[65px] h-[770px] w-[93%] md:w-full">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-left text-5xl top-[1%] -mt-[120px] text-white-A700 h-[10px] w-full"
                        size="txtInterBold60"
                      >
                        <span className="text-red-A400 font-inter -mt-[1%] text-left h-[30px] font-bold">
                          Transform
                        </span>
                        <span className="text-white-A700 font-inter mt-[10vh] text-left font-bold">
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
                        <span className="text-white-A700 font-inter text-left font-bold">
                          {" "}
                        </span>
                      </Text>
                      <br /> <br />
                      <div className="flex flex-col items-start justify-start mt-[120px]">
                        <Text
                          className="text-2xl sm:text-[32px] md:text-[34px] mt-[5px] text-red-A400"
                          size="txtInterSemiBold36"
                        >
                          INVENTORY MANAGEMENT
                        </Text>
                        <Text
                          className="mt-7 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                          size="txtInterBold56"
                        >
                          Just Automate Your
                        </Text>
                        <Text
                          className="mt-1 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                          size="txtInterBold56"
                        >
                          Stock Control
                        </Text>
                        <Text
                          className="leading-[48.00px] mt-4 md:text-3xl sm:text-[28px] text-[28px] text-blue_gray-100_e5"
                          size="txtInterMedium32"
                        >
                          <>
                            <li>AI Powered Stock-In</li>
                            <li>Expiry & Stock Alerts</li>
                            <li>Scan based Auditing</li>
                          </>
                        </Text>
                      </div>
                      <Img
                        className="cursor-pointer h-[350px] w-[350px]  -mt-[130px]"
                        src="images/img_group22258.svg"
                        onClick={openPopup}
                        alt="group22258"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                src="images/homepage_consumer.png"
              />
            </div>
          </div>

          <div className="flex-none w-full h-screen md:w-full md:h-full">
            <div className="w-full h-screen p-5 relative">
              <div className="h-screen m-auto w-full">
                <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                  <Img
                    className="h-screen m-auto object-cover w-full"
                    src="images/img_rectangle119.png"
                    alt="rectangle119_One"
                  />
                  <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                    <Text
                      className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                        className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
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
                          <li>Digital Receipts</li>
                          <li>Mobile Checkout</li>
                          <li>Digital Displays</li>
                        </>
                      </Text>
                    </div>
                    <Img
                      className="cursor-pointer h-[550px] w-[450px]  -mt-[0px]"
                      src="images/img_group22258.svg"
                      onClick={openPopup}
                      alt="group22258"
                    />
                  </div>
                </div>
              </div>

              <Img
                className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                src="images/order_details.png"
              />
            </div>
          </div>

          <div className="flex-none w-full h-screen md:w-full md:h-full">
            <div className="w-full h-screen p-5 relative">
              <div className="h-screen m-auto w-full">
                <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                  <Img
                    className="h-screen m-auto object-cover w-full"
                    src="images/img_rectangle119.png"
                    alt="rectangle119_One"
                  />
                  <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                    <Text
                      className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                        VENDOR MANAGEMENT
                      </Text>
                      <Text
                        className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
                        size="txtInterBold56"
                      >
                        <>
                          Keep your Vendors
                          <br />
                          On-Track
                        </>
                      </Text>
                      <Text
                        className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                        size="txtInterMedium32"
                      >
                        <>
                          <li>Demand Forecasting</li>
                          <li>Supply & Payment Tracking</li>
                          <li>Performance Reports</li>
                        </>
                      </Text>
                    </div>
                    <Img
                      className="cursor-pointer h-[550px] w-[450px]  -mt-[0px]"
                      src="images/img_group22258.svg"
                      onClick={openPopup}
                      alt="group22258"
                    />
                  </div>
                </div>
              </div>

              <Img
                className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                src="images/vendor_management.png"
              />
            </div>
          </div>

          <div className="flex-none w-full h-screen md:w-full md:h-full">
            <div className="w-full h-screen p-5 relative">
              <div className="h-screen m-auto w-full">
                <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                  <Img
                    className="h-screen m-auto object-cover w-full"
                    src="images/img_rectangle119.png"
                    alt="rectangle119_One"
                  />
                  <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                    <Text
                      className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                        STORE ANALYTICS
                      </Text>
                      <Text
                        className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
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
                          <li>360º Store Analytics</li>
                          <li>Visual Reports</li>
                          <li>Predictive Analysis</li>
                        </>
                      </Text>
                    </div>
                    <Img
                      className="cursor-pointer h-[550px] w-[450px]  -mt-[0px]"
                      src="images/img_group22258.svg"
                      onClick={openPopup}
                      alt="group22258"
                    />
                  </div>
                </div>
              </div>

              <Img
                className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                src="images/homepage_store.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          id="store"
          className="flex flex-col h-screen items-center justify-start w-screen"
        >
          <div className="h-screen overflow-y-visible md:px-5 relative w-screen">
            <div className="h-screen overflow-y-visible m-auto w-screen">
              <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-screen"></div>
              <div className="absolute h-screen inset-y-[0] left-[0] my-auto w-[79%] md:w-screen">
                <Img
                  className="h-screen m-auto object-cover w-screen"
                  src="images/img_rectangle119.png"
                  alt="rectangle119_Four"
                />
                <div className="absolute flex flex-col md:gap-10 gap-[134px] h-screen md:h-auto justify-start left-[5%] top-[10%] w-[859px]">
                  <div className="flex flex-row justify-start items-start gap-[25px]">
                    <div className="h-[130px] relative w-[23%] -mt-[43px] md:w-screen">
                      <Img
                        className="absolute flex flex-row gap-[10px] items-start justify-between ml-[1%] mt:[110px] md:left-[44%] sm:left-[38%] my-auto w-[360px] h-[150px]"
                        src="images/img_logo.png"
                      />
                    </div>
                    <Text
                      className="sm:mt-0 sm:text-[34.26px] ml-[1%] md:text-[37.26px] mt-[1%] text-[32.26px] text-white-A700"
                      size="txtInterSemiBold3926"
                    >
                      Store App
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] -mt-[10px] top-[5%] ml-[65px] h-[770px] w-[93%] md:w-full">
                    <Text
                      className="leading-[76.00px] md:text-5xl text-left text-5xl top-[1%] -mt-[120px] text-white-A700 h-[10px] w-full"
                      size="txtInterBold60"
                    >
                      <span className="text-red-A400 font-inter -mt-[1%] text-left h-[30px] font-bold">
                        Transform
                      </span>
                      <span className="text-white-A700 font-inter mt-[10vh] text-left font-bold">
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
                      <span className="text-white-A700 font-inter text-left font-bold">
                        {" "}
                      </span>
                    </Text>
                    <br /> <br />
                    <div className="flex flex-col items-start justify-start mt-[120px]">
                      <Text
                        className="text-2xl sm:text-[32px] md:text-[34px] mt-[5px] text-red-A400"
                        size="txtInterSemiBold36"
                      >
                        INVENTORY MANAGEMENT
                      </Text>
                      <Text
                        className="mt-7 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                        size="txtInterBold56"
                      >
                        Just Automate Your
                      </Text>
                      <Text
                        className="mt-1 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                        size="txtInterBold56"
                      >
                        Stock Control
                      </Text>
                      <Text
                        className="leading-[48.00px] mt-4 md:text-3xl sm:text-[28px] text-[28px] text-blue_gray-100_e5"
                        size="txtInterMedium32"
                      >
                        <>
                          <li>AI Powered Stock-In</li>
                          <li>Expiry & Stock Alerts</li>
                          <li>Scan based Auditing</li>
                        </>
                      </Text>
                    </div>
                    <Img
                      className="cursor-pointer h-[350px] w-[350px]  -mt-[130px]"
                      src="images/img_group22258.svg"
                      onClick={openPopup}
                      alt="group22258"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
              src="images/homepage_consumer.png"
            />
          </div>
        </div>
      )}
    </div>
  );
}

const DesktopOnePage = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [video, setVideo] = React.useState(true);
  const [youtubeID] = React.useState("rDP1O5MepmQ");
  const [email, setEmail] = React.useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const closeVideo = () => {
    setVideo(false);
  };

  const joinWaitlist = () => {
    const uniqueId = 10544;
    // console.log(email, uniqueId);
    const apiUrl = `https://scankart.onrender.com/proxy/post?url=${encodeURIComponent(
      "https://api.getwaitlist.com/api/v1/signup"
    )}`;

    // Data to send in the request body
    const requestData = {
      email: email,
      waitlist_id: uniqueId,
    };

    // Send a POST request to the API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Allow-Access-Control-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful
          console.log("Joined the waitlist successfully!");
          alert("Joined the waitlist successfully!");
        } else {
          // Request failed
          console.error("Failed to join the waitlist.");
          alert("Failed to join the waitlist.");
        }
      })
      .catch((error) => {
        console.error("Error while joining the waitlist:", error);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="max-h-[97vh] h-[50%] w-[50%] sm:w-full md:w-full relative">
            <div className="bg-gradient_gray flex flex-col items-center justify-start p-3 md:px-5 rounded-[32px] w-full">
              <div className="bg-black-900 flex flex-col gap-2.5 justify-start p-5 rounded-[24px] w-full">
                <Img
                  className="absolute top-0 right-0 m-4 cursor-pointer"
                  src="images/img_closecirclesvgrepocom.svg"
                  alt="closecirclesvgr"
                  onClick={closePopup}
                />
                <div className="flex flex-col items-center justify-start mb-10 mx-auto w-[91%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-start w-[83%] md:w-full">
                    <Img
                      className="h-12 md:h-auto mb-[3px] object-cover w-12"
                      src="images/img_email1.svg"
                      alt="emailOne"
                    />
                    <Text className="font-semibold sm:mt-0 mt-[7px] text-3xl sm:text-[32px] md:text-[34px] text-white-A700">
                      <span className="text-white-A700 font-inter text-left">
                        Subscribe to
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        our
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        {" "}
                      </span>
                      <span className="text-red-A400 font-inter text-left">
                        Waitlist
                      </span>
                    </Text>
                  </div>
                  <Text className="font-medium leading-[28.00px] mt-3 text-blue_gray-100_a5 text-center text-lg w-[87%] sm:w-full">
                    <span className="text-blue_gray-100_a5 font-inter">
                      Join the Waitlist{" "}
                    </span>
                    <span className="text-blue_gray-100_a5 font-inter font-bold">
                      💌
                    </span>
                    <span className="text-blue_gray-100_a5 font-inter">
                      <>
                        {" "}
                        Now and Secure Your Chance to Be Among the Lucky Few
                        Who&#39;ll Unlock Exclusive Rewards and Gadgets at
                        Launch! 🎉💫
                      </>
                    </span>
                  </Text>
                  {/* <div className="flex sm:flex-col flex-row gap-[18px]  items-center justify-between mt-9 w-full">
                    <input
                      name="email"
                      placeholder="    Enter your email"
                      className="font-medium p-0 placeholder:text-gray-600 text-left h-[50px] rounded-[48px] text-lg w-full bg-white"
                      wrapClassName="sm:flex-1 rounded-[48px] sm:w-full"
                      type="email"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className="!text-white-A700 cursor-pointer font-semibold min-w-[142px] h-[50px] rounded-[28px] text-center text-lg bg-red-800"
                      size="lg"
                      variant="fill"
                      onClick={() => {
                        joinWaitlist(email);
                        closePopup();
                      }}
                    >
                      Join Now
                    </Button>
                  </div> */}
                  <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-9 w-full">
                    <input
                      name="email"
                      placeholder="Enter your email"
                      className="font-medium p-0 pl-2 placeholder:text-gray-600 text-left h-[50px] rounded-[48px] text-lg w-full bg-white"
                      wrapClassName="sm:flex-1 rounded-[48px] sm:w-full"
                      type="email"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      className="!text-white-A700 cursor-pointer font-semibold min-w-[142px] h-[50px] rounded-[28px] text-center text-lg bg-red-800"
                      size="lg"
                      variant="fill"
                      onClick={() => {
                        joinWaitlist(email);
                        closePopup();
                      }}
                    >
                      Join Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      

      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto overflow-hidden w-screen">
        <div
          id="hero"
          className="flex flex-col items-center justify-start w-full h-full"
        >
          <div className="bg-black-900 flex flex-col items-center justify-start pt-12 w-full h-screen">
            <div className="flex flex-col items-center justify-start w-full">
              <header className="flex md:flex-col flex-row md:gap-5 md:px-5 sm:-mt-400 w-full">
                <div className="h-[59px] relative w-[24%] md:w-full">
                  <Img
                    className="absolute flex flex-row gap-[34px] inset-y-[0] left-[17%] md:left-[44%] sm:left-[38%] my-auto w-[830px] h-[250px]"
                    src="images/img_logo.png"
                  />
                </div>
                <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[42px] sm:hidden justify-end md:ml-[0] mt-[2%] ml-[596px] pl-2.5 w-full sm:w-full common-row-list">
                  <li>
                    <a href="#store" className="text-gray-400 text-lg">
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
                    <a href="#contact">
                      <Button className="bg-red-800 cursor-pointer font-medium -mt-[10px] px-[15px] py-[5px] rounded-[46px] text-center text-gray-100 text-xl">
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
                  <Button
                    className="bg-gradient cursor-pointer font-semibold mt-[42px] py-[25px] rounded-[40px] text-2xl md:text-[22px] text-center text-gray-100 sm:text-xl w-[400px]"
                    onClick={openPopup}
                  >
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
          {/* <div className="container-snap flex flex-col items-center justify-start overflow-visible transform -rotate-90 h-screen w-screen"> */}
          {/* <div className="flex-none w-full overflow-y-scroll flex-shrink-0 md:w-full md:h-full"> */}
          <ScrollToCenterSection sectionId="store" />

          {/* <div
            id="store"
            className="container-snap flex flex-col items-center justify-start overflow-y-scroll h-screen w-screen"
          >
            <div
              id="store"
              className="flex flex-col h-screen items-center justify-start w-screen"
            >
              <div className="h-screen overflow-y-visible md:px-5 relative w-screen">
                <div className="h-screen overflow-y-visible m-auto w-screen">
                  <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-screen"></div>
                  <div className="absolute h-screen inset-y-[0] left-[0] my-auto w-[79%] md:w-screen">
                    <Img
                      className="h-screen m-auto object-cover w-screen"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_Four"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[134px] h-screen md:h-auto justify-start left-[5%] top-[10%] w-[859px]">
                      <div className="flex flex-row justify-start items-start gap-[25px]">
                        <div className="h-[130px] relative w-[23%] -mt-[43px] md:w-screen">
                          <Img
                            className="absolute flex flex-row gap-[10px] items-start justify-between ml-[1%] mt:[110px] md:left-[44%] sm:left-[38%] my-auto w-[360px] h-[150px]"
                            src="images/img_logo.png"
                          />
                        </div>
                        <Text
                          className="sm:mt-0 sm:text-[34.26px] ml-[1%] md:text-[37.26px] mt-[1%] text-[32.26px] text-white-A700"
                          size="txtInterSemiBold3926"
                        >
                          Store App
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] -mt-[10px] top-[5%] ml-[65px] h-[770px] w-[93%] md:w-full">
                        <Text
                          className="leading-[76.00px] md:text-5xl text-left text-5xl top-[1%] -mt-[120px] text-white-A700 h-[10px] w-full"
                          size="txtInterBold60"
                        >
                          <span className="text-red-A400 font-inter -mt-[1%] text-left h-[30px] font-bold">
                            Transform
                          </span>
                          <span className="text-white-A700 font-inter mt-[10vh] text-left font-bold">
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
                          <span className="text-white-A700 font-inter text-left font-bold">
                            {" "}
                          </span>
                        </Text>
                        <br /> <br />
                        <div className="flex flex-col items-start justify-start mt-[120px]">
                          <Text
                            className="text-2xl sm:text-[32px] md:text-[34px] mt-[5px] text-red-A400"
                            size="txtInterSemiBold36"
                          >
                            INVENTORY MANAGEMENT
                          </Text>
                          <Text
                            className="mt-7 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                            size="txtInterBold56"
                          >
                            Just Automate Your
                          </Text>
                          <Text
                            className="mt-1 md:text-5xl sm:text-[42px] text-[35px] text-white-A700"
                            size="txtInterBold56"
                          >
                            Stock Control
                          </Text>
                          <Text
                            className="leading-[48.00px] mt-4 md:text-3xl sm:text-[28px] text-[28px] text-blue_gray-100_e5"
                            size="txtInterMedium32"
                          >
                            <>
                              <li>AI Powered Stock-In</li>
                              <li>Expiry & Stock Alerts</li>
                              <li>Scan based Auditing</li>
                            </>
                          </Text>
                        </div>
                        <Img
                          className="h-[350px] w-[350px]  -mt-[130px]"
                          src="images/img_group22258.svg"
                          alt="group22258"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                  src="images/homepage_consumer.png"
                />
              </div>
            </div>

            <div className="flex-none w-full h-screen md:w-full md:h-full">
              <div className="w-full h-screen p-5 relative">
                <div className="h-screen m-auto w-full">
                  <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-screen m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_One"
                    />
                    <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                          className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
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
                            <li>Digital Receipts</li>
                            <li>Mobile Checkout</li>
                            <li>Digital Displays</li>
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[550px] w-[450px]  -mt-[0px]"
                        src="images/img_group22258.svg"
                        alt="group22258"
                      />
                    </div>
                  </div>
                </div>

                <Img
                  className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                  src="images/order_details.png"
                />
              </div>
            </div>

            <div className="flex-none w-full h-screen md:w-full md:h-full">
              <div className="w-full h-screen p-5 relative">
                <div className="h-screen m-auto w-full">
                  <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-screen m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_One"
                    />
                    <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                          VENDOR MANAGEMENT
                        </Text>
                        <Text
                          className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
                          size="txtInterBold56"
                        >
                          <>
                            Keep your Vendors
                            <br />
                            On-Track
                          </>
                        </Text>
                        <Text
                          className="leading-[48.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                          size="txtInterMedium32"
                        >
                          <>
                            <li>Demand Forecasting</li>
                            <li>Supply & Payment Tracking</li>
                            <li>Performance Reports</li>
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[550px] w-[450px]  -mt-[0px]"
                        src="images/img_group22258.svg"
                        alt="group22258"
                      />
                    </div>
                  </div>
                </div>

                <Img
                  className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                  src="images/vendor_management.png"
                />
              </div>
            </div>

            <div className="flex-none w-full h-screen md:w-full md:h-full">
              <div className="w-full h-screen p-5 relative">
                <div className="h-screen m-auto w-full">
                  <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-[22%]"></div>
                  <div className="absolute h-screen left-[0] inset-y-[0] my-auto w-[79%] md:w-full">
                    <Img
                      className="h-screen m-auto object-cover w-full"
                      src="images/img_rectangle119.png"
                      alt="rectangle119_One"
                    />
                    <div className="absolute flex flex-col inset-y-[0] items-start justify-start left-[11%] my-auto w-[70%]">
                      <Text
                        className="leading-[76.00px] md:text-5xl text-5xl text-white-A700"
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
                          STORE ANALYTICS
                        </Text>
                        <Text
                          className="leading-[64.00px] md:text-5xl sm:text-[42px] text-5xl text-white-A700 w-full"
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
                            <li>360º Store Analytics</li>
                            <li>Visual Reports</li>
                            <li>Predictive Analysis</li>
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[550px] w-[450px]  -mt-[0px]"
                        src="images/img_group22258.svg"
                        alt="group22258"
                      />
                    </div>
                  </div>
                </div>

                <Img
                  className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
                  src="images/homepage_store.png"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div
          id="consumer"
          className="flex flex-col h-screen items-center justify-start w-screen"
        >
          <div className="h-screen overflow-y-visible md:px-5 relative w-screen">
            <div className="h-screen overflow-y-visible m-auto w-screen">
              <div className="absolute bg-red-800 h-screen inset-y-[0] my-auto right-[0] w-screen"></div>
              <div className="absolute h-screen inset-y-[0] left-[0] my-auto w-[79%] md:w-screen">
                <Img
                  className="h-screen m-auto object-cover w-screen"
                  src="images/img_rectangle119.png"
                  alt="rectangle119_Four"
                />
                <div className="absolute flex flex-col md:gap-10 gap-[134px] h-screen md:h-auto justify-start left-[5%] top-[10%] w-[859px]">
                  <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start md:w-screen">
                    <div className="h-[130px] relative w-[23%] -mt-[43px] md:w-screen">
                      <Img
                        className="absolute flex flex-row gap-[10px] items-start justify-between ml-[1%] mt:[110px] md:left-[44%] sm:left-[38%] my-auto w-[360px] h-[150px]"
                        src="images/img_logo.png"
                      />
                    </div>
                    <Text
                      className="sm:mt-0 sm:text-[34.26px] ml-[1%] md:text-[37.26px] mt-[1%] text-[32.26px] text-white-A700"
                      size="txtInterSemiBold3926"
                    >
                      Consumer App
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] -mt-[10px] top-[5%] ml-[65px] h-[770px] w-[93%] md:w-screen">
                    <Text
                      className="leading-[76.00px] md:text-5xl text-left text-5xl top-[1%] -mt-[120px] text-white-A700 h-[10px] w-screen"
                      size="txtInterBold60"
                    >
                      <span className="text-red-A400 font-inter mt-[1%] text-left h-[50px] font-bold">
                        Transform
                      </span>
                      <span className="text-white-A700 font-inter mt-[10vh] text-left font-bold">
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
                    <br /> <br />
                    <div className="flex flex-col items-start justify-start mt-[120px]">
                      <Text
                        className="text-3xl sm:text-[32px] md:text-[34px] mt-[30px] text-red-A400"
                        size="txtInterSemiBold36"
                      >
                        INSTANT CHECKOUT
                      </Text>
                      <Text
                        className="mt-7 md:text-5xl sm:text-[42px] text-[46px] text-white-A700"
                        size="txtInterBold56"
                      >
                        Scan, Compare & Buy
                      </Text>
                      <Text
                        className="leading-[48.00px] mt-4 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_e5"
                        size="txtInterMedium32"
                      >
                        <>
                          <li>AI Shopping Mate (SKAI)</li>
                          <li>Onboard Stores & Earn</li>
                          <li>Compare Best Prices</li>
                        </>
                      </Text>
                    </div>
                    <Img
                      className="cursor-pointer h-[350px] w-[350px]  -mt-[110px]"
                      src="images/img_group22258.svg"
                      onClick={openPopup}
                      alt="group22258"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[90%] inset-y-[0] right-[8%] my-auto w-[25%] md:w-[25%] md:h-[740px]"
              src="images/homepage_consumer.png"
            />
          </div>
        </div>
        {/* </div> */}
        {/* Payment */}
        <div
          id="pricing"
          className="flex flex-col items-start justify-start max-w-[1951px] mt-[103px] mx-auto md:px-5 w-full"
        >
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
                    {/* <div className="flex flex-col gap-[25px] items-center justify-start mt-[26px] w-[64%] md:w-full"> */}
                    <Text
                      className="mt-[26px] text-base text-center text-gray-900"
                      size="txtInterMedium16Gray900"
                    >
                      *LIMITED PERIOD OFFER
                    </Text>
                    <Img
                      className="h-[186px] md:h-auto mt-[25px] object-cover w-[186px]"
                      src="images/img_qrcode32.png"
                      alt="qrcodeThirtyTwo"
                    />
                    {/* </div> */}
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
        <div
          id="contact"
          className="h-[678px] md:h-[717px] mt-[77px] md:px-5 relative w-full"
        >
          <footer className="absolute bg-black-900 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto shadow-bs w-full">
            <div className="flex flex-col items-center justify-center mb-[42px] mt-[72px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[86%] md:w-full">
                  <div className="flex flex-col gap-[51px] items-start justify-start w-[49%] md:w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[29%] md:w-full">
                      <div className="h-[109px] -mt-[10px] relative w-[95%] md:w-full">
                        <Img
                          className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-end justify-between  md:left-[44%] sm:left-[38%] my-auto w-[1000px] h-[260px]"
                          src="images/img_logo.png"
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
