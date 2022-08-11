import "./App.css";
import TodoList from "./features/TodoList";
import NotFound from "./component/NotFound";
import { Switch, Route } from "react-router-dom";
import TodoRoute from "./features/TodoRoute";
import TodoForm from "./features/TodoForm";
import YupTest from "./features/Yup";
import CustomHook from "./features/CustomHook";
import Bootstrap from "./features/Bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={TodoList} exact></Route>
        <Route path="/route" component={TodoRoute}></Route>
        <Route path="/todoForm" component={TodoForm}></Route>
        <Route path="/YupTest" component={YupTest}></Route>
        <Route path="/CustomHook" component={CustomHook}></Route>
        <Route path="/Bootstrap" component={Bootstrap}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
