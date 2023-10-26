import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function Inform() {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <Link>
              <div></div>
              <p>Szybka dostawa</p>
            </Link>
          </li>
          <li>
            <Link>
              <div></div>
              <p>Gwarancja oryginalności</p>
            </Link>
          </li>
          <li>
            <Link>
              <div></div>
              <p>Profesjonalna obsługa</p>
            </Link>
          </li>
          <li>
            <Link>
              <div></div>
              <p>Punkt odbioru w Krakowie</p>
            </Link>
          </li>
          <li>
            <Link>
              <div></div>
              <p>Pakowanie na prezent</p>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
