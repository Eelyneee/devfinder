import SearchBar from "./SearchBar";
import UserBox from "./UserBox";
import classes from './UserCard.module.css'
import UserLink from "./UserLink";
import '../App.css'

export default function UserCard(props){
    const user = props.info;
    const date = user.created_at.slice(0, 10);

    return(<>
       <div className={`${classes.outer} card`}>
        <div className={classes.first}>
                <div className={classes.imgBox}>
                        <img src={user.avatar_url} alt={user.login}/>
                </div>
                <div className={classes.nameBox}>
                    <div>
                        <p className={classes.name}>{ user.name ? user.name : user.login}</p>
                        <p className={classes.username}>{`@${user.login}`}</p>
                    </div>
                    <p className={classes.date}>{JSON.stringify(user) === '{}'? '' :`Joined at ${date}`}</p>
                </div>
        </div>
        <div className={classes.second}>
            <div className={classes.empty}></div>
        <div className={classes.details}>
                <p className={classes.bio}>{user.bio ? user.bio : 'The profile has no bio.'}</p>
                <div className={`${classes.boxes} boxes`}>
                    <UserBox title="Repos" number={user.public_repos} />
                    <UserBox title="Follwers" number={user.followers} />
                    <UserBox title="Following" number={user.following} />
                </div>
                <div className={classes.links}>
                    <UserLink icon="material-symbols:location-on" title={user.location?user.location:'Not Available'} />
                    <UserLink icon="mdi:twitter" title={ user.twitter ? `@${user.twitter_username}` : 'Not Available'} link={''} />
                    <UserLink icon="solar:link-broken" title={user.html_url?user.html_url:'Not Available'} link={user.html_url} />
                    <UserLink icon="mdi:company" title={user.company?user.company:'Not Available'} />
                </div>
        </div>
        </div>
            
       </div>
    </>);
}