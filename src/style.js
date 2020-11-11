import styled from 'styled-components';

export const Maindiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 25%;
  transition: 0.5s;
  background-color: #32b8bf;
  margin: auto;
  margin-top: 2%;
  text-align: center;
  border-radius: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
`;

export const Seconddiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 75%;
  transition: 0.5s;
  /* background-color: ${props => props.color}; */
  margin: auto;
  margin-top: 2%;
  text-align: center;
  border-radius: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
`;

export const Title = styled.h1`
  margin: 0% 4% 0% 5%;
  color: #32b8;
  background-color:#55cde8dc;
  width: 90%;
  border-radius: 3%;
`;

export const Secondarytitle = styled.h2`
  padding: 1%;
  color: #263c97af;
`;

export const Line = styled.hr`
  width: 70%;
  color: #32b8bf;
`;

export const Sendbutton = styled.button`
  width: 60%;
  padding: 3%;
  background-color: #55cde8dc;
  color: #263c97af;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5%;
`;

export const Error = styled.span`
  font-size: 0.8rem;
  color: red;
`;