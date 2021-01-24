import React     from 'react';

import { 
    Dialog, 
    makeStyles,
    DialogContent, 
    DialogTitle,  
    IconButton, 
    DialogActions
}                 from '@material-ui/core'
import CloseIcon  from '@material-ui/icons/CloseOutlined';


const useStyles = makeStyles(()=>({
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

interface ModalProps {
    title       : string;
    visible?    : boolean;
    onClose     : () => void;
    children    : React.ReactNode
}

const Modal: React.FC<ModalProps> = (props): React.ReactElement | null => {
    const { title, visible = false, onClose, children } = props;
    const classes = useStyles();

    if(!visible) {
        return null;
    }

    return (
        <Dialog open = {visible} onClose = {onClose} aria-label = '' >
            <DialogTitle id = 'form-dialog-title'>
                <IconButton
                    onClick    = {onClose}
                    color      = 'secondary'
                    aria-label = 'close'
                >
                    <CloseIcon className = {classes.closeIcon}/>
                </IconButton>
                    {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>                    
            </DialogActions>
        </Dialog>
    );
}

export default Modal;
