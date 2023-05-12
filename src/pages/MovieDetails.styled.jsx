import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid lightgray;
`;

export const Img = styled.img`
  max-width: 700px;
  max-height: 500px;
`;

export const Info = styled.div`
  margin-left: 20px;
  padding-left: 10px;
  border: 5px solid #8690ca;
  border-radius: 20px;
`;
export const MainTitle = styled.h2`
  font-size: 35px;
  line-height: 1.2;
`;

export const ScoreTitle = styled.p`
  margin: 50px 0px 50px 0px;
  font-size: 20px;
  line-height: 1.2;
`;

export const Title = styled.h3`
  margin: 50px 0px 0px 0px;
  line-height: 1.2;
  padding-bottom: 5px;
`;

export const AditionalTitle = styled.h3`
  text-align: center;
`;

export const LinkNav = styled(Link)`
  background: inherit;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  color: inherit;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  width: 60px;
  height: 20px;
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    background: linear-gradient(45deg, #8690ca, #404b80);
    color: #bfc3d4;
    background-size: cover;
  }
`;

export const Arrow = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: inherit;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  color: inherit;
  transition: all 0.3s ease;
  text-decoration: none;
  width: 100px;
  height: 20px;
  text-align: center;
  margin-bottom: 10px;
  &:hover {
    background: linear-gradient(45deg, #8690ca, #404b80);
    color: #bfc3d4;
    background-size: cover;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
