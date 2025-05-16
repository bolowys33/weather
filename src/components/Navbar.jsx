const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center h-[70px] px-[10px] text-[#002B5B]">
      <h2 className="text-[16px] md:text-[30px] font-bold">Weather App</h2>

      <ul className="flex justify-between gap-[60px] text-[16px] font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
