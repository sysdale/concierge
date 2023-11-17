import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, ErrorPage, AddSite, AddBooking } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/sites", element: <AddSite /> },
      { path: "/bookings", element: <AddBooking /> },
    ],
  },
]);

function App() {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
