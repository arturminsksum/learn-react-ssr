import React, { Component } from 'react';

export default props => (
  <article className="media box">
    <div className="media-content">
      <div className="content">
        <a className="title" href={props.item.url}>
          {props.item.title}
        </a>
        <p>
          <span>{props.item.description}</span>
        </p>
        <p>
          <strong>Source: {props.item.source}</strong>
          <small>Author: {props.item.author}</small>
          <small>Time: {props.item.publishedAt}</small>
        </p>
      </div>
    </div>
  </article>
);
