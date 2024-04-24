import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <p>
        Bug with next/link and trailingSlash when using img src with relative
        URLs i.e. "hello-world.jpeg"
      </p>
      <ul>
        <li>
          Regular links work: <a href="/hello-world">Hello world</a> (click the
          link and you will see the image)
        </li>
        <li>
          Next/Link does not work: <Link href="/hello-world">Hello world</Link>{" "}
          (click the link and you <b>will not</b> see the image, you will have
          to refresh)
        </li>
      </ul>
    </>
  );
}
