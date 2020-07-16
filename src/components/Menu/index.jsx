import React from 'react';
import './style.scss';

function Menu() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="web-title">星の音</div>
        <button type="button" id="bu" className="button-sub">
          注册
        </button>
        <button type="button" className="button-main">
          登录
        </button>
      </div>
    </header>
  );
}

export default Menu;