import React from 'react'
import {Grid, CardActionArea} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import DefaultTheme from '@material-ui/core/styles/defaultTheme'
import {format} from 'date-fns'

export function BlogHeader ({blog, theme, timestamp, postURL}) {
  const classes = makeStyles({
    link: {
      height: 50,
      padding: '0.9em 1em 0.2em 1em',
      boxSizing: 'content-box',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },
    avatar: {
      borderRadius: 5,
      height: 40,
      width: 40,
      boxShadow: DefaultTheme.shadows[1]
    },
    name: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginTop: 3
    },
    blogName: {
      maxWidth: '90%',
      display: 'inline-block',
      overflow: 'hidden'
    },
    timestamp: {
      fontWeight: 'normal',
      fontSize: '0.9em',
      color: 'rgba(0, 0, 0, 0.6)'
    }
  })()

  function formatTimestamp () {
    const date = new Date(timestamp * 1000)

    return format(date, 'LLLL do, y - hh:mm aaaa')
  }

  return (
    <CardActionArea
      className={classes.link}
      href={postURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Grid container spacing={2}>
        <Grid item>
          <img
            className={classes.avatar}
            src={`https://api.tumblr.com/v2/blog/${blog.name}.tumblr.com/avatar/96`}
            alt={blog.title}
          />
        </Grid>
        <Grid item xs className={classes.name}>
          <span className={classes.blogName}>{blog.name}</span>
          <div className={classes.timestamp}>{formatTimestamp()}</div>
        </Grid>
      </Grid>
    </CardActionArea>
  )
}