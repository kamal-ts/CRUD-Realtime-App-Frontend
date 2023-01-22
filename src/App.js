import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateProduct, ProductList, UpdateProduct } from './components/product/index'
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
    errorElement: <ErrorPage />,

  }, 
  {
    path: "product/create",
    element: <CreateProduct />,
  },
  {
    path: "product/:id/edit",
    element: <UpdateProduct />,
  }

]);


function App() {
  return (
    <div className="container bg-slate-900  mx-auto text-gray-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
