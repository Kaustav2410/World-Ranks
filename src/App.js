import './App.css';
import { Country } from './Pages/Country';
import { Home } from './Pages/Home';
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import { NotFound } from './Pages/NotFound';
function App() {

  return (
    // <div className='flex  flex-col justify-center align-middle bg-blackish min-h-screen font-Vietnam_Pro'>
    //   <div className='w-full'>
    //     <img src={heroImg} className='w-full object-cover h-[18rem] fixed top-0 ' />
    //   </div>
    //  <WorldHeader/>
    //  <CountryContainer/>
    // </div>
    <>
        <BrowserRouter>
      <Routes> {/* Use Routes component */}
        <Route
          exact
          path="/"
          element={<Home/>}
        /> 
        <Route
          exact
          path="/country/:id"
          element={<Country />}
        />
        <Route
          exact
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App;
