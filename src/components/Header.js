import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  console.log(user);
  console.log(user?.email);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("venkatesh");
      })
      .catch((error) => {
        // An error happened.
      });

    console.log("venkatesh");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        console.log(user);

        const { uid, email } = user;
        console.log(uid, email);
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        navigate("/");
        dispatch(removeUser());
        console.log("venkatesh");
      }
    });
  }, [dispatch, navigate]);
  return (
    <div className="flex justify-between absolute z-10">
      <div>
        <img
          src={
            "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          }
          alt="logo"
          className="sm:w-44 w-36 sm:mx-14 mx-0   "
        />
      </div>
      {user?.email && (
        <div>
          <button
            className="p-2 m-2 bg-red-600 text-white ml-[1300px]"
            onClick={handleSignout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
