import React from "react";

function GraphBorder({ width, height }) {

    const coordinates = <g>
      <line
        style={{ stroke: "black", strokeWidth: "2px" }}
        x1={0}
        x2={0}
        y1={0}
        y2={height}
      />
      <line
        style={{ stroke: "black", strokeWidth: "2px" }}
        x1={width}
        x2={0}
        y1={height}
        y2={height}
      />
    </g>

  return <>{coordinates}</>;
}

export default GraphBorder;