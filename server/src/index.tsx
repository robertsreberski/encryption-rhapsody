import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

// dialog.showOpenDialog(async (paths: string) => {
//   const selected = paths ? paths[0] : null
//   if (null) return
//
//   for (let mode in Mode) {
//     console.log(mode)
//     const input = fs.createReadStream(selected)
//     const output = fs.createWriteStream(`${selected}.crypt.${Mode[mode]}`)
//     await encrypt(input, output, Mode[mode] as Mode)
//   }
//
// })

ReactDOM.render(<App />, document.getElementById('root'))
