import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px auto 0 auto;
  width: 600px;
  border-collapse: collapse;
  border: 1px solid gray;
    background-color: #fafafa;
  
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color: #079aab;
  text-align: center;
  text-transform: uppercase;
  color: white;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid gray;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #079aab;
    }
  }
`;
