import Container from "../Container/Container";
import {
  AdvantagesContainer,
  AdvantagesIconTumb,
  AdvantagesItem,
  AdvantagesLink,
  AdvantagesList,
  DeliveryIcon,
  OriginalIcon,
  PinIcon,
  PresentIcon,
  ServicesIcon,
} from "./Advantages.styled";

export default function Advantages() {
  return (
    <AdvantagesContainer>
      <Container>
        <AdvantagesList>
          <AdvantagesItem $width="183px">
            <AdvantagesLink>
              <AdvantagesIconTumb>
                <DeliveryIcon />
              </AdvantagesIconTumb>
              <p>
                Szybka <br /> dostawa
              </p>
            </AdvantagesLink>
          </AdvantagesItem>
          <AdvantagesItem $width="102px">
            <AdvantagesLink>
              <AdvantagesIconTumb>
                <OriginalIcon />
              </AdvantagesIconTumb>
              <p>Gwarancja oryginalności</p>
            </AdvantagesLink>
          </AdvantagesItem>
          <AdvantagesItem $width="119px">
            <AdvantagesLink>
              <AdvantagesIconTumb>
                <ServicesIcon />
              </AdvantagesIconTumb>
              <p>Profesjonalna obsługa</p>
            </AdvantagesLink>
          </AdvantagesItem>
          <AdvantagesItem $width="114px">
            <AdvantagesLink>
              <AdvantagesIconTumb>
                <PinIcon />
              </AdvantagesIconTumb>
              <p>Punkt odbioru w Krakowie</p>
            </AdvantagesLink>
          </AdvantagesItem>
          <AdvantagesItem $width="108px">
            <AdvantagesLink>
              <AdvantagesIconTumb>
                <PresentIcon />
              </AdvantagesIconTumb>
              <p>Pakowanie na prezent</p>
            </AdvantagesLink>
          </AdvantagesItem>
        </AdvantagesList>
      </Container>
    </AdvantagesContainer>
  );
}
