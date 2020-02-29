import React from "react";
import Image from "gatsby-image";
import { css } from "styled-components";

import useInstagram from "./use-instagram";
import { Article, Section, InstaBox } from "./insta.css";
import Banner from "../banner/banner";

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <Article id="latest">
      <Banner title="Our Latest Projects." />
      <Section>
        <InstaBox>
          {instaPhotos.map(photo => (
            <a
              href={`https://instagram.com/p/${photo.id}/`}
              target="_blank"
              rel="noreferrer noopener"
              key={photo.id}
            >
              <Image
                key={photo.id}
                css={css`
                  width: 100%;
                  * {
                    margin-top: 0;
                  }
                `}
                fluid={photo.fluid}
                alt={photo.caption}
              />
            </a>
          ))}
        </InstaBox>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#71525c" }}
        >
          View more on Instagram &rarr;
        </a>
      </Section>
    </Article>
  );
};

export default Insta;
