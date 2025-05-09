import "./Nav.css";

export default function Nav({name}: {name: string}) {
  return (
    <nav>
      <span>Azfar Razzaq</span>
      <a
        href="https://wa.me/923134549126"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="status-button">
          <span className="status-indicator"></span>
          <span className="status-text">Chat With Me</span>
        </div>
      </a>
    </nav>
  );
}
