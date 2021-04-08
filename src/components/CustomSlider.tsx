import { Theme, withStyles, createStyles, fade } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { grey } from '@material-ui/core/colors';

export const CustomSlider = withStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.primary.main,
            height: 8,
            '& .MuiSlider-markLabel:nth-last-child(2)': {
                transform: 'translateX(-100%)',
            },
        },
        thumb: {
            height: '1.5rem',
            width: '0.75rem',
            backgroundColor: '#fff',
            boxShadow: `0 0 2px 2px ${fade(theme.palette.common.black, 0.05)}`,
            border: `3px solid ${theme.palette.common.white}`,
            borderRadius: 2,
            marginTop: '-0.5rem',
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
                boxShadow: `0 0 2px 2px ${fade(theme.palette.common.black, 0.15)}`,
            },
            '&::before': {
                content: "''",
                position: 'absolute',
                height: 8,
                width: '0.25rem',
                backgroundColor: theme.palette.primary.main,
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        mark: {
            backgroundColor: 'transparent',
        },
        markActive: {
            backgroundColor: 'transparent',
        },
        markLabel: {
            fontSize: '0.625rem',
            transform: 'translateX(0)',
        },
        track: {
            height: 8,
        },
        rail: {
            height: 8,
            borderRadius: 0,
            backgroundColor: grey[400],
        },
    }),
)(Slider);
