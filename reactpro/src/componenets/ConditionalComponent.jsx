import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionaComponent() {
  const display = false;

  return display ? <Welcome /> : <Code />;
}

// jsx only starts after return statement
// if possible component should always only have one return statement
