import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function UILink({
    children,
    ...rest
}) {
    return <Styled {...rest}>{children}</Styled>;
}

const Styled = styled(Link)`
    color: ${({ theme }) => theme.color.anchor}
`;

UILink.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
};
