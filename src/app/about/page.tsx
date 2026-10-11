import Link from "next/link";

async function Page() {
  "use cache";
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <div>
      {data.title}
      About <Link href="/">home</Link>
    </div>
  );
}

export default Page;
