export default function NavBar() {
  return (
    <>
      <div className="w-full flex p-1 HomeButton">
        <div className="w-3xs ">
          <a href="">Home</a>
        </div>

        <div className="w-md flex justify-around">
          <a href="">Trabajos</a>
          <a href="">Experiencia</a>
          <a href="">Mini Apps</a>
        </div>
      </div>
    </>
  );
}
