import Hero from "./../components/Header/Header.jsx";
import Navbar from "../../src/components/Navbar/Navbar.jsx";

import Organizations from "./../components/Organisations/Organizations.jsx";
import Comments from "./../components/Comments/Comments.jsx";

import Faq from "../components/Faq/Faq.jsx";

function LandingPage() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Hero />
      <Organizations />
      <Comments />
      <Faq></Faq>
    </div>
  );
}

export default LandingPage;
