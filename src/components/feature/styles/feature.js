import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: calc(100% - 3rem);
    font-size: 3rem;
    font-weight: 900;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    max-width: 640px;
    font-size: 26px;
    font-weight: 400px;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
