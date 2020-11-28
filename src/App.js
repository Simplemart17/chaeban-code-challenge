import { Route, Switch } from "react-router-dom";
import InputPage from "./pages/InputPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={InputPage} />
      <Route exact path="/result" component={ResultPage} />
    </Switch>
  );
};

export default App;
