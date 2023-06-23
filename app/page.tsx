import Banner from "./components/Banner";
import FilterStrains from "./components/FilterStrains";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <Banner />

      <FilterStrains />

      <section className="w-full px-5 lg:px-10 grid gap-y-10 lg:gap-y-12 mx-auto  max-w-screen-2xl">
        strains
      </section>
    </main>
  );
}
