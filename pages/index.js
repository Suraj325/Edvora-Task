import { NavBar } from "../components/Navbar";
import { Filters } from "../components/Filters";
import { Cards } from "../components/Cards";

export default function Home() {
  return (
    <>
      <NavBar />
      <Filters />
      <Cards />
    </>
  );
}
