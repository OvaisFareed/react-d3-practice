import React, { useState } from 'react';
// import {scaleLinear, extent, max } from 'd3';
import * as d3 from 'd3';
import GraphBorder from '../GraphBorder/GraphBorder';
import AxisLeft from '../AxisLeft/AxisLeft';
import AxisBottom from '../AxisBottom/AxisBottom';
import lettersData from '../../constants/vertical-bar-chart-data.json';
import Tooltip from '../Tooltip/Tooltip';

function VerticalBarChart() {
  const [hoveredBar, setHoveredBar] = useState(null);
    const w = 800,
        h = 500,
        margin = {
            top: 40,
            bottom: 40,
            left: 40,
            right: 40
        };

    const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom,
        barWidth = Math.ceil(width / lettersData.length);

    const xScale = d3.scaleLinear()
        .domain(d3.extent(lettersData, d => d.cx))
        .range([0, width]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(lettersData, d => d.Freq)])
        .range([height, 0]);

    function handleMouseEvent(value, x){
      if(value){
        value.x = x;
      }
      setHoveredBar(value);
    }
    
    const rectangles = lettersData.map((d, i) => (
      <g key={i}>
        <rect
          className="bar"
          x={i * barWidth}
          y={yScale(d.Freq)}
          width={barWidth - 1}
          height={height - yScale(d.Freq)}
          fill="orange"
          onMouseOver={() => handleMouseEvent(d, i * barWidth)}
          onMouseOut={() => handleMouseEvent(null)}
        />
        </g>
      ));

        return (
            <div>
                <svg width={w} height={h}>
                    <g className="bar-g" transform={`translate(${margin.left},${margin.top})`}>
                        <AxisLeft yScale={yScale} width={width} />
                        <AxisBottom xScale={xScale} height={height} />
                        {rectangles}
                    </g>
                    { hoveredBar ?
                        <Tooltip
                          hoveredBar={hoveredBar}
                          scales={{ xScale, yScale }}
                        /> :
                        null
                      }
                    <GraphBorder width={w} height={h} />
                </svg>
            </div>
        );

    }

export default VerticalBarChart;