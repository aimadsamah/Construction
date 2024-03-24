import React from 'react';
import styled from 'styled-components';
import Lottie from "lottie-react";
import animationData1 from "../assets/Animation1.json";
import animationData2 from "../assets/Animation2.json";
import animationData3 from "../assets/Animation3.json";
import backgroundImage from '../assets/chantier.jpg';

const Container = styled.div`
    display: flex;
    position: relative;
    background-image: url(${backgroundImage});
    background-size: cover;
    color: #2F2E2E;
`;

const Title = styled.h1`
    margin-bottom: 70px;
    font-weight: bold;
    font-size: 50px;
    display: flex;
    justify-content: center;
`;

// #2F2E2E
const Left = styled.div`
    background-color: #F6F6F4 ;
    color: #2F2E2E;
    flex: 3;
    padding: 70px 20px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const ListItem = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
`;

const Icon = styled.div`
    width: 300px;
    height: 230px;
    margin: 0 auto;
`;

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ItemTitle = styled.h2`
    font-weight: bold;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`
    font-size: 19px;
    font-weight: 300;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin: 0 20px;
    text-align: center;
`;

const Right = styled.div`
    flex: 6;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const RightBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Couleur de superposition semi-transparente */
    
`;

const Top = styled.div`
    
    display: flex;
    margin-top: 150px;
    margin-left: 150px;
    z-index: 1;
    background-color: #F39C12;
`;

const Line = styled.span`
    width: 15px;
    height: 60px;
    background-color: inherit;
    margin-top: 9px;
    margin-right: 10px;
`;

const Logo = styled.h1`
    font-size: 55px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F6F6F4;

`;

const Description = styled.p`
    width: 70%;
    margin-left: 150px;
    font-size: 30px;
    font-weight: 600;
    margin-top: 15px;
    word-spacing: 3px;
    z-index: 1;
    color: #F6F6F4;
`;


const Accueil = () => {
    return (
        <Container>
            <Left>
                <Title>Nos services</Title>
                <ListContainer>
                    <ListItem>
                        <Icon>
                            <Lottie animationData={animationData3} />
                        </Icon>
                        <Desc>
                            <ItemTitle>Construction d'immeubles</ItemTitle>
                            <Text>Nous excelleons dans la construction d’immeubles novateurs pour créer des espaces de vie et de travail exceptionnels.</Text>
                        </Desc>
                    </ListItem>
                    <ListItem>
                        <Icon>
                            <Lottie animationData={animationData2} />
                        </Icon>
                        <Desc>
                            <ItemTitle>Conception de fondations</ItemTitle>
                            <Text>Avec une approche technique pointue, nous bâtissons des bases qui résistent au passage du temps, assurant la sécurité de chaque structure.</Text>
                        </Desc>
                    </ListItem>
                    <ListItem>
                        <Icon>
                            <Lottie animationData={animationData1} />
                        </Icon>
                        <Desc>
                            <ItemTitle>Gestion des projets</ItemTitle>
                            <Text>Notre approche du management des travaux repose sur une coordination experte. De la planification minutieuse à la supervision constante sur le chantier, nous assurons une exécution fluide, de qualité élevée en toute sécurité.</Text>
                        </Desc>
                    </ListItem>
                </ListContainer>
            </Left>
            <Right>
                <RightBackgroundOverlay />
                <Top>
                    <Line></Line>
                    <Logo>BHM Constructions</Logo>
                </Top>
                <Description>Nous sommes fiers de bâtir l’avenir avec excellence et engagement. Forts de 20 années d’expérience dans l’industrie de la construction, nous sommes spécialisés dans la réalisation de projets variés, allant de la construction résidentielle à des projets commerciaux de grande envergure.</Description>
            </Right>
        </Container>
    )
}

export default Accueil;
