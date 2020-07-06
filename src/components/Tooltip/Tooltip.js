import React from "react";
import lettersData from '../../constants/vertical-bar-chart-data.json';

function Tooltip({hoveredBar, scales}) {
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
    const { yScale } = scales;
  
    return (
        <g transform={`translate(${margin.left},${margin.top})`}>
            <rect className="tooltip"
                x={hoveredBar.x - 60}
                y={yScale(hoveredBar.Freq) - 52}
                width={150}
                height={50}
                fill="black"
                opacity={0.7}
            />
            <rect className="hover"
                x={hoveredBar.x}
                y={yScale(hoveredBar.Freq)}
                width={barWidth - 1}
                height={height - yScale(hoveredBar.Freq)}
                fill="red" 
            />
            <text
                style={{fontSize: 14, textOverflow: "wrap" }}
                x={hoveredBar.x - 40}
                y={yScale(hoveredBar.Freq) - 20}
                fill="white"
            >
                Occurence ({hoveredBar.Letter}) : {hoveredBar.Freq}
            </text>
        </g>
    )
}

export default Tooltip;