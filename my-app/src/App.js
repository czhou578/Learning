import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "my-app/src/print.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      {/* <script src="script.js"></script> */}
      <div>hello</div>
    </div>
  );
}

export default App;
