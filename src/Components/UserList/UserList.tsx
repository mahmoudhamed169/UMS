import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

export default function UserList() {
  let { setUsertoUpdate } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (user: any) => {
    setUserId(user.id);
    setUserName(`${user.firstName} ${user.lastName}`);
    setShow(true);
  };

  let navigate = useNavigate();
  const navigateToUserData = () => {
    navigate("/home/userData");
  };

  const handleUpdateUser = (user) => {
    setUsertoUpdate(user); // Set the user to update in context
    // console.log(userToUpdate);
    navigate("/home/userData", { state: { operationType: "update" } });
  };

  const getUserList = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/users");
      // console.log(response.data.users);
      setUserList(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);

  const deleteUser = async () => {
    try {
      let response = await axios.delete(
        `https://dummyjson.com/users/${userId}`
      );

      // console.log(response);
      handleClose();
      toast.success("Deleted done");
    } catch (error) {
      toast.error("Deleted Falied");
    }
  };
  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <h5>Are you sure you want to delete {userName}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={deleteUser}>
              Yes
            </Button>
            <Button variant="danger" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="title  d-flex justify-content-between p-4">
        <h4>Users List</h4>
        <button onClick={navigateToUserData} className="btn btn-warning">
          Add new user
        </button>
      </div>
      <div className="tableContainer p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((user: any) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td>
                    <i
                      className="fa-solid fa-edit text-warning me-3"
                      onClick={() => handleUpdateUser(user)}
                    ></i>
                    <i
                      className="fa-solid  fa-trash text-danger "
                      onClick={() => {
                        handleShow(user);
                      }}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <div className="text-center">
                <h4 className="text-center">Loading ...</h4>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
