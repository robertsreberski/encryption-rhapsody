import { useEffect, useState } from 'react'
const { dialog } = require('electron').remote

const useFileChooser: () => {
  show: () => void
  filepath: string | null
  reset: () => void
} = () => {
  const [visible, setVisible] = useState(false)
  const [filepath, setFilepath] = useState<string | null>(null)

  useEffect(() => {
    if (!visible) return
    dialog.showOpenDialog(async (paths: string) => {
      setFilepath(paths ? paths[0] : null)
      setVisible(false)
    })
  }, [visible])

  return {
    show: () => setVisible(true),
    reset: () => setFilepath(null),
    filepath,
  }
}

export default useFileChooser
