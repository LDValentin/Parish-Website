import { useState } from "react";
import MassTimes from "./components/MassTimes";
import Header from "./components/header";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Groups from "./components/Groups";
import Footer from "./components/Footer";
// import Readings from "./components/Readings";
// import News from "./components/News";
// import Groups from "./components/Groups";
// import Admin from "./components/Admin";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header></Header>
      <Hero>  </Hero>
      <nav style={{ marginBottom: "20px" }}>
        {/* <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("news")}>News</button>
        <button onClick={() => setPage("groups")}>Groups</button>
        <button onClick={() => setPage("admin")}>Admin</button> */}
      </nav>

      {page === "home" && (
        <>
          <MassTimes />
          <Resources />
          <Groups />
          <Footer></Footer>
        </>
      )}

    </div>
  );
}

export default App;
