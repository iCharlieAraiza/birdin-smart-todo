import React, { useState, useContext } from "react";
import styled from "styled-components";
import SettingsFormModal from "../SettingsModal/SettingsFormModal";
import GlobalContext from "../../context/GlobalContext";
import {AiOutlineRight, AiOutlineMail} from 'react-icons/ai'
import {BsKey} from 'react-icons/bs'

const SettingsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeOfModal, setTypeOfModal] = useState("");
  const { globalUser, updateGlobalUser } = useContext(GlobalContext);

  let user = globalUser;
  if (!user) {
    updateGlobalUser();
    user = globalUser;
  }

  const toggle = (type) => {
    setIsOpen(true);
    setTypeOfModal(type);
  };

  return (
    <>
      <Section className="fade" onClick={() => toggle("profile")}>
        <Wrapper>
          <Wrapper>
            <ProfileDisplay>
              <h2>CA</h2>
            </ProfileDisplay>
            <div>
              <Title>{user?.displayName}</Title>
              <LabelValue>Personal</LabelValue>
            </div>
          </Wrapper>
          <ButtonWrapp>
            {
              /*
              <UpdateButton onClick={() => toggle("profile")}>Update</UpdateButton>
              */
            }
            <ButtonContainer>
              <AiOutlineRight />
            </ButtonContainer>
          </ButtonWrapp>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <ImageContainer className="center-v">
            <BsKey />
          </ImageContainer>
          <div className="center-v auto-right">
            <FormGroup>
              <Label> Email </Label>
              <LabelValue>{user?.email}</LabelValue>
            </FormGroup>
          </div>
          <ButtonWrapp>
            <ButtonContainer>
              <AiOutlineRight />
            </ButtonContainer>
          </ButtonWrapp>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <ImageContainer className="center-v">
            <AiOutlineMail/>
          </ImageContainer>  


          <div className="center-v auto-right">
            <FormGroup>
              <Label> Password </Label>
              <LabelValue> ******** </LabelValue>
            </FormGroup>
          </div>
          
          <ButtonWrapp>
            <ButtonContainer>
              <AiOutlineRight />
            </ButtonContainer>
          </ButtonWrapp>
        </Wrapper>
      </Section>
      {isOpen && typeOfModal == "profile" && (
        <SettingsFormModal setIsOpen={setIsOpen} />
      )}
    </>
  );
};

const Section = styled.div`
  padding: 15px;
  max-width: 780px;
  margin-left: 2rem;
  border-radius: 4px;
  cursor: pointer;
  border-bottom: 1px solid #fbfbfb24;  
  &:first-child {
    border-top: 1px solid #fbfbfb24;
  }
  &:hover {
    background-color: #e1e1e117;
    transition: 0.4s;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const ProfileDisplay = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--placeholder-profile-blue);
  overflow: hidden;
  text-align: center;
  margin-right: 1rem;
`;

const FormGroup = styled.div`
  //margin-bottom: 1.5rem;
  margin: auto 0;
`;

const UpdateButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 21px;
  color: #111111;
  box-shadow: 1px 2px 1px #97bbd8;
  border: none;
  height: fit-content;
  &:hover {
    background-color: #979797;
    color: white;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 0.5rem;
  &:after {
    content: ":";
  }
`;

const ButtonWrapp = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
` 

const ButtonContainer = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 5px;
  &:hover {
    background-color: #ffffff3b;
  }
`

const ImageContainer = styled.div`
  font-size: 30px;
  margin-right: 1rem;
  svg {
    fill: var( --placeholder-profile-blue);
  }
`

const LabelValue = styled.span``;

export default SettingsForm;
