import React from "react";
import Banner from "../banner/banner";
import {
  Article,
  Section,
  TextBox,
  Heading4,
  Heading5,
} from "./testimonials.css";
import { reviews } from "./reviewsdata";

const Testimonials = () => (
  <Article id="testimonials">
    <Section>
      <Banner title="Testimonials" />
      {reviews.map((review, index) => (
        <TextBox key={`${review}-${index}`}>
          <blockquote>“{review.review}”</blockquote>
          <Heading5>{review.project}</Heading5>
          <Heading4>
            {" "}
            <span role="img" aria-label="5 stars">
              🌟🌟🌟🌟🌟
            </span>{" "}
            {review.name}{" "}
          </Heading4>
        </TextBox>
      ))}
      <a
        href="https://www.homeadvisor.com/rated.RutrasConcreteLLC.54191722.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#71525c" }}
      >
        Read more reviews on HomeAdvisor&rarr;
      </a>
    </Section>
  </Article>
);

export default Testimonials;
