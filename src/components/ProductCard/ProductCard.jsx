import {
  Inform,
  StarIcon,
  ImgContainer,
  ItemContainer,
  InformContainer,
  InformTitle,
  StarContainer,
  StarWrap,
  StarBox,
  PriceContainer,
  PriceAction,
  PricePrevious,
  Description,
  PriceWrap,
  ButtonWrap,
  HeartIcon,
  HeartWrap,
} from "./ProductCard.styled";

import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProductCard({ product, className }) {
  const { t } = useTranslation();
  return (
    <ItemContainer>
      <Link to={`${product.id}`}>
        <ImgContainer $img={product.img} $img2={product.img2}>
          <Inform>
            <p>{t("product.action")}</p>
          </Inform>
          <HeartWrap>
            <HeartIcon />
          </HeartWrap>
        </ImgContainer>
      </Link>
      <InformContainer>
        <Link to={`${product.id}`}>
          <InformTitle>{product.name}</InformTitle>
        </Link>

        <Description>{product.description}</Description>
        <PriceWrap className={className}>
          <div>
            <StarContainer>
              <StarBox>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
                <StarWrap>
                  <StarIcon />
                </StarWrap>
              </StarBox>
              <p>{product.coments}</p>
            </StarContainer>
            <PriceContainer>
              <PriceAction>{product.action}₴</PriceAction>
              <PricePrevious>{product.price}₴</PricePrevious>
            </PriceContainer>
          </div>
          <ButtonWrap>
            <Button text="Do kosza" width="148px" isShopping></Button>
          </ButtonWrap>
        </PriceWrap>
      </InformContainer>
    </ItemContainer>
  );
}

// <ItemContainer>
//       <ImgContainer>
//         <Inform>
//           <p>{t("product.action")}</p>
//         </Inform>
//         <ImgItem src="img/image.png" alt="Brasmatik" />
//       </ImgContainer>
//       <InformContainer>
//         <InformTitle>Brasmatik do rzęs jest czarny</InformTitle>
//         <Description>
//           Tusz do rzęs zapewniający elegancką objętość i wydłużenie rzęs
//         </Description>
//         <PriceWrap>
//           <div>
//             <StarContainer>
//               <StarBox>
//                 <StarWrap>
//                   <StarIcon />
//                 </StarWrap>
//                 <StarWrap>
//                   <StarIcon />
//                 </StarWrap>
//                 <StarWrap>
//                   <StarIcon />
//                 </StarWrap>
//               </StarBox>
//               <p>2</p>
//             </StarContainer>
//             <PriceContainer>
//               <PriceAction>369 ₴</PriceAction>
//               <PricePrevious>420 ₴</PricePrevious>
//             </PriceContainer>
//           </div>
//           <ButtonWrap>
//             <Button text="Do kosza" width="148px" isShopping></Button>
//           </ButtonWrap>
//         </PriceWrap>
//       </InformContainer>
//     </ItemContainer>
