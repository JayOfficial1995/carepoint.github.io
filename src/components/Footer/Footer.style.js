import styled from "styled-components";

import {
  CommonGridStyle,
  CustomContainer,
  CustomPadding,
  FlexboxStyle,
} from "../../styles/common";

export const FooterStyle = styled.footer`
  background: ${(p) => p.theme.color.darkColor};

  padding-top: 5rem;

  .footer-content {
    ${CustomContainer};
    ${CommonGridStyle};
    ${CustomPadding};

    align-items: flex-start;
    color: ${(p) => p.theme.color.battleshipGreyColor};

    .get-in-touch {
      .title {
        color: ${(p) => p.theme.color.whiteColor};

        padding: 1rem 0;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .footer-contact-details {
        padding: 1rem 0;

        .card-icon-wrapper {
          margin-right: 1rem;

          > svg {
            fill: ${(p) => p.theme.color.battleshipGreyColor};
            width: 2.5rem;
          }
        }

        .heading {
          text-transform: capitalize;
        }
      }

      .social-linls {
        ${FlexboxStyle};

        justify-content: flex-start;
        list-style: none;
        margin-top: 4rem;

        .social-link-wrapper {
          .social-link {
            margin-right: 2rem;

            .icon {
              > svg {
                width: 2rem;
                fill: ${(p) => p.theme.color.whiteColor};

                transition: 0.3s all linear;

                &:hover {
                  fill: ${(p) => p.theme.color.primaryColor};
                }
              }
            }
          }
        }
      }
    }

    .contact-form-wrapper {
      .title {
        color: ${(p) => p.theme.color.whiteColor};

        padding: 1rem 0;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

export const FooterLinksStyle = styled.article`
  .title {
    color: ${(p) => p.theme.color.whiteColor};

    padding: 1rem 0;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .footer-links-wrapper {
    list-style: none;

    .footer-link {
      padding: 1rem 0;

      .link {
        ${FlexboxStyle};

        justify-content: flex-start;
        text-decoration: none;

        .icon {
          > svg {
            width: 0.8rem;
            fill: ${(p) => p.theme.color.primaryColor};
          }
        }

        .text {
          color: ${(p) => p.theme.color.battleshipGreyColor};
          margin-left: 1.5rem;

          transition: 0.3s all linear;

          &:hover {
            color: ${(p) => p.theme.color.primaryColor};
          }
        }
      }
    }
  }
`;

export const FooterBeltStyle = styled.section`
  text-align: center;

  background: ${(p) => p.theme.color.blackColor};
  color: ${(p) => p.theme.color.battleshipGreyColor};
  padding: 5rem;
  margin-top: 3rem;

  .link {
    color: ${(p) => p.theme.color.battleshipGreyColor};
    padding: 0.1rem;
    transition: 0.3s all linear;

    &:hover {
      color: ${(p) => p.theme.color.whiteColor};
    }
  }
`;
