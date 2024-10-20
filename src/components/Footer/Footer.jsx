import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.2em 2em",
        backgroundColor: "rgb(0, 0, 0, 0.4)",
      }}
    >
      <span
        style={{
          opacity: "0.8",
          fontSize: "0.9em",
        }}
      >
        {currentYear} - Nicolás Norambuena -{" "}
        <a
          className="link-github"
          style={{ color: "#00FFFF" }}
          href="https://github.com/nicolasnna"
        >
          Github
        </a>
      </span>
    </footer>
  )
}
