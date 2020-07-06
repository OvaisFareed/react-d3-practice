import React from 'react';
import {scaleLinear, extent} from 'd3';
import RandomData from '../../constants/RandomData';
import AxisBottom from '../AxisBottom/AxisBottom';
import GraphBorder from '../GraphBorder/GraphBorder';
import AxisLeft from '../AxisLeft/AxisLeft';

function Scatter() {
    const { scatteredGraphData } = RandomData(),
        w = 700,
        h = 500,
        margin = {
            top: 40,
            bottom: 40,
            left: 40,
            right: 40
        };

    const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom;

        const xScale = scaleLinear()
        .domain(extent(scatteredGraphData, d => d.x))
        .range([0, width]);
    
      const yScale = scaleLinear()
        .domain(extent(scatteredGraphData, d => d.y))
        .range([height, 0]);
    
    const circles = scatteredGraphData.map((d, i) => (
        <circle
          key={i}
          r={5}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          style={{ fill: "lightblue"}}
        />
      ));


    return (
        <div>
            <svg width={w} height={h}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    <AxisLeft yScale={yScale} width={width} />
                    <AxisBottom xScale={xScale} height={height} />
                    {circles}
                </g>
                <GraphBorder width={w} height={h} />
            </svg>
        </div>
    );
}

export default Scatter;