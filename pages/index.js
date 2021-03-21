import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useRouter } from "next/router"
import { useIntl } from "react-intl"
import Link from 'next/link'
import ArticleBrowse from '../containers/ArticleBrowse';
import AppHeaderBar from '../containers/AppBarHeader'
import getLargeImage from '../Other/getLargeImage';

const useStyles = makeStyles(theme => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`
    marginTop: 20,
    marginBottom: -20,
  },
  toolbarTitle: {
    flex: 1
  },
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
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}))

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
]

const Blog = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const messages = id => formatMessage({ id })
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppHeaderBar/>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            <div className={classes.mainPostContainer}>
              <div className={classes.mainPostText}>
                <Grid container>
                  <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Title of a longer featured blog post
                      </Typography>
                      <Typography variant="h5" color="inherit" paragraph>
                        Multiple lines of text that form the lede, informing new readers
                        quickly and efficiently about what&apos;s most interesting in this
                        post&apos;s contents.
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.mainPostImage}>{getLargeImage('/veveySBB.jpg')}</div>
            </div>
          </Paper>
          {/* End main featured post */}
        </main>
        <ArticleBrowse/>
      </Container>
    </>
  )
}

export default Blog