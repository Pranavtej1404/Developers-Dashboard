import { useState } from "react";
import styles from "../styles/card.module.css"
import axios from "axios";
import { api } from "./api";
const AddEle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
    priority: "",
   
  });

  const handleDivClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setFormValues({
      name: "",
      description: "",
      start_date: "",
      end_date: "",
      priority: "",
      
    }); // Clear inputs on close
  };

  const handleSubmit = async () => {
    setIsModalOpen(false);
    await axios.post(`${api}/dashboard/addProject`,formValues,{
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }
  return (
    <div>
      {/* Clickable Div */}
      <div
        onClick={handleDivClick}
        className={styles.card}
      >
        Click Me
      </div>

      {/* Popup/Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h3>Enter Details</h3>

            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formValues.name}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            {/* Description Input */}
            <textarea
              name="description"
              placeholder="Enter Description"
              value={formValues.description}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                height: "60px",
              }}
            />

            {/* Start Date Input */}
            
            <input
              type="date"
              name="start_date"
              placeholder="Start Date"
              value={formValues.start_date}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            {/* End Date Input */}
            
            <input
              type="date"
              name="end_date"
              placeholder="End Date"
              value={formValues.end_date}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            {/* Priority Input */}
            <input
              type="text"
              name="priority"
              placeholder="Priority "
              value={formValues.priority}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            

            <div>
              <button
                onClick={handleSubmit}
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
              <button
                onClick={handleClose}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddEle;
