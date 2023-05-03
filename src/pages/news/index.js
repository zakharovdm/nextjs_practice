import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/news1">news 1</Link>
        </li>
        <li>
          <Link href="/news/news2">news 1</Link>
        </li>
      </ul>
    </Fragment>
  );
}
