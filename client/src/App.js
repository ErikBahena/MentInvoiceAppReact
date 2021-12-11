import "./App.css";

import NavBar from "./components/NavBar";
import InvoiceControlPanel from "./components/InvoiceControlPanel";
import InvoicesPanel from "./components/InvoicesPanel/InvoicesPanel";

function App() {
  return (
    <>
      <NavBar />
      <InvoiceControlPanel />
      <InvoicesPanel />
    </>
  );
}

export default App;
