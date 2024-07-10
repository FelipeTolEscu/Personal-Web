//Css
import './App.css'
//Import's
import Header from './Modulos/header'
import TablePanel from './Modulos/tablePanel'

function App() {
  return (
    <>
      <Header />
      <section className="whitheSection flex justify-center items-center lg:justify-start lg:pl-60 lg:pt-10 lg:pb-10 md:pt-20 md:pb-20 sm:pt-20 sm:pb-20">
        <div className="max-w-96 text-center lg:text-left">
          <h1 className="text-gray-800 text-4xl sm:text-4xl md:text-5xl lg:text-xl xl:text-6xl pb-5">Sobre Mí</h1>
          <p className="text-gray-500">Desarrollador Junior Front End con 1 año de experiencia pero muchas ganas de aprender en el entorno web</p>
        </div>
      </section>
      <TablePanel />
    </>
  )
}

export default App
// https://www.ruizlaraingenieria.com/wp-login.php?action=rp&key=ivn4nLqw128015Xf7sfT&login=Ruiz%20Lara

// https://www.ruizlaraingenieria.com/wp-login.php

