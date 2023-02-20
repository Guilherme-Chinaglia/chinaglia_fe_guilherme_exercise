import styled, {keyframes} from 'styled-components';

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerBody = styled.div`
    height: 4rem;
    width: 4rem;
    border: 4px solid #d1d5db;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: ${spinnerAnimation} 800ms linear infinite;
`;