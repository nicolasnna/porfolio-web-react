export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding:"1.2em 2em",
      backgroundColor: "rgb(0, 0, 0, 0.4)"}}>
      <span style={{
        opacity: "0.8",
        fontSize: "0.9em",}}>
      © {currentYear} nicolasnna. Casi todos los derechos reservados. Inspirado en <a href='https://github.com/midudev/porfolio.dev' target='_blank'>proyecto de midudev</a>. 
      </span>
    </footer>
  )
}