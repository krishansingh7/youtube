import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import TrendingMusicPage from "./components/TrendingMusicPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path:"/",
        element: <MainContainer/>,
      },
      {
        path:"/search_results/:searchid",
        element: <SearchPage/>,
      },
      {
        path:"/trending",
        element: <TrendingMusicPage/>,
      },
      {
        path:"/watch",
        element: <WatchPage/>,
      },
    ],
  },
]);

function App() {

  return (
    <Provider store={appStore}>
      <div className="bg-black text-white h-screen overflow-hidden">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
// bg-[#0f0f0f]