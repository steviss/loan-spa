import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

export const CustomTabs = withStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: 'auto',
        },
        indicator: {
            backgroundColor: theme.palette.primary.main,
        },
    }),
)(Tabs);
