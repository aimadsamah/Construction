// BackgroundImage.jsx
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/chantier.jpg"; // Assurez-vous d'avoir le chemin correct vers votre image

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Pour s'assurer que l'image est derrière les autres éléments */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Pour s'assurer que l'image couvre tout le conteneur */
`;

const BackgroundImage = () => {
  return (
    <Background>
      <Image src={backgroundImage} alt="Background" />
    </Background>
  );
};

export default BackgroundImage;
