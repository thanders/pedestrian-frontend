import CssBaseline from '@material-ui/core/CssBaseline'
import getImage from '../Other/getImage'
import Head from "next/head";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppHeaderBar from '../containers/AppBarHeader'
import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  containerCSS: {
    backgroundColor: theme.palette.primary,
    padding: 50,
    width: '90%',
    fontSize: 'large',
  },
  containerSmall: {
    backgroundColor: theme.palette.primary,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    fontSize: 'large',
  },
}))

export default function BlogPost({ children, meta}) {
  const classes = useStyles();

  const router = useRouter();
  useEffect(()=>{
      if(!router.isReady) return;
  
      const {
        query: { id },
      } = router
  }, [router.isReady]);

  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={meta.description} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
+       <meta property="og:title" content={meta.title} key="ogtitle" />
+       <meta property="og:description" content={meta.description} key="ogdesc"/>
        <meta property="og:url" content="https://pedestrian-frontend.vercel.app/"/>
        <meta property="og:image" content="https://pedestrian-frontend.vercel.app/veveySBB.jpg"/>
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>
      </Head>
      <AppHeaderBar />
      <article>
        <Container className={matches ? classes.containerCSS: classes.containerSmall} maxWidth="xl">
          {children}
        </Container>
      </article>
    </>
  )
}