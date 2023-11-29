import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 96px 124px;
  background: var(--Black, #000);
  opacity: 0;
`;
const StyledContainer = styled.div`
  display: flex;
  padding: 72px;
  align-items: center;
  gap: 72px;
  align-self: stretch;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .ant-row{
    width: 100%;
  }
`;
const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
    margin: auto;
  }
`;
const StyledH2 = styled.h2`
  color: var(--White, #FFF);
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 54px */
  margin-bottom: 32px;
`;
const StyledForm = styled.div`
  width: 100%;
  height: auto;
  padding: 14px;
  background: #fff;
  border-radius: 8px;
`;

export {
  StyledSection,
  StyledContainer,
  StyledImage,
  StyledH2,
  StyledForm,
};
