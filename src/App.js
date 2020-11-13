import Login from "./Login";
import Main from "./Main";
function App() {
  const user = localStorage.getItem("user");
    if (user == null) {
      return <div className="App">{<Login />}</div>;
    }
      return <div className="">{<Main />}</div>;
  
}

export default App;
