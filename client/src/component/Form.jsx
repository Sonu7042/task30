import React, { useState } from "react";
import axios from 'axios'
import Display from "./Display";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const [createUser, setCreateUser]=useState([])
//   console.log(createUser)

  const handleSubmit =async (e) => {
    e.preventDefault();

    if(!data.name  || !data.email || !data.message){
        return alert ("Pls enter data")
    }


    const response= await axios.post("https://task30-chi.vercel.app/create",  data);
    setCreateUser([ ...createUser, response.data.data]);


    setData({ name: "", email: "", message: "" })
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (

    <>
    <div className="formDiv">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter Message"
          name="message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

   {createUser.length >0 &&  <Display  createUser={createUser}/>}
    </>
  );
};

export default Form;
