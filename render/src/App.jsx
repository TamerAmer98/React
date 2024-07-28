import UserGreeting from "./UserGreeting.jsx";


function App() {

  return(
    <>
         <UserGreeting isLoggedIn={true} username="Tamer"/>
         <UserGreeting isLoggedIn={false}/>
    </>
  );

}

export default App


