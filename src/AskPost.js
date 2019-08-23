import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

export function AskPost ({ post }) {
  const classes = makeStyles({
    questionContainer: {
      marginTop: '1em',
      maxWidth: '100%'
    },
    askerAvatar: {
      borderRadius: 5,
      maxWidth: '100%'
    },
    question: {
      borderRadius: 3,
      backgroundColor: '#f2f2f2',
      margin: '0 1.25em 0 0',
      padding: '10px 15px 15px 15px'
    },
    askerSlug: {
      color: '#a6a6a6',
      marginBottom: 5,
      fontSize: '0.95em'
    },
    askerName: {
      fontWeight: 'bold',
      textTransform: 'lowercase',
      border: 'none',
      color: '#a6a6a6'
    },
    askerNameLink: {
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.5)'
      }
    },
    askerAvatarLink: {
      borderRadius: 5,
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    carat: {
      display: 'inline',
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      borderLeft: '8px solid #f2f2f2',
      left: 217
    }
  })()

  return (
    <div>
      <Grid container className={classes.questionContainer}>
        <Grid item xs>
          <div className={classes.question}>
            <div className={classes.carat} />
            <div className={classes.askerSlug}>
              {!post.asking_url && <span className={classes.askerName}>{post.asking_name}</span>}
              {post.asking_url && (
                <a
                  href={post.asking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.askerName + ' ' + classes.askerNameLink}
                >
                  {post.asking_name}
                </a>
              )}
              {' '}asked:
            </div>
            {post.question}
          </div>
        </Grid>
        <Grid item xs={2}>
          {post.asking_url && (
            <a
              className={classes.askerAvatarLink}
              href={post.asking_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.askerAvatar}
                src={`https://api.tumblr.com/v2/blog/${post.asking_name}/avatar/96`}
                alt={post.asking_name}
              />
            </a>
          )}
          {!post.asking_url && (
            <img
              className={classes.askerAvatar}
              src="https://assets.tumblr.com/images/anonymous_avatar_96.gif"
              alt={post.asking_name}
            />
          )}
        </Grid>
      </Grid>
      <span dangerouslySetInnerHTML={{ __html: post.answer }} />
    </div>
  )
}