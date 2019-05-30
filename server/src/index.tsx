import * as React from 'react'
import * as ReactDOM from 'react-dom'
const fs = require('fs');

ReactDOM.render(<div><h1>Welcome!</h1><ul>
  {fs.readdirSync('.').map((filename: string) => (
    <li>{filename}</li>
  ))}
</ul></div>, document.getElementById('root'))
