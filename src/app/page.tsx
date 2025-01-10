import Header from "./components/header";
import Input from "./components/input";
import Main from "./components/main";



export default function Home() {
  return (
    <div className="flex flex-col p-4 items-center bg-sky-800 min-h-screen py-2">
      <Header/>
      <Input/>
      <Main/>
    </div>
  );
}
