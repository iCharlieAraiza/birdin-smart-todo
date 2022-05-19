import LabelData from './label-data.json'
import styled from 'styled-components'

const Label = styled.span`
    width: 42px;
    height: 6px;
    display: block;
    border-radius: 4px;
    margin-top: 4px;
    background-color: ${props => props.color};
`

export const getLabelObject = (label = '') => {
    let item = LabelData.find(item => item.label === label);
    return item ? item : '';
}

export const getLabelComponent = (label = '') => {
    const item = getLabelObject(label);
    return item ? <Label color={ item.color } /> : '';
}

