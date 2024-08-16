import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-blue-300">
      <div className="navbar-start">
        <Link href={{ pathname: "/" }}>
          {/* ロゴおよびサイト名は変更予定 */}
          <div className="logo px-6 px-2">LOGO bookshelf</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal px-1">
          <li className="nav-item">
            <Link href={{ pathname: "/" }}>ホーム</Link>
          </li>
          <li className="nav-item">
            <Link href={{ pathname: "/books" }}>本棚</Link>
          </li>
          <li className="nav-item">
            <a>棚</a>
          </li>
          <li className="nav-item">
            <a>使い方</a>
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
