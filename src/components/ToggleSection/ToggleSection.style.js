import styled from "styled-components";

import { FlexboxStyle } from "../../styles/common";

export const ToggleSectionStyle = styled.section`
  .header {
    ${FlexboxStyle};

    justify-content: flex-start;
    background: ${(p) => p.theme.color.primaryColor};
    padding: 0.5rem;
    border-radius: 50rem;
    /* margin-bottom: 1.5rem; */
    cursor: pointer;

    &.background-toggle {
      background: ${(p) => p.theme.color.lightGrayColor};

      .heading {
        color: ${(p) => p.theme.color.secondaryColor};
      }
    }

    .icon {
      ${FlexboxStyle};

      justify-content: center;

      background: ${(p) => p.theme.color.whiteColor};
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      margin-right: 1rem;

      > svg {
        width: 1rem;
        fill: ${(p) => p.theme.color.primaryColor};
      }
    }

    .heading {
      font-size: 1.4rem;
      color: ${(p) => p.theme.color.whiteColor};
    }
  }

  .decription {
    padding: 0.5rem;
    height: 8rem;
    visibility: visible;
    font-size: 1.2rem;
    line-height: 2rem;
    transition: 0.15s all linear;

    &.toggle-para {
      height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
`;
