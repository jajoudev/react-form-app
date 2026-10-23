import type { Route } from "./+types/home";
import { PostsList } from "../posts/PostsList";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <PostsList />
    </div>
  );
}
