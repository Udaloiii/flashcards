import { Button } from './components/ui'
import { Header } from './components/ui/header'

export function App() {
  // return <div>Hello</div>
  return (
    <div>
      <Header>
        <Button variant={'primary'}>Sign in</Button>
      </Header>
      <Button onClick={() => console.log('submit')}>SUBMIT</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
