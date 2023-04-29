import styled from '@emotion/styled';

export const FriendSec = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px;
width: 500px;
margin-left: 20px;

`;

export const StatusElement = styled.span`
width: 25px;
height: 25px;
border-radius: 25px;
background-color: ${props => (props.id ? 'green' : 'red')};
`

export const FriendItem = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
padding: 15px;
min-width: 400px;
font-size: 30px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;
`