import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { grey } from '@material-ui/core/colors';

export const CustomInputField = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            maxWidth: '5rem',
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: '1px solid #eee',
            fontSize: '1rem',
            fontWeight: 500,
            width: 'auto',
            padding: '0.75rem 1rem',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderColor: '#3baf57',
            },
            '&:focus, &:active': {
                borderRadius: 4,
            },
        },
    }),
)(InputBase);

export const CustomSelectField = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: `1px solid ${grey[200]}`,
            fontSize: '1rem',
            width: 'auto',
            padding: '0.75rem 1rem',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                borderColor: theme.palette.primary.main,
            },
            '&:focus': {
                borderColor: theme.palette.primary.main,
            },
            '&:focus, &:active': {
                borderRadius: 4,
            },
        },
    }),
)(InputBase);
