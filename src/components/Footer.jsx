import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    background-color: #E09900;
    color: #303030;
    padding: 80px 0px 80px 80px;
    gap: 20px;
    margin: 0;
    width: 100%;
`;

const TitleLeft = styled.h1`
    font-weight: 800;
    font-size: 45px;
`;

const Line = styled.span`
    width: 60px;
    height: 4px;
    background-color: #303030;
    margin-left: 10px;
    margin-bottom: 50px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 70%;
`;

const Inputs = styled.div`
    gap: 10px;
    display: flex;
`;

const Input = styled.input`
    width: 48%;
    padding: 15px;
    background-color: #faf4e6;
    border: 2px solid #424242;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    padding: 15px;
    height: 100px;
    background-color: #faf4e6;
    border: 2px solid #424242;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #f2c35e;
    border: 1px solid #f2c35e;
    border-radius: 5px;
    width: 100px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Shadow definition */

    &:hover {
        background-color: #303030;
        color: #e09900;
    }
`;


const Right = styled.div`
    display: flex;
    flex: 1;
    background-color: #303030;
    color: #E09900;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ListRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

const Item = styled.div`
    display: flex;
    gap: 20px;
`;

const Icon = styled.span`
    
`;

const Des = styled.p`
    
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <Left>
            <TitleLeft>Contactez-nous</TitleLeft>
            <Line></Line>
            <FormContainer>
                <Inputs>
                    <Input placeholder='Nom' />
                    <Input placeholder='Email' />
                </Inputs>
                <Textarea placeholder='Message' />
                <Button>Envoyer</Button>
            </FormContainer>

        </Left>
        <Right>
            <ListRight>
                <Item>
                    <Icon>a</Icon>
                    <Des>0770 45 49 48</Des>
                </Item>
                <Item>
                    <Icon>a</Icon>
                    <Des>imedsam4@gmail.com</Des>
                </Item>
                <Item>
                    <Icon>a</Icon>
                    <Des>Jijel, Algerie</Des>
                </Item>
            </ListRight>
        </Right>
      </Container>
    </Section>
  )
}

export default Footer
