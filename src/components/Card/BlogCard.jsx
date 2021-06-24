import React from "react";

import { StethoscopeIcon } from "../../svg/index";

import { BlogCardStyle } from "./Card.style";

function BlogCard(props) {
  const {
    image,
    imageAlt,
    heading,
    socialLinks,
    description,
    cardClass,
    date,
    name,
  } = props;
  return (
    <BlogCardStyle className={cardClass}>
      <figure className="thumbnail-wrapper">
        {imageAlt ? (
          <img src={image} alt={imageAlt} className="thumbnail" />
        ) : (
          image && <span className="socail-icon">{image}</span>
        )}
      </figure>

      <h2 className="heading">{heading}</h2>

      {name && (
        <article className="blog-histroy">
          {date && <span className="publish-date">{date}</span>}
          {name && <span className="publisher-bn">{name}</span>}
        </article>
      )}

      <p className="description">{description}</p>

      <section className="social-links-container">
        {socialLinks &&
          socialLinks.map((socialLink, index) => {
            const { icon, url } = socialLink;
            return (
              <a href={url} target="_blank" className="social-link" key="index">
                <span className="icon">{icon}</span>
              </a>
            );
          })}
      </section>
    </BlogCardStyle>
  );
}

export default BlogCard;
