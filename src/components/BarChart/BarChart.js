import React from 'react';
import {scaleLinear, extent} from 'd3';
import RandomData from '../../constants/RandomData';
import AxisBottom from '../AxisBottom/AxisBottom';
import GraphBorder from '../GraphBorder/GraphBorder';
import AxisLeft from '../AxisLeft/AxisLeft';

function BarChart() {

    const {barGraphData} = RandomData(),
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
        .domain(extent(barGraphData, d => d.cx))
        .range([0, width]);
    
      const yScale = scaleLinear()
        .domain(extent(barGraphData, d => d.cy))
        .range([height, 0]);
    
    const rectangles = barGraphData.map((d, i) => (
        <rect
          key={i}
          x={0}
          y={(height - d.barHeight) - d.y}
          width={d.barWidth}
          height={d.barHeight}
          fill={d.fill}
        />
      ));


    return (
        <div>
            <svg width={w} height={h}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    <AxisLeft yScale={yScale} width={width} />
                    <AxisBottom xScale={xScale} height={height} />
                    {rectangles}
                </g>
                <GraphBorder width={w} height={h} />
            </svg>
        </div>
    );
}

export default BarChart;