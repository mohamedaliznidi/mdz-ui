import {MDZButton} from "./components/Button"

function App() {

  return (
    <div>
      {/* // primary */}
      <MDZButton intent={'primary'} size={'small'} onClick={() => alert('Hello world!')}>primary</MDZButton>
      <MDZButton intent={'primary'} size={'medium'} onClick={() => alert('Hello world!')}>primary</MDZButton>
      <MDZButton intent={'primary'} size={'large'} onClick={() => alert('Hello world!')}>primary</MDZButton>
      {/* // secondary */}<br/>
      <MDZButton intent={'secondary'} size={'small'} onClick={() => alert('Hello world!')}>secondary</MDZButton>
      <MDZButton intent={'secondary'} size={'medium'} onClick={() => alert('Hello world!')}>secondary</MDZButton>
      <MDZButton intent={'secondary'} size={'large'} onClick={() => alert('Hello world!')}>secondary</MDZButton>
      {/* // success */}<br/>
      <MDZButton intent={'success'} size={'small'} onClick={() => alert('Hello world!')}>success</MDZButton>
      <MDZButton intent={'success'} size={'medium'} onClick={() => alert('Hello world!')}>success</MDZButton>
      <MDZButton intent={'success'} size={'large'} onClick={() => alert('Hello world!')}>success</MDZButton>
      {/* // error */}<br/>
      <MDZButton intent={'error'} size={'small'} onClick={() => alert('Hello world!')}>error</MDZButton>
      <MDZButton intent={'error'} size={'medium'} onClick={() => alert('Hello world!')}>error</MDZButton>
      <MDZButton intent={'error'} size={'large'} onClick={() => alert('Hello world!')}>error</MDZButton>
      {/* // warning */}<br/>
      <MDZButton intent={'warning'} size={'small'} onClick={() => alert('Hello world!')}>warning</MDZButton>
      <MDZButton intent={'warning'} size={'medium'} onClick={() => alert('Hello world!')}>warning</MDZButton>
      <MDZButton intent={'warning'} size={'large'} onClick={() => alert('Hello world!')}>warning</MDZButton>
      {/* // info */}<br/>
      <MDZButton intent={'info'} size={'small'} onClick={() => alert('Hello world!')}>info</MDZButton>
      <MDZButton intent={'info'} size={'medium'} onClick={() => alert('Hello world!')}>info</MDZButton>
      <MDZButton intent={'info'} size={'large'} onClick={() => alert('Hello world!')}>info</MDZButton>
      {/* // gray */}<br/>
      <MDZButton intent={'gray'} size={'small'} onClick={() => alert('Hello world!')}>gray</MDZButton>
      <MDZButton intent={'gray'} size={'medium'} onClick={() => alert('Hello world!')}>gray</MDZButton>
      <MDZButton intent={'gray'} size={'large'} onClick={() => alert('Hello world!')}>gray</MDZButton>      
    </div>
  )
}

export default App
