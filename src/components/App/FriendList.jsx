
import {FriendListStyle,Item,Status} from '../styled/FriendListStyle'
const FriendList = ({friends}) => {
    return (<FriendListStyle>
    {friends.map(({id,isOnline,avatar,name}) => (
    <Item key = {id}>
    <Status prop={isOnline} ></Status>
    <img  src={avatar }alt="User avatar" width="48" />
    <p >{ name}</p>
   </Item>))
 }

</FriendListStyle>
    );
}

export default FriendList;