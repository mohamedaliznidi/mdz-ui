import { MDZButton } from "./components/Button";

function App() {

  return (
    <div className="w-screen flex  justify-items-center flex-col">
      {/* // primary */}
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'primary'} size={'medium'} appearence={"solid"} onPress={() => alert('Hello world!')}>primary</MDZButton>
        <MDZButton intent={'primary'} size={'small'} appearence={"outline"} onPress={() => alert('Hello world!')}>primary</MDZButton>
      </div> <br/>
      {/* // secondary */}
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'secondary'} size={'small'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
        <MDZButton intent={'secondary'} size={'medium'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
        <MDZButton intent={'secondary'} size={'large'} onPress={() => alert('Hello world!')}>secondary</MDZButton>
      </div>
      {/* // success */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'success'} size={'small'} onPress={() => alert('Hello world!')}>success</MDZButton>
        <MDZButton intent={'success'} size={'medium'} onPress={() => alert('Hello world!')}>success</MDZButton>
        <MDZButton intent={'success'} size={'large'} onPress={() => alert('Hello world!')}>success</MDZButton>
      </div>
      {/* // error */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'error'} size={'small'} onPress={() => alert('Hello world!')}>error</MDZButton>
        <MDZButton intent={'error'} size={'medium'} onPress={() => alert('Hello world!')}>error</MDZButton>
        <MDZButton intent={'error'} size={'large'} onPress={() => alert('Hello world!')}>error</MDZButton>
      </div>
      {/* // warning */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'warning'} size={'small'} onPress={() => alert('Hello world!')}>warning</MDZButton>
        <MDZButton intent={'warning'} size={'medium'} onPress={() => alert('Hello world!')}>warning</MDZButton>
        <MDZButton intent={'warning'} size={'large'} onPress={() => alert('Hello world!')}>warning</MDZButton>
      </div>
      {/* // info */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'info'} size={'small'} onPress={() => alert('Hello world!')}>info</MDZButton>
        <MDZButton intent={'info'} size={'medium'} onPress={() => alert('Hello world!')}>info</MDZButton>
        <MDZButton intent={'info'} size={'large'} onPress={() => alert('Hello world!')}>info</MDZButton>
      </div>
      {/* // gray */}<br />
      <div className=" flex justify-center align-items-center">
        <MDZButton intent={'gray'} size={'small'} onPress={() => alert('Hello world!')}>gray</MDZButton>
        <MDZButton intent={'gray'} size={'medium'} onPress={() => alert('Hello world!')}>gray</MDZButton>
        <MDZButton intent={'gray'} size={'large'} onPress={() => alert('Hello world!')}>gray</MDZButton>
      </div>
    </div>
  )
}

export default App
