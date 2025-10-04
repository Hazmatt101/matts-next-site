import Link from "next/link";
import "./Header.scss";

export const Header = () => {
  const links = [
    { link: "/about", text: "About Me" },
    { link: "/projects", text: "Projects" },
    { link: "/volunteering", text: "Volunteering" },
    { link: "/contact", text: "Contact Me" },
  ];
  return (
    <header className="p-4 bg-gray-200 header">
      <div className="header-controls">
        {
            links.flatMap((url) => {
                return (
                    <Link href={url.link}>{url.text}</Link>
                )
            })
        }
      </div>
    </header>
  );
};
