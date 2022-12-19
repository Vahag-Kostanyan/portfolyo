import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

import {Doughnut} from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);
const Chart = () => {

    const data = {
        datasets: [{
            label: "Poll", 
            data: [90, 10],
            backgroundColor: ["black", "red"],
            borderColor: ["black", "red"],
        }]
    }

    const options = {

    }

    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const {ctx, data } = chart;

            ctx.save();
            ctx.font = "bolder";
            ctx.fillStyle = "with";
            ctx.fillText("text", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
    }
  return (
    <div>

        <Doughnut
        data = {data}
        options = {options}
        plugins = {[textCenter]}
        >
            
        </Doughnut>
    </div>
  )
}

export default Chart