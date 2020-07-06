import React from 'react';
import './PieChart.css';
import * as d3 from 'd3';
import RandomData from '../../constants/RandomData';

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
    // const data = { a: 9, b: 20, c: 30, d: 8, e: 12 };
    const { ringsData } = RandomData();
    const data = {};

    ringsData.forEach((d, i) => {
        data[i] = d.cx;
    });

    // set the color scale
    const color = d3.scaleOrdinal()
        .domain(data)
        .range(["blue", "orange", "red", "darkRed", "brown"])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
        .value((d) => d.value);

    const data_ready = pie(d3.entries(data));

    const createArc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    const format = d3.format(".2f");

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
                        <stop offset="0%" stopColor="violet" />
                        <stop offset="15%" stopColor="indigo" />
                        <stop offset="30%" stopColor="blue" />
                        <stop offset="45%" stopColor="green" />
                        <stop offset="60%" stopColor="yellow" />
                        <stop offset="75%" stopColor="orange" />
                        <stop offset="100%" stopColor="red" />
                    </linearGradient>
                </defs>
                {/* append the svg object to the div called 'pie-chart' */}
                <g transform={`translate(${w / 2},${h / 2})`}>
                    {data_ready.map((e, i) => (
                        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                        <g key={i}>
                            <path
                                className="pie"
                                d={createArc(e)}
                                fill={color(e.data.key)}
                                // fill={`url(#custom)`}
                                strokeWidth="2px"
                                opacity={0.7}
                            ></path>

                            <text
                                transform={`translate(${createArc.centroid(e)})`}
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fill="white"
                                fontSize="14"
                            >
                                {format(e.value)}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    )

}

export default PieChart;