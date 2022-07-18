import "./App.css";

function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "my-app/public/print.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }

  return (
    <div className="App">
      {/* <script src="./Print/print.js"></script> */}
      {AddLibrary("./Print/print.js")}
      <div>hello</div>
    </div>
  );
}

export default App;
