import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { content: "Welcome to Remix!", name: "description" },
  ];
};

export default function Index(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to
            <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              alt="Remix"
              className="block w-full dark:hidden"
              src="/logo-light.png"
            />
            <img
              alt="Remix"
              className="hidden w-full dark:block"
              src="/logo-dark.png"
            />
          </div>
        </header>
        <div><Link to="/sand-box">Go sandbox</Link></div>
      </div>
    </div>
  );
}
