import React from "react"
import data from "./data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import "./DummyChart.scss"

ChartJS.register(ArcElement, Tooltip, Legend);
const DummyChart = ()=>{
    return <>
        <h2>Dummy Chart</h2>
        <div className="chart">
        <Pie data={data} />
        </div>
    </>;
}

export default DummyChart;