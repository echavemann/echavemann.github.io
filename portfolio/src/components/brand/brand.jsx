import React from 'react';
import './brand.css';  
import { nu, acorn, nuft, hc,amazon} from './imports';


const Brand = () => {
    return (
        <div className = 'Brandintro'>
            <h2>Experience with the following organizations:</h2>
        <div className='gpt3__brand section__padding'>
            <div>
                <img src={amazon} alt = 'Amazon'/>
            </div>
            <div>
                <img src={nu} alt = 'Northwestern University'/>
            </div>
            <div>
                <img src={acorn} alt = 'Acorn Genetics'/>
            </div>
            <div>
                <img src={hc} alt = 'Havemann Capital'/>
            </div>
            <div className='nufticon'>
                <img src={nuft} alt = 'NUFintech'/>
            </div>
        </div>
        </div>
    )
    }

export default Brand