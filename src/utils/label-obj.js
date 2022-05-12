import LabelData from './label-data.json'

export const getLabelObject = (label = '') => {
    let item = LabelData.find(item => item.label === label);
    return item ? item : '';
}
