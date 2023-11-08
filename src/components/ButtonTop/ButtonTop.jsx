import { ArrowIcon, Btn } from "./ButtonTop.styled";

export default function ButtonTop() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Btn onClick={scrollUp}>
        <ArrowIcon />
      </Btn>
    </>
  );
}
