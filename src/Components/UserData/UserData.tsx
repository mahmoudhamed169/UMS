import React, { useContext, useEffect } from "react";
import styles from "./UserDate.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function UserData() {
  let navigate = useNavigate();
  const location = useLocation();
  let { userToUpdate } = useContext(AuthContext);
  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (
      location.state &&
      location.state.operationType === "update" &&
      userToUpdate
    ) {
      setValue("firstName", userToUpdate.firstName);
      setValue("lastName", userToUpdate.lastName);
      setValue("email", userToUpdate.email);
      setValue("age", userToUpdate.age);
      setValue("phone", userToUpdate.phone);
      setValue("birthDate", formatDate(userToUpdate.birthDate));
    }
  }, [location.state, userToUpdate, setValue]);

  const formatDate = (dateString) => {
    const dateParts = dateString.split("-");
    const formattedDate = dateParts
      .map((part, index) => (index === 1 ? part.padStart(2, "0") : part))
      .join("-");
    return formattedDate;
  };

  const onSubmit = async (data) => {
    try {
      if (location.state && location.state.operationType === "update") {
        // Update existing user
        let response = await axios.put(
          `https://dummyjson.com/users/${userToUpdate.id}`,
          data
        );
        toast.success("User Updated Successfully");
      } else {
        // Add new user
        let response = await axios.post(
          "https://dummyjson.com/users/add",
          data
        );
        toast.success("User Added Successfully");
      }
      navigate("/home/userList");
    } catch (error) {
      console.log(error);
      toast.error("Operation Failed");
    }
  };

  return (
    <div>
      <div className="title p-3 my-2 border-bottom ">
        <h3>
          {location.state && location.state.operationType === "update"
            ? "Update User"
            : "Add User"}
        </h3>
      </div>
      <div className={`${styles.formContainer} mt-5 shadow p-2 rounded-4 `}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 mb-1 p-4">
            <div className="row ">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your First Name"
                    {...register("firstName", {
                      required: "first Name is required",
                    })}
                  />
                </div>
                {errors.firstName && (
                  <p className=" alert alert-danger p-2">
                    {errors?.firstName?.message}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label  ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                </div>
                {errors.lastName && (
                  <p className=" alert alert-danger p-2">
                    {errors?.lastName?.message}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label  ">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: "email is required",
                    })}
                  />
                </div>
                {errors.email && (
                  <p className=" alert alert-danger p-2">
                    {errors?.email?.message}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label  ">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Age"
                    {...register("age", {
                      required: "age is required",
                    })}
                  />
                </div>
                {errors.age && (
                  <p className=" alert alert-danger p-2">
                    {errors?.age?.message}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label  ">
                    Phone Number
                  </label>
                  <input
                    type="tele"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Phone Number"
                    {...register("phone", {
                      required: "phone is required",
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className=" alert alert-danger p-2">
                    {errors?.phone?.message}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label  ">
                    birth Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your birth Date"
                    {...register("birthDate", {
                      required: "Birth Date is required",
                    })}
                  />
                </div>
                {errors.birthDate && (
                  <p className=" alert alert-danger p-2">
                    {errors?.birthDate?.message}
                  </p>
                )}
              </div>

              <div className="text-center my-3 ">
                <button className="btn btn-warning w-50 text-white">
                  {location.state && location.state.operationType === "update"
                    ? "Update"
                    : "Save"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
