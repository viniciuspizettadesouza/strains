import Image from "next/image";
import Link from "next/link";

function IndexPage() {
  return (
    <header className="w-full px-5 grid gap-y-10 mx-auto animate-fade-in sticky">
      <section className="w-full px-5 grid col-start-1 col-end-5 mx-auto py-6 grid-flow-col items-center justify-between grid-cols-header-collapsed gap-y-6 gap-x-6">
        <Link
          className="inline-grid"
          href="/"
          title="Leafwell"
        >
          <Image
            width="40"
            height="34"
            className="col-start-1 row-start-1 h-auto max-w-full md:hidden"
            src="/icon.svg"
            alt=""
          />
          <Image
            width="128"
            height="18"
            className="col-start-1 row-start-1 h-auto max-w-full hidden md:inline-grid"
            src="/icon-mobile.svg"
            alt=""
          />
        </Link>
        <nav className="mx-auto">
          <ul className="grid grid-flow-col items-center gap-4">
            <li>
              <Link
                href="/blog/"
                className="text-neutral-950 text-3.5 font-normal"
              >
                Medical cannabis
              </Link>
            </li>
            <li>
              <Link
                href="/research/"
                className="text-neutral-950 text-3.5 font-normal"
              >
                Learn with Leafwell
              </Link>
            </li>
            <li>
              <Link
                href="/partner-with-leafwell/"
                className="text-neutral-950 text-3.5 font-normal"
              >
                Become a Partner
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="select-none inline-grid gap-x-2 grid-flow-col items-center justify-center text-center text-sm font-heading transition-colors focus:outline-none outline-none cursor-pointer leading-none border py-3 px-3 bg-white border-white hover:border-green hover:bg-green hover:text-black rounded-full p-reset w-10 h-10 justify-self-end"
          aria-label="Toggle Search"
        >
          <Image
            src="https://leafwell.com/search.svg"
            className="w-4 m-auto"
            alt="Toggle Search"
            width="19"
            height="19"
          />
        </button>
        <Link
          className="relative underline-offset-small cursor-pointer transition-all duration-200 focus:outline-none outline-none no-underline hover:underline group inline-grid grid-flow-col gap-x-2 justify-start items-center font-heading text-sm justify-self-center"
          target="_blank"
          rel="noopener"
          href="https://medicalcard.io/patients/login"
        >
          Sign in
          <Image
            width="15"
            height="12"
            src="/arrow.svg"
            alt=""
            className="duration-500"
          />
        </Link>
        <Link
          className="cursor-pointer w-[151px] h-[47px] px-6 py-3.5 bg-gradient-to-bl from-emerald-400 via-emerald-400 to-violet-300 rounded-md justify-center items-start gap-2.5 inline-flex hover:from-green-400 hover:to-green-400"
          href="/medical-card/"
        >
          <span className="text-center text-neutral-950 text-3.5 font-normal">
            Get your card
          </span>
        </Link>
      </section>
    </header>
  );
}

export default IndexPage;
