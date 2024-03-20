import React, { useState, useEffect } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const WaterUsageChart = () => {
  const [options, setOptions] = useState({});
  const tooltip = {
    renderer: ({ datum, angleKey }) => ({
      content: `${datum[angleKey]} Litres`,
    }),
  };

  useEffect(() => {
    const getData = () => ({
      continents: [
        { continent: 'Europe', value: 1120 },
        { continent: 'Asia', value: 950 }
      ],
      countries: [
        { country: 'Germany', value: 430, index: 0 },
        { country: 'England', value: 370, index: 1 },
        { country: 'Italy', value: 320, index: 2 },
        { country: 'Singapore', value: 330, index: 3 },
        { country: 'India', value: 290, index: 4 },
        { country: 'Japan', value: 330, index: 5 },
      ],
      cities: [
        { city: 'Berlin', value: 150, index: 0 },
        { city: 'Munich', value: 100, index: 1 },
        { city: 'Hamburg', value: 180, index: 2 },
        { city: 'London', value: 120, index: 3 },
        { city: 'Manchester', value: 90, index: 4 },
        { city: 'Birmingham', value: 160, index: 5 },
        { city: 'Rome', value: 130, index: 6 },
        { city: 'Milan', value: 80, index: 7 },
        { city: 'Venice', value: 110, index: 8 },
        { city: 'Singapore City', value: 110, index: 9 },
        { city: 'Jurong', value: 120, index: 10 },
        { city: 'Woodlands', value: 100, index: 11 },
        { city: 'Delhi', value: 90, index: 12 },
        { city: 'Mumbai', value: 70, index: 13 },
        { city: 'Bangalore', value: 130, index: 14 },
        { city: 'Tokyo', value: 120, index: 15 },
        { city: 'Osaka', value: 100, index: 16 },
        { city: 'Kyoto', value: 110, index: 17 },
      ],
    });

    const tooltip = {
      renderer: ({ datum, angleKey }) => ({
        content: `${datum[angleKey]} Litres`,
      }),
    };
    const data = getData();
    setOptions({
      autoSize: true,
      background: {
        fill: 'transparent' // Define o fundo do gráfico como transparente
      },
      padding: { top: 0, right: 0, bottom: 0, left: 0 }, // Ajusta o padding global do gráfico
    
      legend: {
        enabled: false
      },
      series: [

        // Continents - Outermost level
        {
          type: 'pie',
          //title: { text: 'Continents' },
          data: getData().continents,
          angleKey: 'value',
          labelKey: 'continent',
          sectorLabelKey: "continent",
          outerRadiusRatio: 0.2,
          innerRadiusRatio: 0.4,
          strokeWidth: 2,
          tooltip,
          fills: ['#e7515a', '#00AB55', '#0c60bb', '#ef7817', '#43efbc'],
        },// Cities - Innermost level
        // Countries - Intermediate level
        {
          type: 'pie',
          //title: { text: 'Countries' },
          data: getData().countries,
          sectorLabelKey: "country",
          angleKey: 'value',
          labelKey: 'country',
          outerRadiusRatio: 0.6,
          innerRadiusRatio: 0.4,
          fillOpacity: 0.8,
          fills: ['#e7515a', '#00AB55', '#0c60bb', '#ef7817', '#43efbc'],
          formatter: ({ datum, fills }) => {
            const index = datum["index"];
            const colorIndex = index < 3 ? 0 : 1;
            console.log(fills[colorIndex])
            return {
              fill: fills[colorIndex],
            };
          },
          tooltip,
        }, {
          data: getData().cities,
          type: 'pie',
          angleKey: 'value',
          labelKey: 'city',
          sectorLabelKey: "city",
          outerRadiusRatio: 0.8,
          innerRadiusRatio: 0.6,
          fills: ['#e7515a', '#00AB55', '#0c60bb', '#ef7817', '#43efbc'],
          // calloutLabelKey: "city",
          // calloutLabel: {
          //   minAngle: 5,
          // },
          fillOpacity: 0.6,
          formatter: ({ datum, fills }) => {
            const index = datum["index"];
            const colorIndex = index < 9 ? 0 : 1;
            return {
              fill: fills[colorIndex],
            };
          },
          tooltip
        },
      ],
    });
  }, []);

  return <div style={{ width: '100%', height: '600px', marginTop: '-50px' }}>
    <AgChartsReact options={options} />
  </div>;
};

export default WaterUsageChart;
