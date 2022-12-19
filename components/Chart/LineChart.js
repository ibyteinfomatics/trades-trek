import React from 'react';
import { Chart as chartjs, LineElement, PointElement, CategoryScale, LinearScale,Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2';

chartjs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip
)

export default function LineChart({graphData}){
   
    
    
    const data = {
        labels:graphData.day? graphData.day:['Mon', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: '# Account Value',
            data:graphData.amount? graphData.amount: [100000, 101000, 108000, 153000, 104000, 105000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    var options = {
        maintainAspectRation: false,
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                display: false // Hide X axis labels
            }
        }
    }

    return(
        <>
            <div style={{width: "100%", marginLeft: 'auto', marginRight: 'auto'}}>
                {graphData?.day?.length>0 ?<Line 
                    data={data}
                    height={100}
                    options={options}
                />:<div style={{height:'150px',display:'flex',alignItems:"center"}}><h1>Your performance chart will update daily starting tomorrow</h1></div>}
                
            </div>
        </>
    )
}
