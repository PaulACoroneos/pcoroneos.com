import styled from 'styled-components';

export const BlogWrapper = styled.div`
  margin: 8px auto;
  max-width: 800px;
  flex: 1 0 auto;
`;

export const BlogpostWrapper = styled.article`
    display:block;
    border-radius:5px;
    background:#FAFAFA;
    border-radius:10px;
    padding:8px;
    margin: 32px 0px;
    font-size:18px;
`;

export const StyledImage = styled.img`
  display: block;
  width:100%;
  margin: 0 auto;
`;

export const StyledBlogLinkTitle = styled.h3`
  cursor: pointer;

  :hover {
    color: ${ props => props.theme.color.primary}
  }
`;

export const BlogContent = styled.section`
  display:flex;
  flex-direction:column;
  align-items:start;
  border-radius:5px;
  background:#FAFAFA;
  padding:8px;
  margin: 8px 0px;
  font-size:18px;
  
  h3 {
    margin:16px 0;
  }

  p {
    margin: 8px 0;
  }
  
`;

export const StyledBackLink = styled.button`
  padding:0;
  margin:0;
  text-decoration:none;
  border:none;
  background:none;
  cursor:pointer;
`;

export const BlogPostImage = styled.div`
  display:flex;
  flex-direction:column;
  p {
    margin: 4px auto;
  }
`;
