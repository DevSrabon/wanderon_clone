import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import './App.css';
import ScrollToApp from './components/ScrollToApp/ScrollToApp';
const App=()=> {
  return (
    <div className="App">
<ScrollToApp/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
