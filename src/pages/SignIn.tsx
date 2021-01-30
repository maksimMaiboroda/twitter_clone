import React, {useState} from 'react'
import { 
    Button, 
    makeStyles, 
    Typography
}                        from '@material-ui/core'
import TwitterIcon       from '@material-ui/icons/Twitter';
import SearchIcon        from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon       from '@material-ui/icons/ModeCommentOutlined';
import Modal             from '../components/Modal/Modal';
import LoginForm         from '../Forms/LoginForm/LoginForm'
import RegistrationForm  from '../Forms/RegistrationForm/RegistrationForm'


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
        marginBottom : 40,
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
        fontSize : 45
    },
    loginSideWrapper: {
        width : 380
    },
    loginSideTitle: {
        fontWeight   : 700,
        fontSize     : 32,
        marginBottom : 60,
        marginTop    : 20
    },
    btn: {
        marginTop : 20
    },
    closeIcon: {
        fontSize : 26
    },
    loginSideField: {
        marginBottom: 18
    },
    buttonLogin: {
        marginBottom: 10
    }
}))

function SignIn() {
    const classes                           = useStyles();
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();
    

    const handleOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleClose = () => {
        setVisibleModal(undefined)
    }

     
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
                <Button onClick = {handleOpenSignUp} className = {classes.btn} variant = 'contained' color = 'primary' fullWidth>
                    Зарегистрироватся
                </Button>
                <Button onClick = {handleOpenSignIn} className = {classes.btn} variant = 'outlined' color = 'primary' fullWidth>
                    Войти
                </Button>
                </div>

                <Modal title = 'Войти в Твиттер' visible = {visibleModal === 'signIn'} onClose = {handleClose}>
                    <LoginForm onClose = {handleClose}/>
                </Modal>

                <Modal title = 'Создайте учетную запись' visible = {visibleModal === 'signUp'} onClose = {handleClose}>
                    <RegistrationForm onClose = {handleClose}/>
                </Modal>
            </section> 
        </div>
    )
}

export default SignIn
