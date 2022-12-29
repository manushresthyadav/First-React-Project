import { useRef } from "react";
import "./App.css";
import "./index.css";
import FirstSection from "./firstsection";
import Logo from "./onlylogo";
import Blog1 from "./blog";
import Cat from "./cat";
import Blog2 from "./blog2";
import Footer from "./footer";
import BothFtrs from "./ftrs";
import SignIn from "./Signin";
import SignUp from "./signup";
import "./header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function useApp() {
  const b11 = useRef(null);
  const c11 = useRef(null);
  const d11 = useRef(null);
  const cpt = useRef(null);

  const scrollToSection = (elmnt) => {
    window.scrollTo({
      top: elmnt.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">

      <div className="header">
        <div className="flex h-one cursor-pointer">
          <a href="/" className="h-firsta">
            GPT-3
          </a>
          <a href="/">What is GPT?</a>
          <a onClick={() => scrollToSection(b11)}>Open AI</a>
          <a onClick={() => scrollToSection(c11)}> Case Studies</a>
          <a onClick={() => scrollToSection(d11)}> Library</a>
        </div>

        <div className="inham flex flex-col">
          <section class="top-nav">
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-button-container" for="menu-toggle">
              <div class="menu-button"></div>
            </label>
            <ul class="menu">
              <a href="/">
                <li>Home</li>
              </a>
  
              <a onClick={() => scrollToSection(cpt)}>
                <li>What is GPT?</li>
              </a>
              <a onClick={() => scrollToSection(b11)}>
                <li>OpenAI</li>
              </a>
              <a onClick={() => scrollToSection(c11)}>
                <li>Case Studies</li>
              </a>
              <a onClick={() => scrollToSection(d11)}>
                {" "}
                <li>Library</li>
              </a>
            </ul>
          </section>
        </div>

        <div className="users">
          <Link to="/signup">
            <i class="fa-solid fa-circle-user fa-2xl"></i>
          </Link>

          <Link to="/signin">
            <i class="fa-regular fa-circle-user fa-2xl"></i>
          </Link>
        </div>
        <Link to="/signin">
          <div className="h-r1">Sign in</div>
        </Link>

        <div className="h-right rounded-xl cursor-pointer">
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/#b11"></Route>
        </Routes>
        <div ref={cpt}>
          <FirstSection />
        </div>

        <Logo />
        <div>
          {" "}
          <Blog1 />
        </div>
        <div ref={b11}>
          <BothFtrs />
        </div>

        <Cat />
        <div className="tdc" ref={c11}>
          <Blog2 />
        </div>
        <div ref={d11}>
          <Footer />
        </div>

        {/* <SignIn/> */}
      </div>
    </div>
  );
}

export default useApp;
