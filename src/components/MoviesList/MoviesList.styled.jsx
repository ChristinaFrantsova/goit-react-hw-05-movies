import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 20px;
`;
export const Item = styled.li`
  width: 200px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: transform linear 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  max-width: 200px;
  border-radius: 3px;
`;
export const MainTitle = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const Title = styled.h3`
  margin: 10px 0 20px;
  text-align: center;
  font-size: 18px;
`;
