import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
    { label: "Logout", path: "/logout" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}
export default Sidebar;
