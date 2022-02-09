import styled from 'styled-components';

export const UserProfile = styled.section`
  margin: 50px auto;
  width: 300px;
  background-color: #fafafa;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden; `;

export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;`;
  
export const Avatar = styled.img`
width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: gray;`;
  
export const UserName = styled.p`
margin-top: 20px;
  font-size: 24px;
  font-weight: 700;`; 
  
export const Info = styled.p`
margin: 5px 0px;
  font-size: 16px;
  color: gray;`;
  
export const StatsList = styled.ul`
display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
  padding: 0px;`
  
export const StatsItem = styled.li`
display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: #f0f0f0;

  :not(:last-child) {
  border-right: 1px solid #e1e1e1;}
  `;
  
export const Label = styled.span`
color: gray;`;
  
export const Quantity = styled.span`font-size: 16px;
  font-weight: 700;`;
  

