import styled from "styled-components";
import {
  CustomContainer,
  CustomPadding,
  FlexboxStyle,
} from "../../styles/common";

export const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  background: ${(p) => p.theme.color.whiteColor};
  box-shadow: 0px 2px 5px 2px rgba(118, 118, 118, 0.19);

  z-index: 5;

  .navbar-wrapper {
    ${CustomContainer};
    ${CustomPadding};

    padding-top: 1.5rem;

    .top-menubar {
      ${FlexboxStyle};

      border-bottom: 0.1rem solid ${(p) => p.theme.color.lightGrayColor};
      padding-bottom: 1rem;

      @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
        flex-direction: column;
      }

      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        align-items: flex-start;

        position: relative;
      }

      .logo-container {
        @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
          ${FlexboxStyle};

          width: 100%;
        }

        .logo-wrapper {
          display: block;
          width: 18rem;

          .site-logo {
            max-width: 100%;
          }
        }

        .toggle-icon {
          cursor: pointer;
          display: none;

          @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
            display: block;
          }

          .bar {
            content: "";
            width: 3rem;
            height: 0.5rem;
            background: ${(p) => p.theme.color.secondaryColor};
            margin: 0.4rem 0;
            border-radius: 5rem;

            &:first-child {
              width: 1.5rem;
            }

            &:last-child {
              width: 1.5rem;
              float: right;
              margin: 0;
            }
          }
        }
      }

      .contact-info {
        ${FlexboxStyle};

        @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
          display: none;
        }

        .contact-details {
          color: ${(p) => p.theme.color.secondaryColor};

          margin-left: 10rem;

          @media (max-width: ${(p) => p.theme.breakPoints.desktops}) {
            margin-left: 6rem;
          }

          @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
            margin-left: 3rem;
          }

          @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
            margin-left: 0;
            margin-bottom: 1rem;
          }

          .card-icon-wrapper {
            ${FlexboxStyle};

            justify-content: center;

            background: ${(p) => p.theme.color.primaryColor};

            padding: 1rem;
            border-radius: 50%;
            width: 4.5rem;
            height: 4.5rem;

            > svg {
              fill: ${(p) => p.theme.color.whiteColor};
            }
          }
        }
      }
    }
  }
`;

export const MenubarBeltStyle = styled.section`
  ${FlexboxStyle};

  padding: 3rem 0;

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: unset;

    position: absolute;
    top: 0;
    left: ${(p) => (p.toggleActive ? "0" : "-100%")};

    background: ${(p) => p.theme.color.secondaryColor};

    width: 100%;
    height: 100vh;

    z-index: 5;
    transition: 0.3s all linear;
  }

  .cancel-icon {
    display: none;

    @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
      display: block;
    }

    > svg {
      fill: ${(p) => p.theme.color.whiteColor};

      width: 1.5rem;
      position: absolute;
      right: 1rem;
      top: 2rem;
    }
  }

  .menubar-wrapper {
    ${FlexboxStyle};

    list-style: none;

    @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
      flex-direction: column;
      align-items: flex-start;
    }

    .menu-item {
      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        margin: 1rem 0;
      }
      .menu-item-link {
        padding: 1rem;
        text-decoration: none;
        font-size: 1.8rem;
        color: ${(p) => p.theme.color.secondaryColor};
        font-weight: 500;

        transition: 0.3s all linear;

        @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
          color: ${(p) => p.theme.color.whiteColor};
        }

        &:hover {
          color: ${(p) => p.theme.color.primaryColor};
        }
      }
    }
  }

  .social-media-details {
    ${FlexboxStyle};

    list-style: none;

    .social-link {
      @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
        margin-top: 3rem;
      }

      .social-link-item {
        margin-left: 2rem;

        @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
          margin-left: 0rem;
          margin-right: 2rem;
        }

        > svg {
          width: 2rem;
          fill: ${(p) => p.theme.color.secondaryColor};

          @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
            fill: ${(p) => p.theme.color.whiteColor};
          }

          &:hover {
            fill: ${(p) => p.theme.color.primaryColor};
          }
        }
      }
    }
  }
`;
