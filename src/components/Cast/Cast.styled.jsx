import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: center;
  padding: 20px 0 20px;
`;

export const Item = styled.li`
  width: 180px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: transform linear 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  border-radius: 3px;
`;

export const Title = styled.p`
  margin: 5px 0px 8px 3px;
`;

export const Text = styled.b`
  margin: 0px 0px 8px 3px;
`;
