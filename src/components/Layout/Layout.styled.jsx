import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 3px solid lightgray;
`;

export const List = styled.ul`
  display: flex;
`;
export const Link = styled(NavLink)`
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
  &.active {
    background: linear-gradient(45deg, #8690ca, #404b80);
    color: #bfc3d4;
    background-size: cover;
  }
`;
