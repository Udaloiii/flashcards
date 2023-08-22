import { Button } from './components/ui'
import { CustomCheckbox } from './components/ui/checkbox'
import { TextField } from './components/ui/text-field'

export function App() {
  // return <div>Hello</div>
  return (
    <div>
      <Button onClick={() => console.log('submit')}>SUBMIT</Button>
      <br />
      <br />
      <br />
      <br />
      <CustomCheckbox />
      <br />
      <br />
      <br />
      <TextField type={'text'} placeholder={'text'} disabled={true} />
      <input value={'asdasd'} type={'text'} placeholder={'password'} disabled={true} />
    </div>
  )
}
