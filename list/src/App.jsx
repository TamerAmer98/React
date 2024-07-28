import List from './List.jsx'


function App() {

  const fruits = [{id:1 ,name:"Apple", calories: 95},
                  {id:2,name:"Orange", calories: 45},
                  {id:3,name:"Banana", calories:30},
                  {id:4,name:"Pineaplle",calories: 20}];

  const vegatables = [{id:6 ,name:"potates", calories: 110},
                  {id:7,name:"celery", calories: 15},
                  {id:8,name:"Carotrs", calories:40},
                  {id:9,name:"corn",calories: 63}];                



  return(<>{fruits.length > 0 ? <List items={fruits} category= "Fruits"/> : null}
          <List items={vegatables} category= "vegatables"/></>);

}

export default App
