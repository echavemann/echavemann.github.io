import React from 'react';
import './brand.css';  
import { nu, acorn, nuft, hc,amazon} from './imports';


const Brand = () => {
    return (
        <div className = 'Brandintro'>
            <h2>Experience with the following organizations:</h2>
        <div className='gpt3__brand section__padding'>
            <div>
                <a href = "https://www.amazon.com" target = "_blank" rel="noreferrer"><img src={amazon} alt = 'Amazon'/></a>
            </div>
            <div>
                <a href = "https://www.northwestern.edu/" target = "_blank" rel="noreferrer"><img src={nu} alt = 'Northwestern University'/></a>
            </div>
            <div>
                <a href = "https://www.acorngenetics.com/" target = "_blank" rel="noreferrer"><img src={acorn} alt = 'Acorn Genetics'/></a>
            </div>
            <div>
                <a href = "https://echavemann.github.io/" target = "_blank" rel="noreferrer"><img src={hc} alt = 'Havemann Capital'/></a>
            </div>
            <div className='nufticon'>
                <a href = "https://northwesternfintech.github.io/" target = "_blank" rel="noreferrer"><img src={nuft} alt = 'NUFintech'/></a>
            </div>
        </div>
        </div>
    )
    }

export default Brand