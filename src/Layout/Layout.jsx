import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Routers from "../Routes/Routers";
import { Fragment } from "react";

function Layout() {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routers/>
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
