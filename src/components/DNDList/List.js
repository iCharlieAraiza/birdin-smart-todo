import React from 'react'
import { ListItem, SelectButton, Title, TimeDescription, LabelTag, ButtonContainer, Square } from './components.js'
import { MdLabelImportant, MdLabelImportantOutline } from 'react-icons/md'
import CheckButton from '../Details/components/CheckBox.js'

const List = ({title = '', toggle, item}) => {
    function setCheck (){
        console.log('setCheck')
    }

    const check = true;

    return (
        <ListItem onClick={() => toggle(item)} className={item.isChecked&&'checked'}>
            <SelectButton className="check-button">
                <CheckButton item={item} setIsChecked={setCheck}/>
                {/*<CheckButton setCheck={setCheck} check='false'/>*/}
            </SelectButton>
            <Title className={'title text'}>
                {title}
                <TimeDescription className='text'>
                    Estimated time
                </TimeDescription>
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