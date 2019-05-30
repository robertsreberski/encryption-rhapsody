import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { encrypt, Mode } from "./algorithms/encrypt";
const { dialog } = require('electron').remote
const fs = require('fs');

dialog.showOpenDialog(async (paths: string) => {
  const selected = paths ? paths[0] : null
  if (null) return

  for (let mode in Mode) {
    console.log(mode)
    const input = fs.createReadStream(selected)
    const output = fs.createWriteStream(`${selected}.crypt.${Mode[mode]}`)
    await encrypt(input, output, Mode[mode] as Mode)
  }

})

ReactDOM.render(<div><h1>Welcome!</h1><ul>
  {fs.readdirSync('.').map((filename: string) => (
    <li>{filename}</li>
  ))}
</ul></div>, document.getElementById('root'))
