import Image from "next/image";

export default function Home() {

  return (
    <div className="h-full w-full items-center justify-center m-auto">
      <header className="flex w-full gap-0">
        <Image src="https://flexisaf.com/wp-content/uploads/2023/09/606c20478671192ef5a51ff0_fs-logo-1.svg" alt="" width={200} height={200} className="p-4 justify-start"/>
      </header>
      <main className="min-h-[100vh] flex w-full items-center bg-[rgb(216,219,222)]">
       <h1 className="m-auto font-bold text-4xl">Under Development</h1>
      </main>
      <footer className=" flex mb-0">
        <p className="m-auto p-4 text-1xl font-semibold">SafIntern &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
