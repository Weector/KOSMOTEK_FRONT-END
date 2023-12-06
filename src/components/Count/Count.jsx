import {
  CountWrap,
  CountButton,
  MinucIcon,
  PlusIcon,
  CountTotal,
} from './Count.styled';

export default function Count({
  totalProduct,
  handleCountPlus,
  handleCountMinus,
}) {
  return (
    <CountWrap>
      <CountButton disabled={totalProduct <= 1} onClick={handleCountMinus}>
        <MinucIcon />
      </CountButton>
      <CountTotal>{totalProduct}</CountTotal>
      <CountButton onClick={handleCountPlus} name="plus">
        <PlusIcon />
      </CountButton>
    </CountWrap>
  );
}
