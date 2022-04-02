import Cover from "../components/Cover";
import NavBar from "../components/NavBar";
import Featured from "../components/products/Featured";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <Cover />
      <Featured />
      <div className="flex h-80 mt-4 bg-indigo-200"></div>
    </div>
  );
}
