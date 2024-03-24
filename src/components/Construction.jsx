import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background-color: #F9F9F8;
    color: #2F2E2E;
    padding-bottom: 200px;
`;

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    gap: 30px;
    padding: 50px 30px 100px 100px;
`;

const BigTitle = styled.h1`
    font-weight: 900;
    font-size: 50px;
    color: #464646;
`;

const Line = styled.span`
    display: flex;
    background-color: orange;
    width: 70px;
    height: 6px;
`;

const BigDesc = styled.p`
    color: gray;
    font-size: 20px;
    word-spacing: 4px;
    width: 320px;
    margin-right: 20px;
`;

const Right = styled.div`
    display: flex;
    flex: 5;
`;

const List = styled.div`
    background-color: white;
    margin: 50px 100px 150px 10px;
    width: 650px;
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 30px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h3`
    width: 87%;
`;

const Icon = styled.div`
    background-color: orange;
    color: white;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`;

const Bottom = styled.div`
    letter-spacing: 1px;
    word-spacing: 4px;
    line-height: 20px;
    color: gray;
    margin-bottom: 40px;
    width: 90%;
`;

const Hr = styled.hr`
    border-top: 1px solid #F6F6F4;
`;

const Construction = () => {
    // Ajouter des états locaux pour le contrôle de l'affichage/masquage des descriptions
    const [showDesc1, setShowDesc1] = useState(false);
    const [showDesc2, setShowDesc2] = useState(false);
    const [showDesc3, setShowDesc3] = useState(false);
    const [showDesc4, setShowDesc4] = useState(false);

    // Fonctions pour basculer l'état de l'affichage/masquage des descriptions
    const toggleDesc1 = () => setShowDesc1(!showDesc1);
    const toggleDesc2 = () => setShowDesc2(!showDesc2);
    const toggleDesc3 = () => setShowDesc3(!showDesc3);
    const toggleDesc4 = () => setShowDesc4(!showDesc4);

    return (
        <Section>
            <Container>
                <Left>
                    <BigTitle>Construisons votre projet ensemble !</BigTitle>
                    <Line></Line>
                    <BigDesc>Prêt à concrétiser votre projet de construction avec nous ? Contactez notre équipe dès aujourd’hui pour discuter de vos besoins et obtenir un devis personnalisé.</BigDesc>
                </Left>
                <Right>
                    <List>
                        <ListItem>
                            <Top>
                                <Title>Quels types de projets de construction votre entreprise prend-elle en charge ?</Title>
                                <Icon onClick={toggleDesc1}>{showDesc1 ? "-" : "+"}</Icon>
                            </Top>
                            {showDesc1 && <Bottom>Notre entreprise de construction prend en charge une variété de projets, allant de la construction résidentielle à des projets commerciaux de grande envergure. Que vous ayez besoin de construire une nouvelle maison, de rénover des espaces existants ou de réaliser des projets commerciaux complexes, notre équipe qualifiée est prête à relever le défi. Nous avons une vaste expérience dans la construction d’immeubles, la conception de fondations, le management de travaux, et bien d’autres aspects de l’industrie de la construction. N’hésitez pas à nous contacter pour discuter de vos besoins spécifiques et découvrir comment nous pouvons concrétiser votre projet.</Bottom>}
                        </ListItem>
                        <Hr />
                        <ListItem>
                            <Top>
                                <Title>Comment puis-je obtenir un devis pour mon projet spécifique ?</Title>
                                <Icon onClick={toggleDesc2}>{showDesc2 ? "-" : "+"}</Icon>
                            </Top>
                            {showDesc2 && <Bottom>Pour obtenir un devis personnalisé pour votre projet, veuillez nous contacter directement via notre formulaire en ligne sur notre site web. Assurez-vous de fournir autant de détails que possible sur la nature de votre projet, vos besoins spécifiques et toute information pertinente qui pourrait influencer l’estimation des coûts. Une fois que nous aurons reçu votre demande, notre équipe étudiera attentivement les détails de votre projet et vous fournira un devis détaillé, adapté à vos besoins particuliers. Nous sommes impatients de discuter de votre projet et de vous offrir une solution sur mesure qui correspond à vos attentes.</Bottom>}
                        </ListItem>
                        <Hr />
                        <ListItem>
                            <Top>
                                <Title>Quels sont les délais typiques pour la réalisation des projets de construction ?</Title>
                                <Icon onClick={toggleDesc3}>{showDesc3 ? "-" : "+"}</Icon>
                            </Top>
                            {showDesc3 && <Bottom>Les délais pour la réalisation des projets de construction peuvent varier en fonction de la nature et de la complexité spécifiques de chaque projet. Lorsque vous nous contactez pour discuter de votre projet, nous évaluons attentivement les exigences et déterminons un calendrier réaliste en tenant compte de facteurs tels que la taille du projet, la disponibilité des matériaux, les conditions météorologiques et d’autres considérations importantes. Nous nous efforçons toujours de respecter les délais convenus avec nos clients et de garantir une exécution efficace et ponctuelle de chaque étape du processus de construction. Notre engagement envers la transparence signifie que nous vous tiendrons informés des échéanciers tout au long du projet.</Bottom>}
                        </ListItem>
                        <Hr />
                        <ListItem>
                            <Top>
                                <Title>Comment garantissez-vous la qualité et la conformité de vos travaux aux normes en vigueur ?</Title>
                                <Icon onClick={toggleDesc4}>{showDesc4 ? "-" : "+"}</Icon>
                            </Top>
                            {showDesc4 && <Bottom>Nous garantissons la qualité et la conformité de nos travaux aux normes les plus élevées de l’industrie de la construction. Notre équipe de professionnels expérimentés est formée pour respecter les réglementations locales et nationales, en mettant l’accent sur la sécurité, la durabilité et la qualité des matériaux utilisés.

                            En matière de gestion de projet, nous suivons une approche rigoureuse pour assurer une supervision constante sur le chantier. Nous travaillons en étroite collaboration avec nos clients tout au long du processus, favorisant une communication ouverte et transparente. De plus, nous effectuons des contrôles de qualité réguliers pour garantir que chaque étape du projet répond aux normes élevées que nous nous sommes fixées.

                            Votre satisfaction est notre priorité, et notre engagement envers l’intégrité et l’excellence guide chaque aspect de notre travail. N’hésitez pas à poser des questions spécifiques sur nos procédures de qualité et de conformité lors de la consultation de votre projet.</Bottom>}
                        </ListItem>
                    </List>
                </Right>
            </Container>
        </Section>
    );
};

export default Construction;
