import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  card: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160
  }
}))

const ArticleBrowse = () => {
  const classes = useStyles();

  return (
      <>
        <Grid container spacing={4}>
          {posts.map((post) => (
            // <Post key={post.link} post={post} />
            <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component="a" href={post.link}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.module.meta.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.module.meta.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.module.meta.description}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
          ))}
        </Grid>
      </>
    )
}

export default ArticleBrowse