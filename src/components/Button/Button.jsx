import { Btn, IconShopping } from './Button.styled';

export default function Button({ text, width, isShopping, onClick }) {
  return (
    <Btn $size={width} onClick={onClick} type="submit">
      <span>{text}</span>
      {isShopping && <IconShopping />}
    </Btn>
  );
}

// Приклади використання кнопки
// Без кошика в text=" " передаємо текст, в width=" " ширину кнопки
// <Button text="Do kosza" width="148px" />

// Для кнопки з малюнком кошика передаємо isShopping
//  <Button text="Do kosza" width="148px" isShopping />
