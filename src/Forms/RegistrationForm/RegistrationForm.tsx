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
    registerField: {
        marginBottom: theme.spacing(5)
    },
    buttonLogin: {
        marginBottom: theme.spacing(2)
    }
}))

interface RegistrationFormProps {
    onClose : () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = (props): React.ReactElement => {
    const { onClose } = props;

    const classes = useStyles();

    return (
        <FormControl component = 'fieldset' fullWidth>
            <FormGroup aria-label = 'position' row>
                <TextField
                    autoFocus
                    fullWidth
                    className       = {classes.registerField}
                    id              = 'name'
                    label           = 'Имя'
                    type            = 'text'
                    variant         = 'filled'
                    InputLabelProps = {{
                        shrink: true,
                    }}
                />
                
                <TextField
                    autoFocus
                    fullWidth
                    className       = {classes.registerField}
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
                    className       = {classes.registerField}
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
                    Далее
                </Button>                        
            </FormGroup>
        </FormControl>
    );
}

export default RegistrationForm;
