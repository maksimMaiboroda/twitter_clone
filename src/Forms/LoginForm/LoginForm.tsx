import React from 'react';
import { 
    Button,
    makeStyles,
    TextField,
    FormGroup, 
    FormControl
}            from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    closeIcon: {
        fontSize : 26
    },
    loginSideField: {
        marginBottom : theme.spacing(4)
    },
    buttonLogin: {
        marginBottom : theme.spacing(2)
    }
}))

interface LoginFormProps {
    onClose : () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props): React.ReactElement => {
    const { onClose } = props;

    const classes = useStyles();

    return (
        <FormControl component = 'fieldset' fullWidth>
            <FormGroup aria-label = 'position' row>
                <TextField
                    autoFocus
                    fullWidth
                    className       = {classes.loginSideField}
                    id              = 'email'
                    label           = 'Адрес электронной почты'
                    type            = 'email'
                    variant         = 'filled'
                    InputLabelProps = {{
                        shrink: true,
                    }}
                />

                <TextField
                    autoFocus
                    fullWidth
                    className       = {classes.loginSideField}
                    id              = 'password'
                    label           = 'Пароль'
                    type            = 'password'
                    variant         = 'filled'
                    InputLabelProps = {{
                        shrink: true,
                    }}
                /> 

                <Button 
                    className = {classes.buttonLogin}
                    onClick   = {onClose}
                    variant   = 'contained'
                    color     = 'primary'
                    fullWidth
                >
                    Войти
                </Button>                        
            </FormGroup>
        </FormControl>
    );
}

export default LoginForm;
