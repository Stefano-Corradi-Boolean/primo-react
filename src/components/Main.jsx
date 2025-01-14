
const miaClasse = "main-paragraph";

const Main = (props) => {

  const isLogged = false;
  const testo = null

  return (
    <main className="container">

      <section>
        <h1 className="my-3">{props.titolo}</h1>
        <p className={miaClasse}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur enim ullam in ab, quidem saepe dolores ut atque vero excepturi non eligendi consequuntur, accusantium est beatae quo nihil sunt iste!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates, recusandae eligendi nesciunt error nisi ratione quo tempore iusto iure vero atque natus non aspernatur similique assumenda minima alias quia?
        </p>
      </section>

      <section>
        {/* viene stampato l'elemento solo se la variabile isLogged è true */}
        {isLogged && <h2>Benvenuto utente</h2>}
      </section>

      {isLogged && (
        <section>
          <h1>Bevenuto utente!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo, natus quisquam reprehenderit asperiores, et dolores obcaecati repellat aut eaque ut saepe, dignissimos ipsum iusto rem? Aperiam commodi suscipit architecto.
          </p>
        </section>
      )}

      <section>
        {/* stampa alternativa con operatore ternario  */}
        {isLogged ? <h2>Benvenuto utente</h2> : <h2>Ti devi loggare</h2>}
      </section>

      <section>
        <p>
          {testo || 'testo alternativo'}
        </p>
      </section>

      <div>
        <img src="/img/bosco.jpg" alt="" />
      </div>

    </main>
  )
}

export default Main

