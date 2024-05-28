import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayou() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className="h-full">
        <main className="">
          <h1></h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayou;
