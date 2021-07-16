import * as React from 'react'

import MarkdownHtml from '../components/markdown-html'

export default function NotesPostTemplate({
	title,
	description,
	featuredImage,
	date,
	html,
	content
}) {
	
  return (
    <div className='notes'>
			<img src={featuredImage} alt='featuredImage'
        className='notes-featured-image' />
      <div className='notes-header'>
        <h1 className='notes-title'>{ title }</h1>
        <h4>{ description }</h4>
        <p className='notes-date'>{ date }</p>
      </div>
      <div className='notes-body'>
        <MarkdownHtml
          html={ html }
          content= { content }
          />
      </div>
    </div>
)}
