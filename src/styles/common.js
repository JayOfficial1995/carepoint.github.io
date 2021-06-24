import { css } from "styled-components";

export const CommonGridStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    grid-template-columns: 1fr;
  }
`;

export const FlexboxStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyle = css`
  background: ${(p) => p.theme.color.primaryColor};
  color: ${(p) => p.theme.color.whiteColor};

  padding: 0.8rem 2rem;
  border-radius: 5rem;
  border: 0.1rem solid ${(p) => p.theme.color.primaryColor};

  transition: 0.3s all linear;
  cursor: pointer;

  &:hover {
    background: none;
    color: ${(p) => p.theme.color.primaryColor};
    border: 0.1rem solid ${(p) => p.theme.color.primaryColor};
  }
`;

export const CustomContainer = css`
  max-width: 120rem;
  margin: 0 auto;
`;

export const CustomPadding = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
