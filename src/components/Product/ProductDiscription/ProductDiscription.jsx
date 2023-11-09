import React, { useState } from "react";
import {
  DescriptonItem,
  DescriptonList,
  NameDescriptonItem,
  NameDescriptonList,
  ProductDiscriptionContainer,
  ProductDiscriptionWrap,
} from "./ProductDiscription.styled";

export default function ProductDiscription() {
  const [description, setDescription] = useState(1);

  const getDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  return (
    <ProductDiscriptionContainer>
      <ProductDiscriptionWrap>
        <NameDescriptonList>
          <NameDescriptonItem
            value={1}
            className={description === 1 ? "active" : null}
            onClick={getDescription}
          >
            Opis
          </NameDescriptonItem>
          <NameDescriptonItem
            value={2}
            className={description === 2 ? "active" : null}
            onClick={getDescription}
          >
            Składowanie
          </NameDescriptonItem>
          <NameDescriptonItem
            value={3}
            className={description === 3 ? "active" : null}
            onClick={getDescription}
          >
            Opinie
          </NameDescriptonItem>
        </NameDescriptonList>
        <DescriptonList>
          <DescriptonItem
            style={{ display: description === 1 ? "list-item" : "none" }}
          >
            <p>
              Dzięki bogatym czarnym pigmentom tusz do rzęs L`Oréal Paris Volume
              Million Lashes Classic doskonale podkreśli Twoje rzęsy i doda im
              podwójnej objętości.
            </p>
            <h2>Nieruchomości:</h2>
            <ul>
              <li>nadaje rzęsom podwójną objętość i połysk</li>
              <li>
                dzięki efektowi utrwalenia nie pozostawia śladów na powiekach
              </li>
              <li>zagęszcza rzęsy i nadaje im naturalny kształt</li>
              <li>zmiękcza i wzmacnia rzęsy </li>
              <li>nie skleja rzęs i nie tworzy grudek</li>
            </ul>
          </DescriptonItem>
          <DescriptonItem
            style={{
              display: description === 2 ? "list-item" : "none",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nisi. Vero minus saepe rem, eum hic quisquam. Animi eum possimus,
            nemo quis quasi ea dignissimos. Molestias omnis fugiat quos.
            Blanditiis?
          </DescriptonItem>
          <DescriptonItem
            style={{ display: description === 3 ? "list-item" : "none" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            cupiditate nesciunt! Perferendis laudantium alias aliquid ullam
            magni, laboriosam temporibus quos! Accusamus vitae ducimus ipsam
            doloribus expedita voluptatum natus eligendi quos eius, excepturi
            velit veritatis impedit, nulla hic mollitia reiciendis amet.
            Molestias perspiciatis neque iusto nihil nesciunt cum quasi quisquam
            laudantium autem magni. Assumenda, fugit! Pariatur ab nam eveniet
            fuga, recusandae unde, tenetur ratione saepe et repellat omnis
            minima velit accusamus doloribus est. Voluptas, nostrum dolorem
            tempora accusamus aliquam quaerat eaque a provident ducimus
            incidunt? Unde ipsam ea dicta temporibus reiciendis alias similique
            natus neque, iure incidunt libero ratione inventore quisquam? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Eos similique ab
            sint placeat explicabo numquam praesentium architecto quis natus
            laborum, delectus reprehenderit modi doloremque. Modi quae eveniet a
            harum facilis doloremque illo laboriosam iste aliquam deserunt
            dolorem officiis, animi minus, dolorum repudiandae consequatur!
            Obcaecati doloribus facilis et, amet voluptatibus est, quos nisi
            tempore aspernatur autem sed facere error recusandae, nesciunt sequi
            distinctio. Ullam dolor vitae cupiditate quia! Architecto dolores
            alias, aspernatur hic nostrum autem molestias amet ipsa, praesentium
            assumenda natus ipsam sed debitis, itaque libero ut veritatis dolor
            deserunt. Magni a suscipit commodi sed minus autem aperiam! Officia
            officiis sint aut, itaque impedit, totam ipsam ullam id provident
            porro error hic suscipit eligendi esse deleniti iste illo voluptas
            vero libero voluptate corrupti sit autem velit! Ipsam earum aliquam
            aperiam inventore ullam optio suscipit debitis alias odit,
            distinctio quod aut corrupti minus. Repellat, sed natus odio ut
            quibusdam, repellendus adipisci ducimus, aperiam molestiae dolorum
            expedita nam distinctio aspernatur illum. Aspernatur, earum?
            Aspernatur quasi blanditiis, neque dicta expedita iure quisquam
            nisi, dolorem nostrum corrupti repellendus, veniam quae id deserunt
            vitae harum deleniti facere itaque quis non nam ullam voluptate?
            Accusantium laboriosam, natus eos consequatur cum officia.
            Asperiores dolore ab consequatur qui, accusamus iste. Tempore,
            architecto? Rem dicta nesciunt distinctio facere, quis ipsum
            explicabo eius quae, vitae doloribus consequatur quibusdam amet
            inventore autem eos optio labore aperiam magnam maiores ad deserunt
            fuga aut! Itaque repellat officia, nulla rerum animi sit ea vero
            distinctio accusamus quae numquam, deserunt rem quam fugit
            perferendis voluptatum. Deleniti, ipsa! Quis pariatur ad
            voluptatibus quasi consequatur id ullam provident tenetur mollitia
            molestiae accusamus ea officia qui assumenda fuga amet sequi eaque
            dolor doloremque omnis reprehenderit ratione architecto, quibusdam
            aspernatur! Repellat distinctio officiis, dolorem placeat laborum
            beatae quis rerum eius odio temporibus optio aperiam consequuntur
            expedita quaerat laboriosam aspernatur aut inventore dolores
            voluptate incidunt, nihil veritatis cumque. Mollitia tempore, culpa
            architecto possimus esse cumque voluptatum nihil blanditiis.
            Blanditiis veritatis dolor eaque nihil doloremque quod corrupti
            recusandae totam eius? Exercitationem aspernatur perferendis natus
            sunt tempora voluptatibus illo quod quasi quam ipsam mollitia autem
            rerum vel cum, eum hic sapiente quibusdam eaque laborum nostrum
            laudantium. Doloremque repellat et deleniti at fugiat repellendus?
            Nisi neque, voluptatibus, doloribus impedit quidem quos illo, sequi
            rerum aperiam nulla facilis sed. Voluptate vero quibusdam nemo,
            impedit omnis explicabo repellendus eius rerum sequi dolorum nisi id
            mollitia commodi at provident animi aut obcaecati, hic aperiam
            veniam consequuntur saepe laborum voluptas itaque! Quos doloremque
            eum ullam. Repellendus, quaerat molestias illum expedita molestiae,
            enim accusantium dolores fuga cum animi ullam. Eos dolorem
            asperiores deleniti reprehenderit. Facilis velit ipsa vero! Nesciunt
            aspernatur asperiores, labore laudantium ipsa corporis debitis
            delectus blanditiis rerum eum ea modi hic laborum architecto, at
            odio tempore deserunt iure quam, voluptatibus nulla. Eaque aut natus
            voluptatem doloremque sint. Laborum deleniti, perferendis cumque
            exercitationem ea quo minima earum optio fuga? Eveniet et architecto
            ut nemo voluptas? Dolor nesciunt dicta, tenetur aperiam suscipit,
            quae quo nam sapiente nobis sint eum possimus est tempore sed libero
            minus nostrum, enim at dignissimos?
          </DescriptonItem>
        </DescriptonList>
      </ProductDiscriptionWrap>
    </ProductDiscriptionContainer>
  );
}
