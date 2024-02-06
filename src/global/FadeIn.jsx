import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`

    from {
        opacity: 0;
        transform: translateY(-60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
