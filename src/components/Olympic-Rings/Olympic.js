import React from "react";
import RandomData from "../../constants/RandomData";

function Olympic() {
    const { ringsData } = RandomData(),
    w = 700,
    h = 500,
    margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
    };

    const rings = ringsData.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          stroke={d.stroke}
          fill={d.fill}
          strokeWidth={d.strokeWidth}
        />
      ));

    return (
        <div>
            <svg width={w} height={h}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    {rings}
                </g>
            </svg>
        </div>
    );

}

export default Olympic;