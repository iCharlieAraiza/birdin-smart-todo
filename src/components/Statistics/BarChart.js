import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import styled from 'styled-components'

const BarChart = ({itemList}) => {

    //const stackedChartData = itemList

    console.log("itemList", itemList.allTasksByDay)
    /*
    const stackedChartData = [
        [itemList.allTasksByDay],
        [itemList.completedByDay]
    ]
    */
    let cont = itemList.allTasksByDay.length
    const arr = []
    const arr2 = []
    for (let key in itemList.allTasksByDay) {
        arr[cont--] = {x: key, y: itemList.allTasksByDay[key]}
    }
    
    for (let key in itemList.completedByDay) {
        arr[cont--] = {x: key, y: itemList.completedByDay[key]}
    }


    
    const stackedChartData = [
        [
            {key: 23, x: '01-05-2022', y: 0},
            {key: 24, x: '02-05-2022', y: 0},
            {key: 25, x: '03-05-2022', y: 0},
            {key: 26, x: '04-05-2022', y: 2},
            {key: 27, x: '05-05-2022', y: 3},
            {key: 28, x: '06-05-2022', y: 4},
            {key: 29, x: '07-05-2022', y: 0},
            {key: 30, x: '08-05-2022', y: 0},
            {key: 31, x: '09-05-2022', y: 0},
            {key: 32, x: '10-05-2022', y: 0},
            {key: 33, x: '11-05-2022', y: 0},
            {key: 34, x: '12-05-2022', y: 0},
            {key: 35, x: '13-05-2022', y: 0},
            {key: 36, x: '14-05-2022', y: 0},
            {key: 37, x: '15-05-2022', y: 0},
            {key: 38, x: '16-05-2022', y: 0},
            {key: 39, x: '17-05-2022', y: 0},
            {key: 40, x: '18-05-2022', y: 0},
        ],
        [
            {key: 23, x: '01-05-2022', y: 0},
            {key: 24, x: '02-05-2022', y: 0},
            {key: 25, x: '03-05-2022', y: 0},
            {key: 26, x: '04-05-2022', y: 2},
            {key: 27, x: '05-05-2022', y: 3},
            {key: 28, x: '06-05-2022', y: 20},
            {key: 29, x: '07-05-2022', y: 0},
            {key: 30, x: '08-05-2022', y: 0},
            {key: 31, x: '09-05-2022', y: 0},
            {key: 32, x: '10-05-2022', y: 0},
            {key: 33, x: '11-05-2022', y: 2},
            {key: 34, x: '12-05-2022', y: 10},
            {key: 35, x: '13-05-2022', y: 0},
            {key: 36, x: '14-05-2022', y: 3},
            {key: 37, x: '15-05-2022', y: 0},
            {key: 38, x: '16-05-2022', y: 0},
            {key: 39, x: '17-05-2022', y: 0},
            {key: 40, x: '18-05-2022', y: 0},
        ],
      ];
    
    
    const arrTest = []
    const arrTestB = []

    let i = 0;
    for (let key in itemList.completedByDay) {
        arrTest.push({
            id: i,
            x: key,
            y: itemList.completedByDay[key].y
        })
    }

    for (let key in itemList.allTasksByDay) {
        arrTestB.push({
            id: 100 + i,
            x: key,
            y: itemList.allTasksByDay[key].y
        })
    }

    console.log("stackedChartData", stackedChartData[0])
    console.log("arrTest", arrTest)


    const stackedCustomSeries = [

    { dataSource: arrTest.reverse(),
      xName: 'x',
      yName: 'y',
      name: 'Completed',
      type: 'StackingColumn',
      background: 'blue',
    },
  
    { dataSource: arrTestB.reverse(),
      xName: 'x',
      yName: 'y',
      name: 'Pending',
      type: 'StackingColumn',
      background: 'red',
    },
  
  ];

    const primaryXAxis = {
        valueType: 'Category',
        labelIntersectAction: 'Rotate45',
        labelColor: 'white',
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
    } 

    const primaryYAxis = {
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 20,
        interval: 100,
        color: 'white',
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}',
      };
      
    return (
        <Wrapper>
            <ChartComponent
            id="charts"
            primaryXAxis={primaryXAxis}
            primaryYAxis={primaryYAxis}
            background = 'transparent'
            tooltip={{ enable: true }}
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            { <SeriesDirective key={window.Date.now()} {...stackedCustomSeries[0]} /> }
            { <SeriesDirective key={window.Date.now() + 10} {...stackedCustomSeries[1]} /> }
            </SeriesCollectionDirective>
        </ChartComponent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text {
        font-family: 'Roboto', sans-serif!important;
        font-size: 12px;
        fill: #ffffff;
    }

    #charts_chart_legend_element {
        fill: transparent;
    }  
`

export default BarChart