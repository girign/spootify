import Router from "./app/router";
import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  tip: {
    content: {
      background: "dark-2",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Router />
    </Grommet>
  );
}

export default App;
