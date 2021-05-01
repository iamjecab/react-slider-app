import React from "react";
import GlobalStyles from "./GlobalStyles";
import img1 from "../images/slider-1.jpg";
import img2 from "../images/slider-2.jpg";
import img3 from "../images/slider-3.jpg";
import img4 from "../images/slider-4.jpg";
import styled from "styled-components";

const images = [img2, img1, img3, img4];

const AppContainer = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const SlidesContainer = styled.section``;

const Slide = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <SlidesContainer>
                    {images.map((img, index) => {
                        return <Slide key={index} src={img} />;
                    })}
                </SlidesContainer>
            </AppContainer>
        </>
    );
};

export default App;
