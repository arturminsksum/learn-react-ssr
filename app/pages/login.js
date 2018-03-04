import React, { Component } from 'react';

export default () => (
  <form className="box" method="post" action="/api/login">
    <p className="title">Login</p>
    <div className="field">
      <p className="control">
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
        />
      </p>
    </div>
    <div className="field">
      <p className="control">
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
        />
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button is-success">Login</button>
      </p>
    </div>
  </form>
);
