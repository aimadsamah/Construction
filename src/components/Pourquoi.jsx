import React from 'react'
import styled from 'styled-components'
import image from '../assets/reno.jpg'

const Section = styled.div`
    background-color: #3D3D3C;
    color: white;
    z-index: 1;
`;

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    padding: 60px;
    gap: 60px;
`;

const BigTitle = styled.h1`
    font-weight: 700;
    font-size: 50px;
`;

const Line = styled.span`
    width: 100px;
    height: 4px;
    background-color: orange;
`;

const Raisons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    margin-bottom: 5px;
    font-size: 21px;
    word-spacing: 5px;
`;

const Text = styled.p`
    line-height: 25px;
    word-spacing: 5px;
    font-size: 18px;
    width: 300px;
`;

const Button = styled.button`
    background-color: inherit;
    border: 2px solid orange;
    color: orange;
    padding: 17px;
    width: 280px;
    font-weight: bold;
    font-size: 17px;

    &:hover{
        background-color: orange;
        color: white;
    }
`;

const Right = styled.div`
    display: flex;
    flex: 6;
    flex-direction: column;
`;

const Image = styled.img`
    object-fit: cover;
    height: 600px;
`;

const Bottom = styled.div`
    display: flex;
    color: #2F2E2E;
`;

const BottomLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 30px;
    background-color: orange;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const BottomTitle = styled.h2`
    font-size: 27px;
    font-weight: 800;
`;

const BottomNumber = styled.div`
    font-size: 26px;
`;

const BottomRight = styled.div`
    display: flex;
    flex: 1;
    padding: 30px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const RightButton = styled.button`
    display: flex;
    background-color: inherit;
    border: 3px solid;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    padding: 10px;

    &:hover{
        background-color: #3D3D3C;
        color: white;
    }
`;

const Pourquoi = () => {
  return (
    <Section>
      <Container>
        <Left>
            <BigTitle>Pourquoi nous choisir ?</BigTitle>
            <Line></Line>
            <Raisons>
                <Item>
                    <Title>Qualité Exceptionnelle</Title>
                    <Text>Nous n’utilisons que des matériaux de la plus haute qualité et travaillons avec des professionnels qualifiés pour assurer un résultat exceptionnel.</Text>
                </Item>
                <Item>
                    <Title>Engagement envers les Délais</Title>
                    <Text>Nous comprenons l’importance des délais. Notre équipe travaille de manière efficace pour respecter les échéances convenues.</Text>
                </Item>
                <Item>
                    <Title>Transparence Totale</Title>
                    <Text>Nous croyons en une communication ouverte et transparente à chaque étape du projet. Vous serez informé de chaque progrès et chaque décision importante.</Text>
                </Item>
            </Raisons>
            <Button>QUI SOMMES-NOUS ?</Button>
        </Left>
        <Right>
            <Image src={image} />
            <Bottom>
                <BottomLeft>
                    <BottomTitle>Evaluez votre projet</BottomTitle>
                    <BottomNumber>0770 45 49 48</BottomNumber>
                </BottomLeft>
                <BottomRight>
                    <RightButton>FORMULAIRE DE DEMANDE RAPPEL</RightButton>
                </BottomRight>
            </Bottom>
        </Right>
      </Container>
    </Section>
  )
}

export default Pourquoi
