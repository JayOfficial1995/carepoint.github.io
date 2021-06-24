import styled from "styled-components";

export const SectionWrapperStyle = styled.section`
  padding: 5rem 1.5rem;
  color: ${(p) => p.theme.color.secondaryColor};

  .heading {
    padding: 1rem 0;
    font-size: 3rem;
    text-align: center;
  }

  .description {
    max-width: 59rem;
    margin: 0 auto;
    text-align: center;
  }
`;
