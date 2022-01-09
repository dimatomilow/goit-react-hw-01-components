import {List} from '../styled/List'

import {ProfileStyle,Stats,TitleStats,ValueStats} from '../styled/ProfileStyles'
const Profile = (props) => {
    return (
<ProfileStyle >
    <div >
    <img src={props.avatar }
     alt="User avatar"  width="200"/>
   <h1 >{props.username }</h1>
   <p >{ props.tag}</p>
   <p >{ props.location}</p>
  </div>
   <List >
    <Stats>
      <TitleStats >Followers</TitleStats>
      <ValueStats >{ props.stats.followers}</ValueStats>
    </Stats>
    <Stats>
    <TitleStats >Views</TitleStats>
    <ValueStats >{ props.stats.views}</ValueStats>
    </Stats>
    <Stats>
    <TitleStats >Likes</TitleStats>
    <ValueStats >{ props.stats.likes}</ValueStats>
    </Stats>
  </List>
</ProfileStyle>
    );
}

export default Profile;

