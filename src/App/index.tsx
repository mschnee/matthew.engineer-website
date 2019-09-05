import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components';

import Panel from '../components/Panel';
import Card from '../components/Card';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;
const CardContainer = styled.div`
    display: flex;
    flex-basis: 25%;
    justify-content: space-around;

`;
function App() {
    return (
        <PageContainer>
            <Card>Oh, hi</Card>
        </PageContainer>
    );
}

export default hot(App);