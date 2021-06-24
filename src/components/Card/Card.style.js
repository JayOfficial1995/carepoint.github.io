import styled from "styled-components";
import { FlexboxStyle } from "../../styles/common";

export const HorizontalCardStyle = styled.figure`
  ${FlexboxStyle};

  justify-content: flex-start;

  .card-icon-wrapper {
    > svg {
      width: 2rem;
    }
  }

  .card-details {
    margin-left: 1rem;

    .heading {
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    .description {
      font-size: 1.2rem;
    }
  }
`;

export const BlogCardStyle = styled.figure`
  ${FlexboxStyle};

  flex-direction: column;
  text-align: center;

  .thumbnail-wrapper {
    .socail-icon {
      ${FlexboxStyle}

      justify-content: center;

      background: ${(p) => p.theme.color.whiteColor};
      padding: 1rem;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;

      > svg {
        width: 3rem;
        fill: ${(p) => p.theme.color.secondaryColor};
      }
    }
  }

  .heading {
    padding: 2rem 0;
    font-size: 2.5rem;
  }

  .blog-histroy {
    color: ${(p) => p.theme.color.primaryColor};
    font-size: 1.3rem;
    margin-bottom: 1rem;

    .publish-date {
      margin-right: 1rem;
      position: relative;

      &::after {
        content: "";
        width: 0.1rem;
        height: 80%;
        background: ${(p) => p.theme.color.secondaryColor};
        position: absolute;
        right: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.9rem;
  }

  .social-links-container {
    ${FlexboxStyle};

    margin-top: 1rem;

    .social-link {
      .icon {
        margin: 0.5rem;

        > svg {
          width: 2rem;
          fill: ${(p) => p.theme.color.primaryColor};
        }
      }
    }
  }
`;

export const VerticlalCardStyle = styled.figure`
  padding: 1rem;

  .card-header {
    ${FlexboxStyle};

    justify-content: flex-start;

    .card-icon {
      ${FlexboxStyle};

      justify-content: center;
      background: ${(p) => p.theme.color.primaryColor};
      padding: 1rem;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;

      > svg {
        width: 2.5rem;
        fill: ${(p) => p.theme.color.whiteColor};
      }
    }

    .heading {
      margin-left: 2rem;
    }
  }

  .card-description {
    margin-top: 1rem;
  }
`;
