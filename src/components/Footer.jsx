import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="flex items-center justify-center bg-gray-50 px-[95px] py-8">
      <div className="w-[500px]">
        <div className="flex items-center justify-center gap-x-6">
          <FaFacebook className="text-[24px]" />

          <FaInstagram className="text-[24px]" />

          <FaYoutube className="text-[24px]" />

          <FaXTwitter className="text-[24px]" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 text-lg font-bold text-gray-900 my-9">
          <h1>Condition of Use</h1>
          <h1>Privicy & Policy</h1>
          <h1>Press Room</h1>
        </div>

          <h1 className="text-lg text-gray-500 text-center font-bold">&#9400; 2023 MovieBox by t0mi</h1>
      </div>
    </section>
  );
}
