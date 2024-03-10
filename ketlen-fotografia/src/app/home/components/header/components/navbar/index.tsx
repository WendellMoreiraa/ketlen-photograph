const NavBar = () => {
  return (
    <nav className="flex  gap-1.5 text-sm">
      <a className="cursor-pointer px-5 py-2 hover:bg-prymary-100  hover:text-white  ">
        HOME
      </a>
      <a className="cursor-pointer px-5 py-2 hover:bg-prymary-100  hover:text-white ">
        PORTIFOLIO
      </a>
      <a className="cursor-pointer px-5 py-2 hover:bg-prymary-100 hover:text-white ">
        ORÇAMENTO
      </a>
      <a className="cursor-pointer px-5 py-2 hover:bg-prymary-100  hover:text-white ">
        SOBRE
      </a>
      <a className="cursor-pointer px-5 py-2 hover:bg-prymary-100  hover:text-white ">
        FEEDBACK
      </a>
    </nav>
  );
};

export default NavBar;
