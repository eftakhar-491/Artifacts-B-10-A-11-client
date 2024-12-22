import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from "../../assets/lottie/profile.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Firebase/AuthProvider";
export default function Nav() {
  const [pro, setPro] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, logOut, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  function handelLogout() {
    logOut()
      .then(() => console.log("Logged Out"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }
  return (
    <>
      <nav className="font-Cinzel text-white">
        <div className="relative w-11/12 lg:w-4/5 mx-auto flex justify-between items-center py-4">
          {/* menu icon */}

          <h1 className="font-bold text-[14px] flex items-center gap-1 lg:text-2xl">
            <span onClick={() => setMenu((p) => !p)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 md:hidden cursor-pointer rounded-full hover:scale-105 active:scale-95 p-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </span>
            Chrono
            <span className="text-xl lg:text-3xl">Craft</span>
          </h1>
          <ul
            className={`${
              menu ? "block" : "hidden"
            } backdrop-blur-lg md:backdrop-blur-none bg-[#101A1Cf5] md:bg-transparent font-semibold absolute z-50 rounded-lg md:rounded-none md:top-0 top-14 border-2 md:border-0 p-3 md:p-0 md:relative md:flex md:space-x-5 text-sm`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-500"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/artifacts"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-400"
              }
            >
              <li>All Artifacts</li>
            </NavLink>
            <NavLink
              to="/add-artifact"
              className={({ isActive }) =>
                isActive ? "underline font-extrabold" : "text-gray-400"
              }
            >
              <li>Add Artifact</li>
            </NavLink>
          </ul>
          <div className="flex items-center gap-3">
            {user ? (
              <button
                onClick={handelLogout}
                className="hidden md:block font-semibold border-2 px-3 py-1 rounded-lg "
              >
                Logout
              </button>
            ) : (
              <Link className="hidden md:block" to="/login">
                <button className="font-semibold border-2 px-3 py-1 rounded-lg ">
                  Login
                </button>
              </Link>
            )}

            <div className="relative w-10 h-10 rounded-full">
              <div
                onClick={() => setPro((p) => !p)}
                className="border-2 active:scale-95 cursor-pointer w-full h-full bg-white rounded-full flex items-center justify-center"
              >
                {user ? (
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <Lottie animationData={profile} loop={true} />
                )}
              </div>
              <div
                className={`${
                  pro ? "block" : "hidden"
                } backdrop-blur-sm bg-[#101A1Cf5] z-50 absolute top-14 right-0 w-44 text-white shadow-md rounded-lg p-3 border-2 border-gray-200 `}
              >
                <ul className=" flex flex-col space-y-2">
                  <NavLink
                    to="/my-artifacts"
                    className={({ isActive }) =>
                      isActive ? "underline font-extrabold" : ""
                    }
                  >
                    <li className=" flex-shrink-0">My Artifacts</li>
                  </NavLink>
                  <NavLink
                    to="/liked-artifacts"
                    className={({ isActive }) =>
                      isActive ? "underline font-extrabold" : ""
                    }
                  >
                    <li className=" flex-shrink-0">Liked Artifacts</li>
                  </NavLink>
                  {user ? (
                    <button
                      onClick={handelLogout}
                      className="md:hidden font-semibold border-2 px-3 py-1 rounded-lg "
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="md:hidden font-semibold border-2 px-3 py-1 rounded-lg "
                    >
                      LogIn
                    </button>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
