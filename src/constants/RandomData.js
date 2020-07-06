function RandomData() {
    const scatteredGraphData = [...Array(100)].map((e, i) => {
      return {
        x: Math.random() * 40,
        y: Math.random() * 40,
        temparature: Math.random() * 500
      };
    });

    const ringsData = [
      {
          cx: '100',
          cy: '60',
          r: '70',
          stroke: 'skyBlue',
          fill: 'none',
          strokeWidth: '10'
      },
      {
          cx: '265',
          cy: '60',
          r: '70',
          stroke: 'black',
          fill: 'none',
          strokeWidth: '10'
      },
      {
          cx: '430',
          cy: '60',
          r: '70',
          stroke: 'red',
          fill: 'none',
          strokeWidth: '10'
      },
      {
          cx: '180',
          cy: '130',
          r: '70',
          stroke: 'yellow',
          fill: 'none',
          strokeWidth: '10'
      },
      {
          cx: '345',
          cy: '130',
          r: '70',
          stroke: 'green',
          fill: 'none',
          strokeWidth: '10'
      },
  ];

  const barGraphData = [
    {
      y: '0',
      cx: '0',
      cy: '0',
      barWidth: '250',
      barHeight: '40',
      fill: 'red'
    },
    {
      y: '50',
      cx: '10',
      cy: '10',
      barWidth: '300',
      barHeight: '40',
      fill: 'red'
    },
    {
      y: '100',
      cx: '20',
      cy: '20',
      barWidth: '200',
      barHeight: '40',
      fill: 'green'
    },
    {
      y: '150',
      cx: '30',
      cy: '30',
      barWidth: '250',
      barHeight: '40',
      fill: 'green'
    },
    {
      y: '200',
      cx: '0',
      cy: '0',
      barWidth: '150',
      barHeight: '40',
      fill: 'red'
    },
    {
      y: '250',
      cx: '0',
      cy: '0',
      barWidth: '450',
      barHeight: '40',
      fill: 'green'
    }
  ]

  const verticalBarGraphData = [
    {
      x: '0',
      cx: '0',
      cy: '0',
      barWidth: '40',
      barHeight: '250',
      fill: 'red'
    },
    {
      x: '50',
      cx: '10',
      cy: '10',
      barWidth: '40',
      barHeight: '300',
      fill: 'red'
    },
    {
      x: '100',
      cx: '20',
      cy: '20',
      barWidth: '40',
      barHeight: '200',
      fill: 'green'
    },
    {
      x: '150',
      cx: '30',
      cy: '30',
      barWidth: '40',
      barHeight: '250',
      fill: 'green'
    },
    {
      x: '200',
      cx: '0',
      cy: '0',
      barWidth: '40',
      barHeight: '150',
      fill: 'red'
    }
  ]

    return {scatteredGraphData, ringsData, barGraphData, verticalBarGraphData};
  }

  export default RandomData;