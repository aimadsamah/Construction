import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import coverImage from '../assets/chantier.jpg';

const Section = styled.div`
    color: #2F2E2E;
`;

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: flex;
    flex: 2;
    position: relative;
`;

const CoverImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(50vw - 50px);
    background-image: url(${coverImage});
    background-size: cover;
    background-position: center;
    z-index: -1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const LeftContainer = styled.div`
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 6;
    z-index: 1;
    background-color: white;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
`;

const BigTitle = styled.h1`
    font-weight: 900;
    font-size: 40px;
    width: 75%;
`;

const Line = styled.hr`
    width: 60px;
    height: 8px;
    border: none;
    background-color: orange;
    margin: 20px 0px;
`;

const Paragraphs = styled.div`
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    padding: 50px 0px;
`;

const Par = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h2`
    font-size: 26px;
`;

const Text = styled.p`
    font-size: 19px;
    line-height: 27px;
    word-spacing: 5px;
    color: gray;
`;

const Foot = styled.div`
    display: flex;
    font-weight: bold;
`;

const FootLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    flex: 1;
    background-color: orange;
    gap: 15px;
`;

const Num = styled.div`
    font-size: 50px;
    font-weight: 800;
`;

const Desc = styled.div`
    font-size: 20px;
`;

const FootRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    flex: 1;
    background-color: #2F2E2E;
    color: white;
    gap: 15px;
`;

const Aucun = () => {
    const [countLeft, setCountLeft] = useState(0);
    const [countRight, setCountRight] = useState(0);
    const scrollRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (
                scrollRef.current.getBoundingClientRect().bottom <= window.innerHeight
            ) {
                const intervalIdLeft = setInterval(() => {
                    setCountLeft(prevCount => {
                        if (prevCount === 20) {
                            clearInterval(intervalIdLeft);
                            return prevCount;
                        } else {
                            return prevCount + 1;
                        }
                    });
                }, 500);
        
                const intervalIdRight = setInterval(() => {
                    setCountRight(prevCount => {
                        if (prevCount === 200) {
                            clearInterval(intervalIdRight);
                            return prevCount;
                        } else {
                            return prevCount + 1;
                        }
                    });
                }, 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Section>
            <Container>
                <Left>
                    <CoverImage />
                    <LeftContainer>left</LeftContainer>
                </Left>
                <Right ref={scrollRef}>
                    <RightContainer>
                        <BigTitle>Aucun projet n’est trop petit ou trop grand</BigTitle>
                        <Line></Line>
                        <Paragraphs>
                            <Par>
                                <Title>Construction Résidentielle</Title>
                                <Text>Notre expertise dans la construction résidentielle se traduit par la réalisation de maisons exceptionnelles, conçues pour allier confort, esthétique et durabilité. Chaque projet est abordé avec précision, de la conception à la remise des clés.</Text>
                            </Par>
                            <Par>
                                <Title>Rénovation et Remodelage</Title>
                                <Text>Transformez votre espace existant en quelque chose de nouveau et de rafraîchissant avec nos services de rénovation et de remodelage. De la modernisation des intérieurs à l’ajout d’espaces fonctionnels, nous sommes là pour donner vie à vos idées.</Text>
                            </Par>
                            <Par>
                                <Title>Projets Commerciaux</Title>
                                <Text>Que ce soit la construction de bureaux, de centres commerciaux ou d’infrastructures complexes, nous sommes équipés pour mener à bien des projets commerciaux de toutes tailles. Notre engagement envers l’efficacité et la qualité fait de nous le partenaire idéal pour vos ambitions commerciales.</Text>
                            </Par>
                        </Paragraphs>
                    </RightContainer>
                    <Foot>
                        <FootLeft>
                            <Num>{countLeft}</Num>
                            <Desc>ANNÉES D'EXPÉRIENCE ET D'EXCELLENCE</Desc>
                        </FootLeft>
                        <FootRight>
                            <Num>{countRight} +</Num>
                            <Desc>PROJETS COMPLÉTÉS ET CLIENTS SATISFAITS</Desc>
                        </FootRight>
                    </Foot>
                </Right>
            </Container>
        </Section>
    );
};

export default Aucun;
