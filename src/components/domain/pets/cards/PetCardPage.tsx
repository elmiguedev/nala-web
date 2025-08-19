interface CardPageProps {

}
export default function CardPage() {
  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center">
      <h1 >Carnet</h1>
      <p> -- aca va la imagen del carnet con su fotito y sus datos (aunque eso puede que no haga falta por el header) --</p>

      <h1 className="mt-5">Vacunas 💉</h1>
      <p>
        -- aca va una tablita con el calendario de vacunas --
      </p>

      <h1 className="mt-5">Desparacitaciones 🦠</h1>
      <p>
        -- aca va una tabla con las desparacitaciones --
      </p>
    </div>
  );
}