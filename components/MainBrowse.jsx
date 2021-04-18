import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import getLargeImage from '../Other/getLargeImage';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    paddingBottom: 0,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  mainPostContainer: {
    display: 'flex',
  },
  
  mainPostText: {
    flex: 1,
  },
  mainPostImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: 50,
    width: 600,
    backgroundColor: theme.palette.primary.dark,
  },
}))

const MainBrowse = (post) => {
  const [ready, setReady] = useState(false);
  const classes = useStyles();
  console.log('the prop post', post);

  useEffect(() => {
    setReady(true);
  }, []);

  const featuredPost = (
      <Card className={classes.mainFeaturedPost}>
      <Link href={post.post.link}>
      <CardActionArea component="a">
      <div className={classes.mainPostContainer}>
        <div className={classes.mainPostText}>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.post.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {post.post.description}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.mainPostImage}>{getLargeImage('/veveySBB.jpg')}</div>
      </div>
      </CardActionArea>
    </Link>
  </Card>
  );

  return (
    ready ? featuredPost : ''
    )
    
}

export default MainBrowse