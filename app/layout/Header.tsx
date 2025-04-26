import "./Header.css";

export default function Header({ currentSection }: { currentSection: string }) {
  const arr = [
    { name: "ABOUT ME", id: "AboutMe" },
    { name: "WORK", id: "Work" },
    { name: "SERVICES", id: "Services" },
    { name: "PROFILES", id: "Profiles" },
  ];

  const elem = arr.map((elem, index) => {
    return (
      <a key={elem.id} href={`#${elem.id}`}>
        <div
          className={`headerElement ${
            index < arr.length - 1 ? "rightBorder" : ""
          } `}
        >
          <div
            className={`headerElementName ${
              currentSection === elem.id ? "active" : ""
            }`}
          >
            {elem.name}
          </div>
        </div>
      </a>
    );
  });

  const headerStyle = {
    width: `${arr.length * 15}%`,
  };

  return (
    <header style={headerStyle}>
      <div className="headerInner">{elem}</div>
    </header>
  );
}
