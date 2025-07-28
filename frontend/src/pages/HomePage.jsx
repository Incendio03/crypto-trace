import React from "react";
import api from "../lib/axios";
import { useState } from "react";
import Header from "@/components/Header";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function onCreate() {
    try {
      const res = await api.post("/lists", {
        title,
        description,
      });
      console.log(res.data);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating list:", error);
    }
  }

  return (
    <>
      <Header></Header>
      <div>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <button onClick={onCreate}>Create List</button>
      </div>
    </>
  );
};

export default HomePage;
