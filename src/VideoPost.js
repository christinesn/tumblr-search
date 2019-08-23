import React from 'react'
import {makeStyles} from '@material-ui/styles'

export function VideoPost ({ post }) {
  const classes = makeStyles({
    player: {
      '& iframe': {
        maxWidth: '300px !important',
        marginLeft: '-1.5em',
        height: 'auto'
      },
    },
    '@global': {
      video: {
        width: '300px !important'
      }
    }
  })()

  return (
    <div>
      <div
        className={classes.player}
        dangerouslySetInnerHTML={{
          __html: post.player[2].embed_code
        }}
      />
      {post.caption && (
        <div
          dangerouslySetInnerHTML={{
            __html: post.caption
          }}
        />
      )}
    </div>
  )
}