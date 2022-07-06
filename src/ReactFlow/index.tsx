import React, { forwardRef } from 'react'
import { ReactFlowStore } from '../types/general';
import Wrapper from './Wrapper';


const ReactFlow = React.forwardRef((props, ref) => {
    return (
        <div>
            <Wrapper>
            </Wrapper>
        </div>
    );
});


export default ReactFlow;