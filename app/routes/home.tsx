import type { Route } from "./+types/home";
import HomePage from "../pages/Home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Clans" },
    { name: "description", content: " Clans page!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
