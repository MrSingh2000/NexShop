import React from "react";
import { useSelector } from "react-redux";
import {
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandMongodb,
} from "react-icons/tb";
import {FaCloudDownloadAlt} from 'react-icons/fa';
import {
  SlSocialInstagram,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-pink-300 via-pink-500 to-pink-700 min-h-screen text-white">
      <div className="bg-white p-6 shadow-md mt-3 rounded-2xl">
        <Image
          src="/assets/logo.png"
          alt="Team Member"
          className="rounded-lg"
          height={115}
          width={115}
          layout="fixed"
        />
      </div>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-semibold mb-8">About NexShop</h1>
        <p className="text-gray-300 text-lg mb-12">
          Your Ultimate Destination for Premium Shopping Experience
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-8">
          At NexShop, we are committed to delivering the best products and
          exceptional service to our customers.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
        <ul className="list-disc list-inside text-gray-300 mb-12">
          <li className="flex gap-2 items-center">
            <TbBrandNextjs size={40} color="#FAFAFA" />
            <p>Next.js for dynamic web applications</p>
          </li>
          <li className="flex gap-2 items-center">
            <TbBrandRedux size={40} color="#AE7AFD" />
            <p>Redux for state management</p>
          </li>
          <li className="flex gap-2 items-center">
            <FaCloudDownloadAlt size={40} color="#598ED8" />
            <p>Cloudinary Storage for images</p>
          </li>
          <li className="flex gap-2 items-center">
            <TbBrandMongodb size={40} color="#4BDF46" />
            <p>MongoDB for database</p>
          </li>
          {/* Add more technologies */}
        </ul>
        <div>
          <div>Contact us</div>
          <div>
            <ul className="flex gap-14 mt-4">
              <a
                href="https://www.instagram.com/mr_singh2000"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <li className="flex gap-2 items-center w-fit">
                  <SlSocialInstagram size={40} color="#FAFAFA" />
                  <p>Instagram</p>
                </li>
              </a>

              <a
                href="https://github.com/MrSingh2000/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <li className="flex gap-2 items-center w-fit">
                  <SlSocialGithub size={40} color="#FAFAFA" />
                  <p>Github</p>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/anshuman-singh-856991201/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <li className="flex gap-2 items-center w-fit">
                  <SlSocialLinkedin size={40} color="#FAFAFA" />
                  <p>LinkdedIn</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
