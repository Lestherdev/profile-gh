import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <>
      <div className="w-full flex pt-2 pb-2 pl-10 pr-10 HomeButton">
        <div className="w-3xs ">
          <a href="">Home</a>
        </div>

        <div className="w-full flex justify-around ">
          <Button href="/" variant="text">Experiencia</Button>
          <Button href="/" variant="contained">Experiencia</Button>
          <Button href="/" variant="outlined">Experiencia</Button>
        </div>
      </div>
    </>
  );
}
