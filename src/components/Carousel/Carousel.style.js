import styled from "styled-components";
import { ButtonStyle } from "../../styles/common";

export const CarouselStyle = styled.section`
  width: 97%;
  margin: 0 auto;

  position: relative;

  .slider-content {
    position: absolute;
    top: 50%;
    left: 13%;
    transform: translateY(-50%);

    z-index: 2;

    text-align: center;
    width: 44rem;

    @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
      width: 30rem;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (max-width: ${(p) => p.theme.breakPoints.smallDevices}) {
      display: none;
    }

    .heading {
      color: ${(p) => p.theme.color.secondaryColor};
      font-size: 4rem;
      font-weight: 500;

      @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
        font-size: 3rem;
      }

      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
    }

    .description {
      color: ${(p) => p.theme.color.secondaryColor};
      font-size: 1.5rem;
      margin: 3rem 0;

      @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
        margin: 2rem 0;
      }

      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        display: none;
      }
    }

    .read-more-button {
      ${ButtonStyle};
    }
  }

  .slider-image-wrapper {
    width: 100%;
    height: 50rem;

    @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
      height: auto;
    }

    .slider-image {
      width: 100%;
      height: inherit;
    }
  }

  .slick-slider {
    .slick-arrow {
      display: none !important;
    }
  }
`;
