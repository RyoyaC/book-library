import React from "react";

/*
 * ログインカード
 * ユーザーネームとパスワードでログインする
 * TODO: CSSのデザインや構成、粒度は後々検討
 */
export default function LoginCardComponent() {
  return (
    <div className="card card-bordered bg-white shadow-lg w-full max-w-md">
      <div className="card-title flex justify-center mt-4">
        <p className="font-bold">Login</p>
      </div>
      <div className="card-body flex flex-col items-center">
        <div className="form-group mb-2 w-96">
          <label className="text-gray-700 text-sm font-bold">Username</label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 shadow focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-group mb-4 w-96">
          <label className="text-gray-700 text-sm font-bold">Password</label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 shadow focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="login-button flex justify-center">
          <button className="btn btn-active btn-neutral rounded-lg w-24 bg-blue-500 hover:bg-blue-700 border-transparent text-white font-bold rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
