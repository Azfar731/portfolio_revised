import "./Footer.css";

export default function Footer({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <div id="Footer">
      <div className="nameEmail">
        <span className="footer-name">{name}</span>
        <a href={`mailto:${email}`} className=" email animated-underline">
          {email}
        </a>
      </div>
      <span>
        {name} {"©"} All Rights Reserved
      </span>
    </div>
  );
}
