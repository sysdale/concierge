import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, ErrorPage, AddSite, AddBooking } from "./components/index";
import SitesMain from "./components/sites/SitesMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/sites", element: <SitesMain /> },
      { path: "/bookings", element: <AddBooking /> },
    ],
  },
]);

function App() {
  return (
    <div className="font-poppins min-h-screen bg-[#F3F3F3]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
