import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import InvoiceControlPanel from "./components/InvoiceControlPanel";
import InvoicesPanel from "./components/InvoicesPanel/InvoicesPanel";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/invoices"
          element={
            <>
              <InvoiceControlPanel />
              <InvoicesPanel />
            </>
          }
        />
        <Route path="/invoice/:id" element={<InvoiceDetails />} />
      </Routes>
    </>
  );
}

export default App;
