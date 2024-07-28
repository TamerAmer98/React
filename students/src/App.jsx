import Student from './Student'

function App() {
  return(
        <>
        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name = "Patirk" age={40} isStudent={false}/>
        <Student name = "Squidward" age={50} isStudent={false}/>
        <Student name = "Sandy" age={24} isStudent={true}/>
        <Student name = "Larry"/>
        </>

  );
}

export default App
