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
          <h1 className="text-gray-800 text-4xl sm:text-4xl md:text-5xl lg:text-xl xl:text-6xl pb-5">Cumpliendo con los más altos estándares de calidad</h1>
          <p className="text-gray-500">Nos dedicamos a ofrecer soluciones innovadoras y personalizadas para cumplir con los desafíos técnicos y funcionales de nuestros clientes.</p>
        </div>
      </section>
      <TablePanel />
    </>
  )
}

export default App
