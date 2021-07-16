import * as React from 'react'

const MarkdownHTML = ({ classname, html, content }) => {
   if (html)
    return (
      <div dangerouslySetInnerHTML={{__html: html}}
      />
    )

  if (content)
    return (
      <div className={classname}>
        { content }
      </div>
    )
}


export default MarkdownHTML
