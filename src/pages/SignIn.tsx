import React                              from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon                        from '@material-ui/icons/Twitter';
import SearchIcon                         from '@material-ui/icons/Search';
import PeopleOutlineIcon                  from '@material-ui/icons/PeopleOutline';
import MessageIcon                        from '@material-ui/icons/ModeCommentOutlined';


const useStyles = makeStyles((theme)=>({
    wrapper: {
        display : 'flex',
        height  : '100vh'
    }, 
    blueSide: {
        display         : 'flex',
        alignItems      : 'center',
        justifyContent  : 'center',
        backgroundColor : '#71c9f8',
        flex            : '0 0 50%',
        position        : 'relative',
        overflow        : 'hidden'
    },
    blueSideBigIcon: {
        position  : 'absolute',
        left      : '50%',
        top       : '50%',
        transform : 'translate(-50%, -50%)',
        width     : '350%',
        height    : '350%'
    },
    blueSideListInfo: {
        position  : 'relative',
        listStyle : 'none',
        padding   : 0,
        margin    : 0,
        width     : 380,
        '& h6': {
            display    : 'flex',
            alignItem  : 'center', 
            color      : 'white',
            fontWeight : 700,
            fontSize   : 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcons: {
        fontSize    : 32,
        marginRight : 10
    },
    loginSide: {
        display        : 'flex',
        alignItems     : 'center',
        justifyContent : 'center',
        flex           : '0 0 50%'
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight   : 700,
        fontSize     : 32,
        marginBottom : 60,
        marginTop    : 20
    },
    btn: {
        marginTop: 20
    }
}))

function SignIn() {
    const classes = useStyles();
     
    return (
        <div className = {classes.wrapper}>
            <section className = {classes.blueSide}>
                <TwitterIcon color = 'primary' className = {classes.blueSideBigIcon}/>
                 <ul className = {classes.blueSideListInfo}>
                    <li className = {classes.blueSideListInfoItem}> 
                        <Typography variant = 'h6'>
                            <SearchIcon className={classes.blueSideListInfoIcons}/>
                            Читайте о том, что вам интересно.
                        </Typography> 
                    </li>
                    <li className = {classes.blueSideListInfoItem}>
                        <Typography variant = 'h6'>
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcons}/>
                            Присоединяйтесь к общению.
                        </Typography> 
                    </li>
                    <li className = {classes.blueSideListInfoItem}> 
                        <Typography variant = 'h6'>
                            <MessageIcon className={classes.blueSideListInfoIcons}/>
                            Узнайте, о чем говорят в мире.
                        </Typography> 
                    </li>
                 </ul>
            </section> 
            <section className = {classes.loginSide}>
                <div className = {classes.loginSideWrapper}>
                <TwitterIcon color = 'primary' className = {classes.loginSideTwitterIcon}/>
                <Typography variant = 'h4' className = {classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                <Button className = {classes.btn} variant = 'contained' color = 'primary' fullWidth>
                    Зарегистрироватся
                </Button>
                <Button className = {classes.btn} variant = 'outlined' color = 'primary' fullWidth>
                    Войти
                </Button>
                </div>
            </section> 
        </div>
    )
}

export default SignIn
