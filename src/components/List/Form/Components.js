import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative; 
    width: 7rem;
`

export const LabelBox = styled.div`
display: flex;
align-items: center;
justify-content: end;
text-transform: capitalize;
font-size: 12px;
cursor: pointer ;
svg{
    width: 19px;
    height: 19px;
    opacity: 0.75;
}
`

export const DropdownBox = styled.div`
    position: absolute;
    top: 1.8rem;
    width: 100%;
    background-color: var(--pop-input--bg-color);
    border: 1px solid #666666;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    z-index: 2;
    border-radius: 3px;
    //padding: 5px 2px;
`

export const DropdownItem = styled.div`
    padding: 6px 5px;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    align-items: center;
    text-transform: capitalize;
    &:hover, &.active{
        background-color: var(--bg);
    }
`

