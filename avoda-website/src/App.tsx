import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Main from "./components/main/Main.tsx";
import EditRequest from "./pages/editRequest/EditRequest.tsx";


function App() {

  return (
      <>
          <Header />

          <main>
              <Routes>
                  <Route path={"/"} element={<Main/>}/>
                  <Route path={"/edit-request"} element={<EditRequest/>}/>

                  <Route path="*" element={<ErrorPage/>} />
              </Routes>
          </main>

          <Footer />
      </>
  )
}

export default App
