import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import image from "../../assets/home.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {/* <div className="mt-3 p-5 bg-warning rounded-4 text-white row">
        <div className="col-md-6">
          <h2>{`Welcome ${userData.firstName}`} </h2>
          <p>
            This is a welcoming screen for the entry of the application , you
            can now see the options
          </p>
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-end">
            <img src={image} className="w-25" alt="" srcset="" />
          </div>
        </div>
      </div> */}

      <div
        className="mt-3 p-5  rounded-4 d-flex justify-content-between align-items-center  "
        style={{ background: "rgba(255, 193, 7, 0.2)" }}
      >
        <div>
          <h2>
            Find the <span className=" text-warning">Users</span>{" "}
          </h2>
          <p>
            you can now fill the meals easily using the table and form , <br />
            click here and sill it with the table !
          </p>
        </div>

        <div>
          <button
            className="btn btn-warning px-5 text-white"
            onClick={() => {
              navigate("/home/userList");
            }}
          >
            Fill Users <i className="fa-solid fa-arrow-right ms-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
