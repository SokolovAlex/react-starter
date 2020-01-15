import styled from "styled-components";

export const Nav = styled.nav`
    padding: 1rem;
    background: #fff;
    border: 1px solid #e7e7e7;
    h1 {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.875rem;
    }
    > * {
        margin: 0 10px;
        display: inline-block;
        margin-top: 0;
    }
`;

export const Title = styled.h1`
    font-size: 6vmin;
    line-height: 1em;
    font-weight: bold;
`

export const Wrapper = styled.div`
    padding: 4rem 1rem;
    margin: 0 auto;
    @media (min-width: 801px) {
        width: 80vw;
    }
    max-width: 1140px;
`;