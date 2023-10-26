import { Btn, IconShopping } from "./Button.styled";

export default function Button({ text, width, isShopping }) {
  return (
    <Btn $size={width}>
      {isShopping ? (
        <>
          <span>{text}</span>
          <IconShopping />
        </>
      ) : (
        <> {text}</>
      )}
    </Btn>
  );
}
