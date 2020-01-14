import React from 'react'
import PDF from './NisaChampagne2019.pdf'

import './resume.scss'

export default function Resume(){

    return(
        <div className='resumeHolder'>
            <iframe className="resume"src="https://resume.creddle.io/embed/gj9aeancodo"
             height="1100" width="850" seamless></iframe>
            <div>
                <a href={PDF}><button className="resumeBtn">Download Resume</button></a>
            </div>
        </div>
    )
}