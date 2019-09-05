import * as React from 'react';

import styled from 'styled-components';


const transition = '250ms ease-in';
const StyledCard = styled.div`
    display: flex;
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1px;
    box-shadow: 2px 2px 6px rgba(0, 55, 0, 0.25);
    position: relative;
    overflow: hidden;
    transition: box-shadow ${transition};
    ::after {
        position: absolute;
        content: '';
        left: 0; top: 0; bottom: 0;
        width: 2px;
        background-color: rgba(0, 147, 105, 1);
        transition: width ${transition}, background-color ${transition};

    }
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 8px rgba(0, 55, 0, 0.5);
        ::after {
            width: 8px;
            background-color: rgba(0, 147, 105, 1);
        }
    }
`;

export interface PanelProps extends React.Props<React.StatelessComponent> { }

export default function Card(props: PanelProps) {
    return (
        <StyledCard>
            {props.children}
        </StyledCard>
    )
}