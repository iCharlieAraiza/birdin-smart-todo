import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import styled from 'styled-components'

const BarChart = ({itemList}) => {

    const stackedCustomSeries = [

    { dataSource: itemList.completedByDay,
      xName: 'x',
      yName: 'y',
      name: 'Completed',
      type: 'StackingColumn',
      background: 'blue',
    },
  
    { dataSource: itemList.allTasksByDay,
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