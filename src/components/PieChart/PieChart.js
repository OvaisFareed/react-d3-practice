import React from 'react';
import * as d3 from 'd3';

function PieChart() {
    // set the dimensions and margins of the graph
    const w = 500,
        h = 500,
        margin = {
            top: 40,
            bottom: 40,
            left: 40,
            right: 40
        };

    const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        const radius = Math.min(width, height) / 2 - margin.top;

        // Create dummy data
        const data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

        // set the color scale
        const color = d3.scaleOrdinal()
            .domain(data)
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

        // Compute the position of each group on the pie:
        const pie = d3.pie()
            .value(function (d) { return d.value; });

        const data_ready = pie(d3.entries(data));

    return (
        <div>
            <svg width={w} height={h}>
                <defs>
                    <linearGradient id="redyel" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ff0000" />
                        <stop offset="100%" stopColor="#ffff00" />
                    </linearGradient>
                    <linearGradient id="yelgre" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffff00" />
                        <stop offset="100%" stopColor="#00ff00" />
                    </linearGradient>
                    <linearGradient id="custom" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="20%" stopColor="orange" />
                        <stop offset="100%" stopColor="red" />
                    </linearGradient>
                </defs>
                {/* append the svg object to the div called 'pie-chart' */}
                <g transform={`translate(${w / 2},${h / 2})`}>
                    {data_ready.map((e, i) => (
                        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                        <path
                            key={i}
                            d={`${d3.arc().innerRadius(0).outerRadius(radius)(e)}`}
                            fill={color(e.data.key)}
                            stroke="black"
                            strokeWidth="2px"
                            opacity={0.7}
                        ></path>
                    ))}
                </g>
            </svg>
        </div>
    )

}

export default PieChart;