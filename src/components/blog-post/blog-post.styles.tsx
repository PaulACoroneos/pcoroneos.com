import styled from 'styled-components';
import media from 'styled-media-query';

export const BlogWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin:8px;
  justify-content:center;
  flex: 1 0 auto;

  ${media.greaterThan('medium')`
    margin:8px auto;
    max-width: 600px;

  `}

  ${media.greaterThan('large')`
    max-width: 800px;
  `}
`;

export const BlogpostWrapper = styled.article`
    display:block;
    border-radius:5px;
    background:#FAFAFA;
    border-radius:10px;
    margin: 32px 8px;
    font-size:18px;
    padding:16px;

    a,a:visited, a:active {
      color: #6A85B7;
      text-decoration:none
    }
    a:hover {
      color:#1D2D44;
      transition: all 0.3s ease-in-out 0s;
    }
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
  padding:16px;
  margin: 8px 0px;
  font-size:18px;
  
  h3 {
    margin:16px 0;
  }

  p {
    margin: 8px 0;
  }

  a,a:visited, a:active {
      color:inherit;
      text-decoration:none
    }
  a:hover {
    color:#6A85B7;
    transition: all 0.3s ease-in-out 0s;
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
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  p {
    margin: 4px auto;
  }
`;
