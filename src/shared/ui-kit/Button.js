import React from 'react';
import { name } from 'shared/utils/formatters';
import styled from 'styled-components';

export default function Button() {
    return (
        <div>
            <StyledButton>
                {name('Travis', 'King')}
            </StyledButton>
        </div>
    );
}

const StyledButton = styled.button`
    background: red;
`;

// Tagged Template Literal

