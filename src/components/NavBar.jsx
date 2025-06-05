import reactLogo from "../assets/react.svg";

function NavBar() {
  return (
    <header>
      <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
        <img src={reactLogo} alt="React Logo" />
        React : Todo List
      </div>
    </header>
  );
}

export default NavBar;
