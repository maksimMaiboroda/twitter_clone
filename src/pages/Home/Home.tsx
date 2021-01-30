import React                       from 'react'

import { Container, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import TwitterIcon                                         from '@material-ui/icons/Twitter';
import SearchIcon                                          from '@material-ui/icons/Search';
import NotificationsNoneIcon                               from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon                                     from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon                                  from '@material-ui/icons/BookmarkBorder';
import FeaturedPlayListOutlinedIcon                        from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon                           from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon                                       from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme)=>({
    wrapper: {
        height: '100vh'
    },
    logoBlock: {
        margin: '10px 0'
    },
    logo: {
        fontSize: 36
    },
    sideMenuList: {
        listStyle : 'none',
        padding   : 0,
        margin    : 0
    },
    sideMenuListItem: {
        display    : 'flex',
        alignItems : 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft : theme.spacing(2)
    },
    sideMenuListItemIcon: {
        fontSize: 28
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth = 'lg'>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logoBlock}>
                                <TwitterIcon color = "primary" className={classes.logo}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Search
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Notification
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Massages
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Bookmarks
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <FeaturedPlayListOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Lists
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <PersonOutlineOutlinedIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                Profile
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton>
                                <MoreHorizIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>
                                More
                            </Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
