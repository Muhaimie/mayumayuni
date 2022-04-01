import Cover from "../components/Cover";
import NavBar from "../components/NavBar";
import Highlighted from "../components/products/Highlighted";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <Cover />
      <Highlighted />
      <div className="flex h-80 mt-4 bg-indigo-200"></div>
    </div>
  );
}
