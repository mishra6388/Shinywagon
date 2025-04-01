import { RouterProvider } from "react-router-dom";
import router from "./Router";  // Make sure it's lowercase

function App() {
  return <RouterProvider router={router} />;
}

export default App;
