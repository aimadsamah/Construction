import React from 'react'
import styled from 'styled-components'
import projet from '../assets/projet.jpg'

const Section = styled.div`
    color: #2F2E2E;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 100px;
    background-color: white;
    margin: 100px 50px;
    border: 2px solid lightgray;
    
    box-shadow: 10px 10px 12px rgba(0.5, 0.5, 0.5, 0.5); /* Ombre */

`;

const BigTitle = styled.h1`
    font-weight: 900;
    font-size: 60px;
`;

const Line = styled.span`
    width: 100px;
    height: 9px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Elements = styled.div`
    display: flex;
    gap: 50px;
`;

const Element = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid lightgray;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 60px;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Ombre */
    transition: box-shadow 0.3s ease; /* Transition pour l'effet de hover */

    /* Effet de hover */
    &:hover {
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

const Image = styled.img`
    width: 100%;
    border: 1px solid ;
`;

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Title = styled.h2`
    
`;

const Text = styled.p`
    color: gray;
    font-size: 18px;
    word-spacing: 3px;
    line-height: 23px;
`;

const Button = styled.button`
    padding: 8px;
    background-color: inherit;
    border: 2px solid lightgray;
    font-weight: bold;
    width: 50%;
    color: gray;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Ombre */
    transition: box-shadow 0.3s ease; /* Transition pour l'effet de hover */

    /* Effet de hover */
    &:hover {
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

const Derniers = () => {
  return (
    <Section>
      <Container>
      <BigTitle>Nos derniers projets</BigTitle>
      <Line></Line>
      <Elements>
        <Element>
            <Image src={projet} />
            <Desc>
                <Title>Titre du projet</Title>
                <Text>praesentium ex dolor dolorem est rerum beatae est adipisci iste est culpa voluptas est consequatur magni. Ut quisquam distinctio sit aliquam laborum et nulla perferendis ut animi doloribus. Est commodi fugit qui rerum quibusdam sed quibusdam provident id accusantium laboriosam ut sunt officia cum voluptatem porro.</Text>
                <Button>EN SAVOIR PLUS</Button>
            </Desc>
        </Element>
        <Element>
            <Image src={projet} />
            <Desc>
                <Title>Titre du projet</Title>
                <Text>praesentium ex dolor dolorem est rerum beatae est adipisci iste est culpa voluptas est consequatur magni. Ut quisquam distinctio sit aliquam laborum et nulla perferendis ut animi doloribus. Est commodi fugit qui rerum quibusdam sed quibusdam provident id accusantium laboriosam ut sunt officia cum voluptatem porro.</Text>
                <Button>EN SAVOIR PLUS</Button>
            </Desc>
        </Element>
        <Element>
            <Image src={projet} />
            <Desc>
                <Title>Titre du projet</Title>
                <Text>praesentium ex dolor dolorem est rerum beatae est adipisci iste est culpa voluptas est consequatur magni. Ut quisquam distinctio sit aliquam laborum et nulla perferendis ut animi doloribus. Est commodi fugit qui rerum quibusdam sed quibusdam provident id accusantium laboriosam ut sunt officia cum voluptatem porro.</Text>
                <Button>EN SAVOIR PLUS</Button>
            </Desc>
        </Element>
      </Elements>
      </Container>
    </Section>
  )
}

export default Derniers
