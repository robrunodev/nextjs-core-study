import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  console.debug(slug);

  return (
    <div>
      <h2>Post: {slug}</h2>
    </div>
  );
}
