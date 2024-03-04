import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 sm:w-[400px] w-auto mx-auto h-[100dvh]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ro'yxatdan o'tish
        </h2>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-start text-sm font-medium leading-6 text-gray-900 px-3"
            >
              Ismingizni kiriting
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="surname"
              className="block text-start text-sm font-medium leading-6 text-gray-900 px-3"
            >
              Familiyangizni kiriting
            </label>
            <div className="mt-1">
              <input
                id="surname"
                name="surname"
                type="surname"
                autoComplete="surname"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-start text-sm font-medium leading-6 text-gray-900 px-3"
            >
              Email kiriting
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="px-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Parol kiriting
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="px-3 block text-sm font-medium leading-6 text-gray-900"
            >
              Parolni qayta kiriting
            </label>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Akkauntingiz bormi?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
