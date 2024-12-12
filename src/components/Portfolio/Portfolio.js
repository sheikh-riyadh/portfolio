import React, { useEffect, useState } from "react";
import { useTitle } from "../../hooks/UserTitle";
import Modal from "../Modal/Modal";
import "./Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState("");
  useTitle("| projects");
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize text-4xl my-5 font-bold">
        Loading...
      </p>
    );
  }

  return (
    <div className="lg:px-16 mx-5 text-start">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize text-4xl my-5 font-bold">
        Projects showcase
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => {
          return (
            <div key={i} className="bg-[#0A1413] rounded-lg">
              <img className="h-44 w-full" src={project.image} alt="project" />
              <div className="flex flex-col lg:flex-row justify-between gap-2 p-5">
                <label
                  onClick={() => setModalData(project)}
                  htmlFor="project-modal"
                  className="btn mt-2 rounded-md bg-gradient-to-r from-[#13F26D] to-[#0092A4] text-white  w-full border-0 z-20"
                >
                  Details
                </label>
              </div>
              <Modal modalData={modalData}></Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
