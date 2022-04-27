import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { GoCheck } from 'react-icons/go'
import GlobalContext from '../../../context/GlobalContext'

const CheckButton = ({ item, isChecked = '' ,setIsChecked = () =>{} }) => {
    const [check, setCheck] = useState(item.isChecked)
    
    if(item === null) {
        throw new Error('Item is null')
    }

    useEffect(()=>{
        setCheck(item.isChecked)
    }, [item])

    const {dispatchCalEvent} = useContext(GlobalContext)
    const handlerCheck = () => {
        const newItem = {...item, isChecked: !check}
        dispatchCalEvent({type: 'update', payload: newItem})
        setCheck(!check)
        setIsChecked(!check)
    }

    if (check) {
        return (
            <CheckBtn className={check&&'active'} onClick={handlerCheck}>
                <GoCheck />
            </CheckBtn>
        )
    } else {
        return <CheckBtn onClick={handlerCheck}/>
    }
}

const CheckBtn = styled.div `
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid #ffffffb0;
    margin: 0 0.3rem;
    cursor: pointer;
    min-width: 1rem;
    &.active{
        background-color: #637c91;
    }
`


export default CheckButton