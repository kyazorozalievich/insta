"use client";
import scss from "./Next.module.scss";

const Next = () => {
  return (
    <section className={scss.next}>
      <div className="container">
        <div className={scss.content}>
          <h1>Неизвестная ошибка при входе (404)</h1>
        </div>
      </div>
    </section>
  );
};

export default Next;
