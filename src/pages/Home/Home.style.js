import styled from "styled-components";
import {
  CommonGridStyle,
  CustomPadding,
  CustomContainer,
  FlexboxStyle,
  ButtonStyle,
} from "../../styles/common";

export const HomeStyle = styled.main`
  margin-top: 10rem;

  @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
    margin-top: 18rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    margin-top: 7rem;
  }
`;

export const AboutUsStyle = styled.section`
  ${CustomPadding};
  ${CommonGridStyle};

  background: ${(p) => p.theme.color.primaryColor};

  .about-card {
    padding: 5rem 3rem;
    color: ${(p) => p.theme.color.whiteColor};

    transition: 0.2s all linear;

    &:hover {
      background: ${(p) => p.theme.color.seaGreenColor};
    }
  }
`;

export const WhyChooseUsStyle = styled.section`
  ${CustomContainer};
  ${CustomPadding};

  .section-container {
    ${CommonGridStyle};

    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem 20rem;

    margin-top: 5rem;
    justify-items: center;

    .card-wrapper {
      max-width: 40rem;

      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        max-width: unset;
      }

      .card-header {
        .heading {
          @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
            font-size: 2.5rem;
          }
        }
      }

      .card-description {
        @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const CounterStyle = styled.section`
  background: url("./images/counter-bg/counter-background.jpg") no-repeat;
  background-size: cover;

  padding: 6rem 0;

  .counters-container {
    ${CustomContainer};
    ${CommonGridStyle};

    color: ${(p) => p.theme.color.whiteColor};

    .counter-card {
      @media (max-width: ${(p) => p.theme.breakPoints.mediumDevices}) {
        margin-top: 2rem;
      }

      .thumbnail-wrapper {
        .socail-icon {
          background: unset;
          width: 10rem;

          > svg {
            width: 100%;
            fill: ${(p) => p.theme.color.whiteColor};
          }
        }
      }

      .heading {
        margin-top: 1rem;
        font-size: 3.5rem;
        padding: 1rem 0;
        border-bottom: 0.5rem solid ${(p) => p.theme.color.whiteColor};
      }

      .description {
        margin-top: 1.5rem;
        font-size: 2rem;
      }
    }
  }
`;

export const HowWeWorkStyle = styled.section`
  ${CustomContainer};
  ${CustomPadding};
  ${CommonGridStyle};

  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  padding: 3rem 0;

  .blogs-wrapper {
    ${CustomPadding};

    .title {
      font-size: 3rem;
      color: ${(p) => p.theme.color.secondaryColor};
    }

    .section-details {
      color: ${(p) => p.theme.color.secondaryColor};
      font-size: 1.2rem;
      line-height: 2rem;
      margin: 1.2rem 0;
    }

    .blog-container {
      ${CommonGridStyle};

      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
      margin-top: 5rem;

      .blog-card {
        align-items: flex-start;
        text-align: left;

        color: ${(p) => p.theme.color.secondaryColor};

        .thumbnail-wrapper {
          ${FlexboxStyle};

          .thumbnail {
            max-width: 100%;
          }
        }

        .heading {
          font-size: 1.8rem;
          margin-bottom: -1.5rem;
        }
      }
    }

    .button-wrapper {
      ${FlexboxStyle};

      .read-more-btn {
        ${ButtonStyle};
        margin: 2rem auto;
      }
    }
  }
`;

export const OurCreativeStyle = styled.section`
  ${CustomPadding};

  color: ${(p) => p.theme.color.secondaryColor};

  .title {
    font-size: 3rem;
    color: ${(p) => p.theme.color.secondaryColor};
  }

  .description {
    color: ${(p) => p.theme.color.secondaryColor};
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 1.2rem 0;
  }
`;

export const OurTeamStyle = styled.section`
  ${CustomPadding};

  background: ${(p) => p.theme.color.lightGrayColor};

  .teams-container {
    ${CustomContainer};
    ${FlexboxStyle};

    flex-wrap: wrap;

    margin-top: 5rem;

    @media (max-width: ${(p) => p.theme.breakPoints.smallDevices}) {
      justify-content: center;
    }

    .team-card {
      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        margin-bottom: 2.1rem;
      }

      .thumbnail-wrapper {
        ${FlexboxStyle};

        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        overflow: hidden;

        .thumbnail {
          max-width: 100%;
        }
      }

      .heading {
        margin-bottom: -1rem;
      }
    }
  }
`;
