import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import styled from 'styled-components'

const BarChart = ({itemList}) => {

    const stackedChartData = itemList

    /*
    const stackedChartData = [
        itemList.allTasksByDay,
        itemList.completedByDay
    ]
    */

    /*
    const stackedChartData = [
        [
          { x: 'Jan', y: 111.1 },
          { x: 'Feb', y: 127.3 },
          { x: 'Mar', y: 143.4 },
          { x: 'Apr', y: 159.9 },
          { x: 'Ma7y', y: 159.9 },
          { x: 'Ju0n', y: 159.9 },
          { x: 'Juyly', y: 159.9 },
          { x: 'Agus', y: 159.9 },
          { x: 'Mar', y: 143.4 },
          { x: 'Aprj', y: 159.9 },
          { x: 'Mayh', y: 159.9 },
          { x: 'Jun', y: 159.9 },
          { x: 'Jujly', y: 159.9 },
          { x: 'Agus', y: 159.9 },
        ],
        [
          { x: 'Jan', y: 111.1 },
          { x: 'Feb', y: 127.3 },
          { x: 'Mar', y: 143.4 },
          { x: 'Apr', y: 159.9 },
          { x: 'May', y: 159.9 },
          { x: 'Jun', y: 159.9 },
          { x: 'July', y: 159.9 },
          { x: 'Mar', y: 143.4 },
          { x: 'Apr', y: 159.9 },
          { x: 'Mtay', y: 159.9 },
          { x: 'Jun', y: 159.9 },
          { x: 'Juhly', y: 159.9 },
          { x: 'Agus', y: 159.9 },
        ],
      ];
    */
    
    
    console.log("Items List", stackedChartData)

    const stackedCustomSeries = [

    { dataSource: stackedChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Budget',
      type: 'StackingColumn',
      background: 'blue',
  
    },
  
    { dataSource: stackedChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Expense',
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
        minimum: 100,
        maximum: 500,
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
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            { <SeriesDirective key={window.Date.now()} {...itemList.allTasksByDay} /> }
            { <SeriesDirective key={window.Date.now()} {...stackedCustomSeries[1]} /> }
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