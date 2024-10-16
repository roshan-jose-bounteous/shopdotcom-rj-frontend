import React from "react";
import Typography from "../common/Typography";
import EmailIcon from "../../../public/assets/icons/EmailIcon";
import Button from "../common/Button";
import Link from "next/link";
import Twitter from "../../../public/assets/icons/Twitter";
import Facebook from "../../../public/assets/icons/Facebook";
import Insta from "../../../public/assets/icons/Insta";
import Github from "../../../public/assets/icons/Github";
import Visa from "../../../public/assets/icons/Visa";
import Mastercard from "../../../public/assets/icons/Mastercard";
import Paypal from "../../../public/assets/icons/Paypal";
import Applepay from "../../../public/assets/icons/Applepay";
import Googlepay from "../../../public/assets/icons/Googlepay";

const Footer = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="mx-4 md:mx-6 lg:mx-28">
        <div className="bg-black flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-20 p-10 rounded-3xl">
          <div className="w-full lg:w-1/2">
            <Typography
              variant="p"
              className="font-bungee text-3xl lg:text-4xl text-white"
              text="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
            />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-4/5 lg:w-2/6">
            <div className="flex  items-center bg-white justify-start gap-1 pl-4 py-2  font-albertsans border rounded-3xl focus-within:ring-2 focus-within:ring-gray-300">
              <EmailIcon />
              <input
                type="text"
                className="bg-white text-[#F0F0F0] text-sm outline-none ml-2 w-4/5"
                placeholder="Enter your email address"
              />
            </div>
            <Button
              variant="Newsletter"
              className=""
              text="Subscribe to Newsletter"
            />
          </div>
        </div>

        <div className="border-b border-black py-10 flex flex-col lg:flex-row gap-10 justify-start ">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-4 w-full lg:w-1/4">
            <Link href="/shop">
              <Typography
                variant="h1"
                className="font-bungee text-2xl"
                text="SHOP.CO"
              />
            </Link>
            <Typography
              variant="p"
              className="text-sm text-black text-opacity-60 font-albertsans"
              text="We have clothes that suits your style and which you’re proud to wear. All wears from men to women."
            />
            <div className="flex flex-row items-center justify-start gap-4">
              <Twitter />
              <Facebook />
              <Insta />
              <Github />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-start w-full">
            <div className="flex flex-row gap-10 w-full  md:w-1/2 justify-start md:justify-around pr-12 md:pr-0 ">
              <div className="flex flex-col gap-3 w-1/2 md:w-full md:gap-4 lg:gap-5">
                <Typography
                  variant="p"
                  text="COMPANY"
                  className="font-medium  font-albertsans "
                />
                <Typography
                  variant="p"
                  text="About"
                  className="font-albertsans text-black text-opacity-60 text-sm pt-0 lg:pt-2"
                />
                <Typography
                  variant="p"
                  text="Features"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Works"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Career"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
              </div>
              <div className="flex flex-col gap-3 w-1/2 md:w-full md:gap-4 lg:gap-5">
                <Typography
                  variant="p"
                  text="HELP"
                  className="font-medium  font-albertsans "
                />
                <Typography
                  variant="p"
                  text="Customer Support"
                  className="font-albertsans text-black text-opacity-60 text-sm pt-0 lg:pt-2"
                />
                <Typography
                  variant="p"
                  text="Delivery Details"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Terms & Conditions"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Privacy Policy"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 w-full  md:w-1/2 justify-start md:justify-around pr-12 md:pr-0">
              <div className="flex flex-col gap-3 w-1/2 md:w-full md:gap-4 lg:gap-5">
                <Typography
                  variant="p"
                  text="FAQ"
                  className="font-medium  font-albertsans "
                />
                <Typography
                  variant="p"
                  text="Account"
                  className="font-albertsans text-black text-opacity-60 text-sm pt-0 lg:pt-2"
                />
                <Typography
                  variant="p"
                  text="Manage Deliveries"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Orders"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Payments"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
              </div>
              <div className="flex flex-col gap-3 w-1/2 md:w-full md:gap-4 lg:gap-5">
                <Typography
                  variant="p"
                  text="RESOURCES"
                  className="font-medium  font-albertsans "
                />
                <Typography
                  variant="p"
                  text="Free eBooks"
                  className="font-albertsans text-black text-opacity-60 text-sm pt-0 lg:pt-2"
                />
                <Typography
                  variant="p"
                  text="Development Tutorial"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="How to Blog"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
                <Typography
                  variant="p"
                  text="Youtube Playlist"
                  className="font-albertsans text-black text-opacity-60 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col md:flex-row w-full justify-between items-center">
          <Typography
            variant="p"
            text="© 2000-2021, All rights reserved"
            className="text-opacity-40 font-albertsans text-sm"
          />
          <div className="flex flex-row gap-0 md:gap-1 items-center">
            <Visa />
            <Mastercard />
            <Paypal />
            <Applepay />
            <Googlepay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
