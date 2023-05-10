import classes from './UserBox.module.css'
export default function UserBox(props){
    return(<div className={classes.box}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.number}>{props.number}</p>
    </div>)
}