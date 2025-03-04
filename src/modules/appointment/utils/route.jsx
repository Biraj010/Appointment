import { Outlet, Route } from "react-router-dom";
import Layout from "../../../layout/layout";
import Home from "../index"
import BookAppointment from "../book_appointment";
import Consultation from "../consulation";
import Form from "../../../components/login/logindisplay"

export const AppiontmentRoutes = (
  <Route
    element={
      <Layout>
        <Outlet />
      </Layout>
    }
  >
    <Route path="/" element={<Home />}></Route>
    <Route path="/bookappointment" element={<BookAppointment />}></Route>
    <Route path="/consultation" element={<Consultation />}></Route>
    <Route path="/login" element={<Form />} />

    {/* <Route path="*" element={<>Error</>} /> */}
  </Route>
);
