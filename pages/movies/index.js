import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movies() {
  const router = useRouter();

  return (
    <>
      <h1>List of Movies</h1>
      <button
        onClick={() => {
          const isAquaman = confirm("Are you aquaman?");
          if (isAquaman) {
            router.push("/movies/aquaman");
          }
        }}
      >
        Go to Aquaman!
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.slug}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
