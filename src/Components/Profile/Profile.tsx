import React, { useContext } from "react";
import AuthContextProdivder, { AuthContext } from "../../Context/AuthContext";

export default function Profile() {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  return (
    <div>
      <div className="m-3">
        <h3 className=" fw-bold  border-bottom pb-3">Profile</h3>
      </div>

      <div
        className={` mx-auto my-5 shadow p-2 rounded-4 `}
        style={{ width: "90%" }}
      >
        <div className="text-center">
          <img src={userData?.image} alt="" />
        </div>

        <div>
          <div className="row  pb-5 mt-5 m-auto" style={{ width: "95%" }}>
            <div className="col-md-6  ">
              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1  "
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={userData.firstName}
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1   "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={userData.lastName}
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="mb-4">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1   "
                >
                  Email
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={userData.email}
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1   "
                >
                  Age
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="22"
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1   "
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={userData.iat}
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label ps-1   "
                >
                  birth Date
                </label>
                <input
                  type="text"
                  className="form-control fw-bold"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="06/9/2022"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
