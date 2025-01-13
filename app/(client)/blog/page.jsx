import Mensaje from "./components/Mensaje";
import Enlaces from "./components/Enlaces";
import Principal from "./components/Principal";
import Busqueda from "./components/Busqueda";

export default function Page() {
  return (
    <>
    <Principal></Principal>
    <Mensaje></Mensaje>

    <Enlaces></Enlaces>
    <Busqueda></Busqueda>
    </>
  );
}