import styled from "styled-components";

import { ButtonStyle } from "../../styles/common";

export const ContactFormStyle = styled.section`
  .custom-input {
    background: none;
    padding: 1.5rem;
    border: none;
    border-bottom: 0.1rem solid ${(p) => p.theme.color.battleshipGreyColor};
    width: 100%;
    outline: none;

    color: ${(p) => p.theme.color.whiteColor};

    &::-webkit-input-placeholder {
      color: ${(p) => p.theme.color.battleshipGreyColor};
    }

    &::-ms-input-placeholder {
      color: ${(p) => p.theme.color.battleshipGreyColor};
    }

    & ::placeholder {
      color: ${(p) => p.theme.color.battleshipGreyColor};
    }
  }

  .submit-btn {
    ${ButtonStyle};

    margin-top: 1.5rem;
  }
`;
