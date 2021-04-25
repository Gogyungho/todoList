import React from 'react';
import  './BarGraph.scss';

const BarGraph = ()=> {
    return (
        <div className='mycanvas'>
            <div className='container'>
                <div className='ball'></div>
            </div>
            <div className='shadow'></div>
        </div>
    );
};
export default BarGraph;
