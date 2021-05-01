import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import img1 from "../images/slider-1.jpg";
import img2 from "../images/slider-2.jpg";
import img3 from "../images/slider-3.jpg";
import img4 from "../images/slider-4.jpg";
import img5 from "../images/slider-5.jpg";
import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";

const images = [img1, img2, img3, img4, img5];

const AppContainer = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const SlidesContainer = styled.section`
    display: flex;
    position: relative;

    /* dynamic styling via ids */
    #active-slide {
        transform: translateX(0);
        opacity: 1;
        z-index: 2;
    }
    #prev-slide {
        transform: translateX(-100%);
        opacity: 0;
        z-index: 1;
    }
`;

const Slide = styled.img`
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: 1;
    object-fit: cover;
    position: absolute;
    transform: translateX(100%);
    transition: all 0.8s ease-in-out;
`;

const IconContainer = styled.div`
    position: fixed;
    top: 50%;
    width: 100%;
    height: 5rem;
    z-index: 3;
    display: flex;
    justify-content: space-between;
`;

const PrevIcon = styled(GrFormNextLink)`
    font-size: 3rem;
    transform: rotate(180deg);
`;

const NextIcon = styled(GrFormNextLink)`
    font-size: 3rem;
    cursor: pointer;
`;

const App = () => {
    const [current, setCurrent] = useState(0);

    const nextSlideHandler = () => {
        if (current === images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    const prevSlideHandler = () => {
        if (current === 0) {
            setCurrent(images.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <IconContainer>
                    <PrevIcon onClick={prevSlideHandler} />
                    <NextIcon onClick={nextSlideHandler} />
                </IconContainer>
                <SlidesContainer>
                    {images.map((img, index) => {
                        let styleId;
                        if (current === index) {
                            styleId = "active-slide";
                        } else if (
                            index === current - 1 ||
                            (current === 0 && index === images.length - 1)
                        ) {
                            styleId = "prev-slide";
                        }

                        return <Slide key={index} src={img} id={styleId} />;
                    })}
                </SlidesContainer>
            </AppContainer>
        </>
    );
};

export default App;
