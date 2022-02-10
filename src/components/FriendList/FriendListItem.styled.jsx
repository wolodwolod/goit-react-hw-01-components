import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 80px;
  background-color: #fafafa;
  border: 1px solid gray;
  border-radius: 5px;
    overflow: hidden;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FrendStatus = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FrendAvatar = styled.img`
  margin-left: 15px;
  width: 60px;
  border-radius: 5px;
`;

export const FrendName = styled.p`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;
