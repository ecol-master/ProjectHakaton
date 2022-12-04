import React from "react";
import { useState } from "react";
import Sidebar from "../../Home/components/Sidebar/Sidebar";

import "./GradeArticle.scss";

const GradeArticle = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const [vote1Count, setVote1Count] = useState(0);
  const [vote2Count, setVote2Count] = useState(0);
  const [vote3Count, setVote3Count] = useState(0);
  const [vote4Count, setVote4Count] = useState(0);
  const [vote5Count, setVote5Count] = useState(0);
  const [vote6Count, setVote6Count] = useState(0);
  const [vote7Count, setVote7Count] = useState(0);
  const [vote8Count, setVote8Count] = useState(0);

  const title = "Title";
  const author = "Author";
  const text = `createdcreatedcreatedcreatedcreatedcreatedcreated
            createdcreatedcreatedcreatedcreatedcreatedcreated
            createdcreatedcreatedcreatedcreatedcreatedcreated
            createdcreatedcreatedcreatedcreatedcreatedcreated
            createdcreatedcreatedcreatedcreatedcreatedcreated
                createdcreatedcreatedcreatedcreatedcreatedcreated

  <var>
  createdcreatedcreatedcreatedcreatedcreatedcreated
  
  
  createdcreatedcreatedcreatedcreatedcreatedcreated</var>
  Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
Логическое преобразование

Логическое преобразование самое простое.

Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции Boolean(value).

Правило преобразования:

    Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
    Все остальные значения становятся true.

Например:
  `;
  const creator = "User";
  const created = "22-04-2222";

  return (
    <div className="grade__article">
      <Sidebar
        setIsOpenSideBar={setIsOpenSideBar}
        isOpenSideBar={isOpenSideBar}
      ></Sidebar>

      {/* показ самой статьи полностью */}
      <main
        className={`grades__section ${isOpenSideBar == true ? "is_open" : ""}`}
      >
        <div className="article__grade">
          <div className="article__header">
            <h2 className="header__title">{title}</h2>
            <h3 className="header__author">{author}</h3>
            <h3 className="header__creator">{creator}</h3>
            <h4 className="header__created">{created}</h4>
          </div>

          <div className="article__content">
            <div className="article__text">
              <p>{text}</p>
            </div>
          </div>
        </div>

        <div className="grades__article">
          <h2>Пожалуйста выставите свои оценки данной статье.</h2>
          <ul>
            {/* 1 */}
            <li>
              <p>Актуальность и значимость темы: </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote1Count > 0) {
                      setVote1Count(vote1Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote1Count}</p>

                <i
                  onClick={() => {
                    if (vote1Count < 10) {
                      setVote1Count(vote1Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 2 */}
            <li>
              <p>
                Цельность (нравственность) замысла, преследующего прогрессивный
                характер последствий публикации, передачи:
              </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote2Count > 0) {
                      setVote2Count(vote2Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote2Count}</p>

                <i
                  onClick={() => {
                    if (vote2Count < 10) {
                      setVote2Count(vote2Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 3 */}
            <li>
              <p>Аргументированность и глубина раскрытия темы:</p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote3Count > 0) {
                      setVote3Count(vote3Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote3Count}</p>

                <i
                  onClick={() => {
                    if (vote3Count < 10) {
                      setVote3Count(vote3Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 4 */}
            <li>
              <p>Резонансность материала: </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote4Count > 0) {
                      setVote4Count(vote4Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote4Count}</p>

                <i
                  onClick={() => {
                    if (vote4Count < 10) {
                      setVote4Count(vote4Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 5 */}
            <li>
              <p>
                Точность и доходчивость языка и стиля изложения, своеобразие
                методов журналистского творчества:
              </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote5Count > 0) {
                      setVote5Count(vote5Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote5Count}</p>

                <i
                  onClick={() => {
                    if (vote5Count < 10) {
                      setVote5Count(vote5Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 6 */}
            <li>
              <p>Профессионально-этический подход: </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote6Count > 0) {
                      setVote6Count(vote6Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote6Count}</p>

                <i
                  onClick={() => {
                    if (vote6Count < 10) {
                      setVote6Count(vote6Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 7 */}
            <li>
              <p>Доступность подачи: </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote7Count > 0) {
                      setVote7Count(vote7Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote7Count}</p>

                <i
                  onClick={() => {
                    if (vote7Count < 10) {
                      setVote7Count(vote7Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
            {/* 8 */}
            <li>
              <p>
                Цикл материалов в различных жанрах (если речь идет не о подборке
                материалов одного жанра).
              </p>
              <div className="grades__votes">
                <i
                  onClick={() => {
                    if (vote8Count > 0) {
                      setVote8Count(vote8Count - 1);
                    }
                  }}
                  className="bx bx-down-arrow-alt"
                ></i>
                <p>{vote8Count}</p>

                <i
                  onClick={() => {
                    if (vote8Count < 10) {
                      setVote8Count(vote8Count + 1);
                    }
                  }}
                  className="bx bx-up-arrow-alt"
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};
export default GradeArticle;
