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
        <div className="email animated-underline">{email}</div>
      </div>
      <span>
        {name} {"©"} All Rights Reserved
      </span>
    </div>
  );
}
