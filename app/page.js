import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Web Dev 2 Demos</h1>

      <ul>
        <li>
          <Link href="week-2">Week 2</Link>
        </li>
        <li>
          <Link href="week-3">Week 3</Link>
        </li>
        <li>
          <Link href="week-4">Week 4</Link>
        </li>
        <li>
          <Link href="week-5">Week 5</Link>
        </li>
        <li>
          <Link href="week-6">Week 6</Link>
        </li>
        <li>
          <Link href="week-6-new">Week 6 New</Link>
        </li>
        <li>
          <Link href="week-7">Week 7</Link>
        </li>
      </ul>
    </main>
  );
}
