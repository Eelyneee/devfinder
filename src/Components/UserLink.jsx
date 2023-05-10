import { Icon } from '@iconify/react';
import classes from './UserLink.module.css'

export default function UserLink(props){
    return(<div className={classes.box}>
        <Icon className={ props.title === 'Not Available' && classes.invalid} icon={props.icon} />
        {props.link ? <a herf={props.link} target='_blank'>
        <p className={ props.title === 'Not Available' && classes.invalid}>{props.title}</p>
    </a> :  <p className={ props.title === 'Not Available' && classes.invalid}>{props.title}</p> }
    
    </div>)
}