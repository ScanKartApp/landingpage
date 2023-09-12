import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "../../components";

const Popup = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[47%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gradient2  flex flex-col items-center justify-start p-3 md:px-5 rounded-[32px] w-full">
          <div className="bg-black-900 flex flex-col gap-2.5 justify-start p-5 rounded-[24px] w-full">
            <Img
              className="h-[30px] md:ml-[0] ml-[570px] w-[30px]"
              src="images/img_closecirclesvgrepocom.svg"
              alt="closecirclesvgr"
            />
            <div className="flex flex-col items-center justify-start mb-10 mx-auto w-[91%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[18px] items-end justify-start w-[83%] md:w-full">
                <Img
                  className="h-12 md:h-auto mb-[3px] object-cover w-12"
                  src="images/img_email1.png"
                  alt="emailOne"
                />
                <Text className="font-semibold sm:mt-0 mt-[7px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700">
                  <span className="text-white-A700 font-inter text-left">
                    Subscribe
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
                    Who&#39;ll Unlock Exclusive Rewards and Gadgets at Launch!
                    🎉💫
                  </>
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-9 w-full">
                <Input
                  name="email"
                  placeholder="Enter your email"
                  className="font-medium p-0 placeholder:text-gray-600 text-left text-lg w-full"
                  wrapClassName="sm:flex-1 rounded-[28px] sm:w-full"
                  type="email"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                ></Input>
                <Button
                  className="!text-white-A700 cursor-pointer font-semibold min-w-[142px] rounded-[28px] text-center text-lg"
                  color="red_800"
                  size="lg"
                  variant="fill"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export { Popup };
