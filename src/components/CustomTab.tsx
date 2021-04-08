import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

export const CustomTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: '2rem',
            maxWidth: '4rem',
            marginRight: '0.5rem',
            padding: '0.5rem 0',
        },
        selected: {
            color: theme.palette.primary.main,
        },
    }),
)(Tab);
