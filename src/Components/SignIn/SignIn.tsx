import { useForm } from "react-hook-form";
import styles from "./SignIn.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function SignIn() {
  let { saveDate } = useContext(AuthContext);

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", data);
      // console.log(response);
      localStorage.setItem("userToken", response.data.token);
      saveDate();
      toast.success("Login Successful!");

      navigate("/home/userList");
    } catch (error) {
      toast.error("Login Failed!");
      console.log(error);
    }
  };

  return (
    <div className={`${styles.authContainer} vh-100 container-fluid `}>
      <div className="row justify-content-center align-content-center h-100 ">
        <div className="col-lg-4 col-md-6 bg-white p-5 rounded-4 ">
          <h4 className={`${styles.title} mb-3`}>User Management System</h4>
          <div className="text-center">
            <h5>Sign In</h5>
            <span className="text-muted">
              Enter your credentials to access your account
            </span>
          </div>

          <form className=" my-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-muted"
              >
                userName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=" userName"
                {...register("username", {
                  required: "userName is required",
                })}
              />
            </div>
            {errors.username && (
              <p className=" alert alert-danger p-2">
                {errors?.username?.message}
              </p>
            )}

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-muted"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                aria-describedby="emailHelp"
                placeholder="Enter your password"
                {...register("password", {
                  required: "password is required",
                })}
              />
            </div>
            {errors.password && (
              <p className=" alert alert-danger p-2">
                {errors?.password?.message}
              </p>
            )}
            <button
              type="submit"
              className="btn w-100 btn-warning text-white rounded-3"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
