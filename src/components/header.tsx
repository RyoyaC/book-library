import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-blue-300">
      <div className="navbar-start">
        <a href="/">
          {/* ロゴおよびサイト名は変更予定 */}
          <div className="logo px-6 px-2">LOGO bookshelf</div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal px-1">
          <li className="nav-item">
            <a>Item1</a>
          </li>
          <li className="nav-item">
            <a>Item2</a>
          </li>
          <li className="nav-item">
            <a>Item3</a>
          </li>
          <li className="nav-item">
            <a>Item4</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-16 rounded-full">
            {/* 画像は各ユーザーの画像を表示する */}
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
