import { MDZButton } from "./components/Button";

function App() {

  return (
    <div className="w-screen flex  justify-items-center flex-col">
      {/* // primary */}
      <div className=" flex justify-center align-items-center">
        <MDZButton color='primary' variant="solid" >primary</MDZButton>
        <MDZButton color={'primary'} variant="outline" onClick={() => alert('Hello world!')}>primary</MDZButton>
      </div> <br/>
      {/* // secondary */}
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'secondary'} size={'small'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
        <MDZButton color={'secondary'} size={'medium'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
        <MDZButton color={'secondary'} size={'large'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
      </div>
      {/* // success */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'success'} size={'small'} onPress={() => alert('Hello world!')}>success</MDZButton>
        <MDZButton color={'success'} size={'medium'} onPress={() => alert('Hello world!')}>success</MDZButton>
        <MDZButton color={'success'} size={'large'} onPress={() => alert('Hello world!')}>success</MDZButton>
      </div>
      {/* // error */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'error'} size={'small'} onPress={() => alert('Hello world!')}>error</MDZButton>
        <MDZButton color={'error'} size={'medium'} onPress={() => alert('Hello world!')}>error</MDZButton>
        <MDZButton color={'error'} size={'large'} onPress={() => alert('Hello world!')}>error</MDZButton>
      </div>
      {/* // warning */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'warning'} size={'small'} onPress={() => alert('Hello world!')}>warning</MDZButton>
        <MDZButton color={'warning'} size={'medium'} onPress={() => alert('Hello world!')}>warning</MDZButton>
        <MDZButton color={'warning'} size={'large'} onPress={() => alert('Hello world!')}>warning</MDZButton>
      </div>
      {/* // info */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'info'} size={'small'} onPress={() => alert('Hello world!')}>info</MDZButton>
        <MDZButton color={'info'} size={'medium'} onPress={() => alert('Hello world!')}>info</MDZButton>
        <MDZButton color={'info'} size={'large'} onPress={() => alert('Hello world!')}>info</MDZButton>
      </div>
      {/* // gray */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton color={'gray'} size={'small'} onPress={() => alert('Hello world!')}>gray</MDZButton>
        <MDZButton color={'gray'} size={'medium'} onPress={() => alert('Hello world!')}>gray</MDZButton>
        <MDZButton color={'gray'} size={'large'} onPress={() => alert('Hello world!')}>gray</MDZButton>
      </div>
    </div>
  )
}

export default App
