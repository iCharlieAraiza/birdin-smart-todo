import React, {useState, useEffect} from 'react'
import { ListItem, SelectButton, Title, TimeDescription, LabelTag, ButtonContainer, Square, ColorLabel } from './components.js'
import { MdLabelImportant, MdLabelImportantOutline } from 'react-icons/md'
import CheckButton from '../Details/components/CheckBox.js'

const List = ({title = '', toggle, item, isSelected = false}) => {

    if(item === null) {
        return null
    }

    function setCheck (){
        console.log('setCheck')
    }

    const check = true;

    const handleClick = (item) => {
        toggle(item)
        console.log(isSelected)
    }


    return (
        <ListItem onClick={() => handleClick(item)} className={`${item.isChecked&&'checked'} ${isSelected?.id == item.id && 'active'}`}>
            <SelectButton className="check-button">
                <CheckButton item={item} setIsChecked={setCheck}/>
                {/*<CheckButton setCheck={setCheck} check='false'/>*/}
            </SelectButton>
            <Title className={'title text'}>
                {title}
                <TimeDescription className='text'>
                    {console.log("Kind pof time", item.kindOfEstimated)}
                    { 
                        ( item?.estimatedTime > 0) && 'Estimated time ' + item.estimatedTime + ' ' + (item.kindOfEstimated==undefined ? '' : item.kindOfEstimated) 
                    }
                </TimeDescription>
                {(item.labels && item.labels?.label !== 'none') && ( <div> <ColorLabel color={item.labels?.color}/> </div>)}
            </Title>
            <LabelTag>
                  <Square>
                    {!item.important ? (
                        <ButtonContainer onClick={() => handleIsImportant(item) }> 
                            <MdLabelImportantOutline /> 
                            </ButtonContainer> ) : 
                            ( <ButtonContainer className='active' onClick={() => handleIsImportant(item)}> 
                            <MdLabelImportant/>
                        </ButtonContainer> )}
                  </Square>
              </LabelTag>
        </ListItem>
    )
}

export default List