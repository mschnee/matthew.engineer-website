import * as React from 'react';

import styled from 'styled-components';


const StyledPanel = styled.div`
    background-color: white;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1px;
    box-shadow: 2px 2px 6px rgba(0, 55, 0, 0.25);
    position: relative;
    overflow: hidden;
    ::after {
        position: absolute;
        content: '';
        left: 0; top: 0; bottom: 0;
        width: 4px;
        background-color: rgba(0, 147, 105, 1);
    }
`;

export interface PanelProps extends React.Props<React.StatelessComponent> {

}

export default function Panel(props: PanelProps) {
    return (
        <StyledPanel>
            test
        </StyledPanel>
    )
}