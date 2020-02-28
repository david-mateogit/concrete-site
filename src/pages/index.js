import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Services from "../components/services/services";
import Testimonials from "../components/testimonials/testimonials";
import Contact from "../components/contact/contact";
import Insta from "../components/insta/insta";
import Footer from "../components/footer/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Rutra's Concrete" />
    <Intro />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    <Insta />
    <Footer />
  </Layout>
);

export default IndexPage;
