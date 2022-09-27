import Link from "next/link";
import Image from "next/Image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <h1>First Post</h1>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={250} // Desired size with correct aspect ratio
        width={250} // Desired size with correct aspect ratio
        alt="profileImg"
      />
    </>
  );
}
