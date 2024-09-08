import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/UserSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { HeaderIconUrl } from "../utils/constants";

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
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unSubscribe;
  }, [dispatch, navigate]);
  return (
    <div className="flex  justify-between w-full  absolute z-20  ">
      <div>
        <img
          src={HeaderIconUrl}
          alt="logo"
          className="sm:w-44 w-36 sm:mx-14 mx-0   "
        />
      </div>
      {user?.email && (
        <div>
          <button
            className="sm:p-2 p-1 sm:m-2 m-0 bg-red-600 text-white rounded-lg "
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
