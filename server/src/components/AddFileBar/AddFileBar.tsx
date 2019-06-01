import * as React from 'react'
import { Button } from '../../styled/inputs'
import Select from 'react-select'
import { Mode } from '../../algorithms/encrypt'
import InputLabel from '../InputLabel'
import { useEffect, useState } from 'react'
import useFileChooser from '../../hooks/useFileChooser'
import { BarBody, SimpleInput, SourceInput } from './styles'

type Props = {
  onAdd: ({ path, filename, mode }: { path: string; filename: string; mode: Mode }) => void
}

const selectStyles = {
  container: () => ({ width: '100%' }),
}
const commonStyles = { width: '25%' }

const AddFileBar: React.FC<Props> = ({ onAdd }) => {
  const [mode, setMode] = useState<Mode>(Mode.ECB)
  const [filename, setFilename] = useState<string>('')
  const { show, filepath, reset } = useFileChooser()

  useEffect(() => {
    if (filepath === null) return
    setFilename(filepath.split('/').reverse()[0])
  }, [filepath])

  const _selectOptions = Object.entries(Mode).map(([key]) => ({
    value: key as Mode,
    label: key,
  }))

  const _submit = {
    action: () => {
      onAdd({ path: filepath!, filename, mode })
      setFilename('')
      reset()
    },
    validate: !mode || !filename || !filepath,
  }

  return (
    <BarBody>
      <InputLabel label="SRC" style={commonStyles}>
        <SourceInput onClick={show}>
          {filepath || 'No file selected.'}
          <span>Change File</span>
        </SourceInput>
      </InputLabel>
      <InputLabel label="NAME" style={commonStyles}>
        <SimpleInput
          placeholder="Select file to encrypt"
          value={filename}
          onChange={e => setFilename(e.target.value)}
        />
      </InputLabel>
      <InputLabel label="MODE" style={commonStyles}>
        <Select
          value={{ value: mode, label: mode.toUpperCase() }}
          onChange={({ value }: any) => setMode(value)}
          styles={selectStyles}
          options={_selectOptions}
        />
      </InputLabel>
      <Button disabled={_submit.validate} onClick={_submit.action}>
        Add & Encrypt
      </Button>
    </BarBody>
  )
}

export default AddFileBar
