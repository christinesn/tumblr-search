import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {CardActionArea} from '@material-ui/core'

export function LinkPost ({ post }) {
  const classes = makeStyles({
    link: {
      width: '100%',
      marginLeft: '-1.5rem',
      padding: '1.5em',
      paddingBottom: '1.25em',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      marginBottom: '1em'
    }
  })()

  return (
    <div>
      <CardActionArea
        className={classes.link}
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>{post.publisher}</i>
        <h1>{post.title}</h1>
      </CardActionArea>
      {post.description && (
        <div
          dangerouslySetInnerHTML={{
            __html: post.description
          }}
        />
      )}
    </div>
  )
}