import React from "react";
import PokeDex from "./pokedexnew.png";
import Hogwarts from "./hogwarts.png";
import Todo from "./grocerylist.png";
import posed from "react-pose";

import "./projects.scss";
import { Link, NavLink } from "react-router-dom";

export default function Projects() {
  const Box = posed.div({
    hoverable: true,
    draggable: "x",
    dragBounds: { left: "-90%", right: "90%" },
    init: { scale: 0.9 },
    hover: { scale: 1 },
    drag: { scale: 1.1 }
  });

  return (
    <div className="projectsContainer">
      <div className="projects">
        <h3 className="projectH3">Hogwarts Sorting Hat Quiz</h3>
        <div className="projectParaHolder">
          <p className="projectParagraph">
            This is a project I worked on as a stretch goal. It will sort you
            into your Hogwarts house by your answers. I utilized class components to gain more practice. 
            I was able to get practice with passing props with this project. 
          </p>
        </div>

        <Box>
          <img src={Hogwarts} alt="hogwarts-preview" className="pokedex" />
        </Box>
        <div className="centeredBtns">
          <a
            href="https://github.com/nisaChampagne/React-Sorting-Hat"
            className="projectBtn"
          >
            GitHub Link
          </a>
          <a
            href="https://react-sorting-hat.nchampag23.now.sh/"
            className="projectBtn"
          >
            Hosted
          </a>
        </div>
      </div>
      <div className="projects">
        <h3 className="projectH3">React Todo List</h3>
        <div className="projectParaHolder">
          <p className="projectParagraph">
            This was a project I did in my spare time after Computer Science course work. This list will utilize local storage
            so when you refresh your page, your data will persist.
          </p>
        </div>

        <Box>
          <img src={Todo} alt="todo-preview" className="pokedex" />
        </Box>
        <div className="centeredBtns">
          <a
            href="https://github.com/nisaChampagne/CRA-Todo"
            className="projectBtn"
          >
            Github Link{" "}
          </a>
          <a href="https://todo-hsy0vs7pb.now.sh/" className="projectBtn">
            Hosted
          </a>
        </div>
      </div>
      <div className="projects">
        <h3 className="projectH3">Simple PokeDex</h3>
        <div className="projectParaHolder">
          <p className="projectParagraph">
            I have always been into Pokemon so this was a fun side project. This will utilize getting data from an open Pokemon API,
            gathering the data in a response, then using that data to make a Pokedex like container. I have some future plans for this particular project.
          </p>
        </div>

        <Box>
          <img src={PokeDex} alt="pokedex-preview" className="pokedex" />
        </Box>
        <div className="centeredBtns">
          <a
            href="https://github.com/nisaChampagne/Sideprojectpokedex"
            className="projectBtn"
          >
            Github Link
          </a>
          <a href="https://pokedex.nchampag23.now.sh/" className="projectBtn">
            Hosted
          </a>
        </div>
      </div>
      <div className="projects">
        <h3 className="projectH3">Client Side Authentication Practice</h3>
        <Box>
          <iframe
            className="videoproject"
            src="https://www.loom.com/embed/2e3fa99ec5514405a08e32ddd3cb03cf"
          ></iframe>
        </Box>
        <div className="centeredBtns">
          <a
            href="https://github.com/nisaChampagne/Auth-Friends"
            className="projectBtn"
          >
            Github Link
          </a>
        </div>
      </div>
      <div className="projectParaHolder">
          <p className="projectParagraph">
            This particular project was more practice with axios calls, getting and setting a token to localstorage, CRUD functionality, and displaying received data.
          </p>
        </div>
    </div>
  );
}
