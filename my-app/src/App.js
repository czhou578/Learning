import useScript from "./UseScript";

import "./App.css";

function App() {
  useScript("./Print/print.js");

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "my-app/public/print.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="App">
      <script src="./Print/print.js"></script>
      <div>hello</div>
    </div>
  );
}

export default App;
