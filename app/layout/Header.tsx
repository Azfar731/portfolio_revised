import { useScrollSpy } from "~/hook/scrollSpy";
import "./Header.css";


export default function Header({ currentSection }: { currentSection: string }) {
  const arr = [
    { name: "ABOUT ME", id: "AboutMe" },
    { name: "WORK", id: "Work" },
    { name: "SERVICES", id: "Services" },
    { name: "Contact", id: "ContactSection" },
  ];
  const current = useScrollSpy(arr.map((elem) => elem.id) );

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
              current === elem.id ? "active" : ""
            }`}
          >
            {elem.name}
          </div>
        </div>
      </a>
    );
  });

  // const headerStyle = {
  //   width: `${arr.length * 15}%`,
  // };

  return (
    <header >
      <div className="headerInner">{elem}</div>
    </header>
  );
}
