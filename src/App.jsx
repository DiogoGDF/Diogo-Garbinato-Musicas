import './App.css'
import Band from './components/Band'
import bands from './utils/bands'

function App() {
  return (
    <div className='app'>
      <header>
        <img src="https://avatars.githubusercontent.com/u/114186352?v=4" alt="Foto de Diogo" />
      </header>
      
      <section className='bands'>
        <h2>Minhas Bandas Preferidas</h2>
        <p>As Bandas que eu mais curto ouvir!</p>
        <div className='band-cards'>
          {bands.map((band) => {
            return (
              <Band
                key={band.id}
                name={band.name}
                image={band.image}
                spotify={band.spotify}
              />
            )
          })}
        </div>
      </section>
      <section>
        albuns
      </section>
      <footer>
        links
      </footer>
    </div>
  )
}

export default App
