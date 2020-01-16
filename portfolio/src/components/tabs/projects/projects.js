import React from "react";
import PokeDex from './pokedexnew.png'
import Hogwarts from './hogwarts.png'
import Todo from './reacttodonew.png'
import posed from 'react-pose'

import './projects.scss';
import Drum from '../drum/drum'

export default function Projects(){

    const Box = posed.div({
        hoverable: true,
        draggable: 'x',
        dragBounds: { left: '-90%', right: '90%' },
        init: { scale: 0.9 },
        hover: { scale: 1 },
        drag: { scale: 1.1 }
      })

    
    return(
        <div className='projectsContainer'>
            <div className='projects'>
                <h3 className="projectH3">Hogwarts Sorting Hat Quiz</h3>
                <Box><img src={Hogwarts} alt='hogwarts-preview' className='pokedex'/></Box>
                <div className="centeredBtns">
                    <a href='https://github.com/nisaChampagne/React-Sorting-Hat'className="projectBtn">GitHub Link</a>
                    <a href='https://react-sorting-hat.nchampag23.now.sh/'className="projectBtn">Hosted</a>
                </div>
            </div>
            <div className='projects'>
                <h3 className="projectH3">React Todo List</h3>
                <Box><img src={Todo} alt='todo-preview' className='pokedex'/></Box>
                <div className="centeredBtns">
                    <a href='https://github.com/nisaChampagne/React-Todo'className="projectBtn">Github Link </a>
                    <a href='https://react-todo-4bm2326a5.now.sh/'className="projectBtn">Hosted</a>
                </div>
            </div>
            <div className='projects'>
                <h3 className="projectH3">Simple PokeDex</h3>
                <Box><img src={PokeDex} alt='pokedex-preview' className='pokedex'/></Box>
                <div className="centeredBtns">
                    <a href='https://github.com/nisaChampagne/Sideprojectpokedex' className="projectBtn">Github Link</a>
                    <a href='https://pokedex.nchampag23.now.sh/'className="projectBtn">Hosted</a>
                </div>
            </div>
            <div className='projects'>
                <h3 className="projectH3">Client Side Authentication Practice</h3>
                <Box>
                    <iframe className='videoproject' src="https://www.loom.com/embed/2e3fa99ec5514405a08e32ddd3cb03cf"></iframe>
                </Box>
                <div className="centeredBtns">
                    <a href='https://github.com/nisaChampagne/Auth-Friends'className="projectBtn">Github Link</a>
                </div>
            </div>
        </div>
    )
}