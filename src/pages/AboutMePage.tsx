import { FC } from 'react';

const AboutMePage: FC = () => {
  return (
    <main className="d-flex flex-column fs-4">
      <h1 className="text-center w-100">Привет!</h1>
      <p>
        Меня зовут Никита, мне 23 года, живу в городе Омск. Учусь на 2 курсе магистратуре по
        специальности &ldquo;Информатика и вычислительная техника&ldquo; в ОмГУ.
      </p>
      <p>В данный момент у меня огромное желание получить опыт коммерческой frontend разработки.</p>
      <p>
        Есть опыт на стеке MERN, TS, Redux TLK, antd. (
        <a href="https://godtyze.github.io/rslang/" target="_blank" rel="noreferrer">
          Приложение для изучения английского языка
        </a>
        )
      </p>
      <p>
        Есть небольшой опыт в написании backend для интернет магазина на Node.js. Стек - Express,
        Sequelize ORM, PostgreSQL. Реализовал регистрацию, авторизацию по jwt, CRUD операции,
        раздачу статики, фильтрация, поиск товаров, пагинация.(
        <a href="https://github.com/godtyze/online-store-be/" target="_blank" rel="noreferrer">
          Ссылка
        </a>
        ) Сейчас работаю над фронтом для этого проекта.(
        <a href="https://github.com/godtyze/online-store-fe/" target="_blank" rel="noreferrer">
          Ссылка
        </a>
        ) Больше примеров моих работ можно посмотреть здесь -
        <a href="https://github.com/godtyze/rs-projects" target="_blank" rel="noreferrer">
          Ссылка
        </a>
      </p>
      <h3>Мой стек:</h3>
      <ul>
        <li>React</li>
        <li>Typescript</li>
        <li>Redux TKL, RTK Query</li>
        <li>Ant Design</li>
        <li>Next</li>
      </ul>
    </main>
  );
};

export default AboutMePage;
