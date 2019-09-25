import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { variantIcon } from './SnackContentProps';
import { useStyles } from './styles/SnackBarContentWrapperStyle';
import Props from './model/Props';
import useTheme from '@material-ui/styles/useTheme';

export default function SnackbarContentWrapper(props: Props) {
    const classes = useStyles(useTheme());

    const { className, message, onClose, variant, index, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className, classes.margin)}
            aria-describedby='client-snackbar'
            message={
                <span id='client-snackbar' className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key='close' aria-label='close' color='inherit' onClick={() => { onClose(index); }}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}
