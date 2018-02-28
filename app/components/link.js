import React from 'react';
export default ({ active, children, onClick }) => {
  if (active) {
    return (
      <li className="is-active">
        <a href="javascript:void(0)">{children}</a>
      </li>
    );
  }
  return (
    <li>
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  );
};
