import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Flights, NewFlights, EditFlights } from './pages';
import { AppNav } from './features/AppNav';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppNav />
          <Routes>     
            <Route path = "/" element = {<Landing />} />
            <Route path = "/flights" element = {<Flights />} />
            <Route path = "/newflight" element = {<NewFlights />} />
            <Route path = "/editflight" element = {<EditFlights />} />
            <Route path = "*" element = {<Error />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;