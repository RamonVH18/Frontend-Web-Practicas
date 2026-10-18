import { Saludo } from "./Saludo";
import { TarjetaPerfil } from "./TarjetaPerfil";

export default function App() {
  return (
    <main className="App">
      <Saludo nombre="ISW"/>
      
      <section className="equipo">
        <TarjetaPerfil nombre="Juan Perez" carrera="Ingenieria en Sistemas" semestre={5}/>
        <TarjetaPerfil nombre="Maria Garcia" carrera="Ingenieria en Computacion" semestre={4}/>
        <TarjetaPerfil nombre="Carlos Lopez" carrera="Ingeniera en Electronica" semestre={3}/>
      </section>
    </main>
  )
}