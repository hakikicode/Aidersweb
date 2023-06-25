import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Slide169One = React.lazy(() => import("pages/Slide169One"));
const AboutUsPage = React.lazy(() => import("pages/AboutUsPage"));
const RewardsPage = React.lazy(() => import("pages/RewardsPage"));
const NFTsMarketpage = React.lazy(() => import("pages/NFTsMarketpage"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const SignUpPage = React.lazy(() => import("pages/SignUpPage"));
const FAQsPage = React.lazy(() => import("pages/FAQsPage"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/faqspage" element={<FAQsPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/nftsmarketpage" element={<NFTsMarketpage />} />
          <Route path="/rewardspage" element={<RewardsPage />} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
          <Route path="/slide169one" element={<Slide169One />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
