import Header from "./components/header";
import Input from "./components/input";


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-sky-800 min-h-screen py-2">
      <Header/>
      <Input/>
    </div>
  );
}
