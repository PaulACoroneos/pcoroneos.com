import styled from 'styled-components';

export const BlogpostWrapper = styled.article`
    display:block;
    border: 5px solid ${props => props.theme.color.primary};
    border-radius:5px;
    background:${props => props.theme.color.white};
    border-radius:10px;
    padding:8px;
    margin: 8px 0px;
`;
