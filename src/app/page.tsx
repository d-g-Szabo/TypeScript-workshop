import Hello from "@/components/Hello";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Typescript app</h1>
      <Hello name="World" age={23} />
    </main>
  );
}
