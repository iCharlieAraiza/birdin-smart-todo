import React from 'react'
import { ListItem, SelectButton, Title, TimeDescription, LabelTag, ButtonContainer, Square } from './components.js'
import CheckButton from '../List/CheckButton.js'
import { MdLabelImportant, MdLabelImportantOutline } from 'react-icons/md'

const List = ({title = '', toggle, item}) => {

    function setCheck (){
        console.log('setCheck')
    }

    const check = true;

    return (
        <ListItem onClick={() => toggle(item)}>
            <SelectButton className="check-button">
                {/*<CheckButton setCheck={setCheck} check='false'/>*/}
            </SelectButton>
            <Title>
                {title}
                <TimeDescription className='text'>
                    Estimated time
                </TimeDescription>
            </Title>
            <LabelTag>
                  <Square>
                    {!item.important ? ( <ButtonContainer onClick={() => handleIsImportant(item) }> 
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