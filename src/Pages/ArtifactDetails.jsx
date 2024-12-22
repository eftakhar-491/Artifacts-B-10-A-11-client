import React from "react";
import world from "../assets/lottie/world.json";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../components/Header/Nav";

export default function ArtifactDetails() {
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${bg})` }}
        className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={world} loop={true}></Lottie>
        </div>
        <div className="fixed overflow-y-auto w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />
          <section>
            <h1 className="text-2xl font-bold text-gray-200 font-Cinzel text-center mt-6">
              Artifacts Details
            </h1>
            <div className=" w-11/12 lg:w-4/5 mx-auto mt-4 relative space-y-4 border border-b-0 p-5 rounded-lg">
              <div className="w-full lg:w-3/4 rounded-xl shadow-2xl">
                <img
                  className="w-full rounded-xl"
                  src="https://i.natgeofe.com/n/81221cd1-b9e0-455d-8aea-fab946c68678/03-bronze-age-warrior-toolkit.jpg"
                  alt=""
                />
              </div>
              <div className=" lg:absolute top-28 lg:py-10 text-white right-6 lg:w-[550px] lg:bg-[#3FAEBB]/10 lg:backdrop-blur-lg bg-opacity-70 p-4 rounded-xl">
                <p className="font-Roboto mb-4">
                  Artifacts Type:
                  <span className="ml-2 bg-green-700/30 font-Cinzel border border-green-700 px-3 py-[2px] rounded-2xl">
                    Tools
                  </span>
                </p>
                <hr />
                <h1 className="text-gray-300 mt-4 font-Cinzel text-xl font-bold">
                  Artifacts Name : <br />
                  <span className="text-sm font-Roboto">
                    Sad asdf sdagds agksd fnk
                  </span>
                </h1>
                <hr />
                <p className="text-gray-300 mt-4 font-Cinzel text-xl font-bold">
                  present location : <br />
                  <span className="text-sm font-Roboto">
                    Sad asdf sdagdsagksdfnk
                  </span>
                </p>
                <hr />
                <p className="text-gray-300 mt-4 font-Cinzel text-xl font-bold">
                  Artifact Context : <br />
                  <span className="text-sm font-Roboto">
                    Sad asdf sdagdsagksdfnk
                  </span>
                </p>
                <hr />
                <p className="mt-4 text-gray-300 font-Cinzel text-xl flex items-center font-bold">
                  Created At :
                  <span className="text-sm font-Roboto ml-3 ">122/5/2002</span>
                </p>
                <hr />
                <p className="mt-4 text-gray-300 font-Cinzel text-xl flex items-center font-bold">
                  Discovered At :
                  <span className="text-sm font-Roboto ml-3 ">122/5/2002</span>
                </p>
                <hr />
                <p className="mt-4 text-gray-300 font-Cinzel text-xl flex items-center font-bold">
                  Discovered By : <br />
                  <span className="text-sm font-Roboto ml-3 ">asdfsad2</span>
                </p>
                <hr />

                <div className="mt-4 flex gap-2 font-Cinzel">
                  Liked_{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}