import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();
  const id = router.query.id as string[];
  const segments = id?.join("/");

  console.debug(segments);

  return (
    <div>
      <h1>comment: {segments}</h1>
    </div>
  );
}
