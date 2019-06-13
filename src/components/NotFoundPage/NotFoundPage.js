// NPM MODULES
import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div class="content-container">
      <h1>404 - Page not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default NotFoundPage;