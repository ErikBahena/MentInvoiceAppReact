import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import InvoiceControlPanel from "./components/InvoiceControlPanel";
import InvoicesPanel from "./components/InvoicesPanel/InvoicesPanel";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";
import Access from "./components/Access";
import PrivateRoute from "./routes/PrivateRoute.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/access" element={<Access />} />

        <Route path="/invoices" element={<PrivateRoute />}>
          <Route
            path="/invoices"
            element={
              <>
                <NavBar />
                <InvoiceControlPanel />
                <InvoicesPanel />
              </>
            }
          />
        </Route>

        <Route
          path="/invoice/:id"
          element={
            <>
              <NavBar />
              <InvoiceDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
