import styled from 'styled-components/'

export const FriendListStyle = styled.ul`
list-style:none;
    justify-content: center;
    display: grid;
`;
export const Item = styled.li`
display:flax;
box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
padding:10px 50px 10px 10px;
border-radius:5px
`;
export const Status = styled.div`
width:10px;
height:10px;
border-radius:20px;
background-color:${({ prop }) => (prop ? 'green' : 'red')};
margin: 16px 0;
margin-right:5px;
`;

