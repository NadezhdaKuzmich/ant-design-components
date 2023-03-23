import React from "react";
import { Divider, Carousel, Image } from "antd";

const contentGenerationTemplate = [
  {
    title: "Українські Карпати",
    body: "Українські Карпати — частина гірської системи Східних Карпат на Заході України на території Закарпатської, Львівської, Івано-Франківської та Чернівецької областей. Їхня довжина від верхів’їв річки Сян до витоків річки Сучава становить 280 км, а ширина — понад 110 км. Українські Карпати багаті мінеральними водами, на основі яких у багатьох місцях регіону сформувалися бальнеологічні курорти. Навесні та влітку тут можна не тільки подихати свіжим гірським повітрям, а й насолодитися чудовою і різноманітною квітучою гірською природою. Гори також, безсумнівно, чарівні взимку.",
    images: ["/images/img1.jpeg", "/images/img2.jpeg"],
  },
  {
    title: "Озеро Синевир",
    body: "Озеро Синевир є найбільшим і найглибшим високогірним озером України, яке розташоване на висоті 989 м над рівнем моря. Водойма утворилася внаслідок перекриття гірського потоку кам’янистими породами після землетрусу 10-11 тисяч років тому. Вода в озері — слабомінералізована, чиста, прозора. Схили біля озера вкриті віковими ялинами, привертають увагу своєю величчю. Посередині розміщений острівець, який нагадує зіницю ока. Тому в народі Синевир називають «Морським оком». Щорічно тут відбувається Всеукраїнський фестиваль «На Синевир трембіти кличуть».",
    images: ["/images/img3.jpeg", "/images/img4.jpeg"],
  },
  {
    title: "Лемурійське озеро",
    body: "Одне з найгарніших і незвичайних місць України – рожеве озеро. Лемурійське озеро на Херсонщині називають українським Мертвим морем: солоність озера сягає позначки 300 грамів солі на літр води, що на 50 грамів більше, ніж у Мертвому. Рожевий колір з’являється завдяки водоростям Дуналіелла, які під дією сонця виробляють речовину, яка фарбує воду: чим спекотніше літо, тим більш насичений рожевий колір має вода.",
    images: ["/images/img5.jpeg", "/images/img6.jpeg"],
  },
];

const defaultTabs = new Array(3).fill(null).map((_, index) => {
  const id = String(index + 1);
  const data = contentGenerationTemplate[id - 1];
  return {
    label: `Tab ${id}`,
    children: (
      <div
        style={{
          width: "1100px",
          fontSize: "16px",
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        <Divider orientation="left" style={{ fontSize: "24px" }}>
          {data.title.toUpperCase()}
        </Divider>
        <p>{data.body}</p>
        <Carousel effect="fade" autoplaySpeed="50" autoplay>
          {data.images.map((img, index) => {
            return (
              <div key={index}>
                <Image width={1100} height={600} src={img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    ),
    key: id,
    closable: false,
  };
});

export default defaultTabs;
