import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

import Sidebar from "../components/sidebar/sidebar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/services/services";
import Testimonials from "../components/testimonials/testimonials";
import Contact from "../components/contact/contact";
import Insta from "../components/insta/insta";
import ServiceArea from "../components/servicearea/servicearea";

const IndexPage = () => (
  <>
    <Sidebar />
    <Layout>
      <SEO title="Rutra's Concrete" />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <ServiceArea />
      <Insta />
    </Layout>
  </>
);

export default IndexPage;
