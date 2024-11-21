"use client";
import scss from "./Password.module.scss";
import Link from "next/link";
import { IoLockClosedOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForgot {
  email: string;
}

const Forgot = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IForgot>();

  const resetPassword: SubmitHandler<IForgot> = async (email) => {
    alert("Your password email!");
    reset();
  };
  function registr() {
    window.open("https://www.instagram.com/accounts/emailsignup/", "_self");
  }

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h2>
              <IoLockClosedOutline />
            </h2>
            <div className={scss.signin}>
              <h4>Не удается войти?</h4>
              <p>
                Введите свой электронный адрес, имя пользователя или номер
                телефона, и мы отправим вам ссылку для восстановления доступа к
                аккаунту.
              </p>
            </div>
            <form onSubmit={handleSubmit(resetPassword)}>
              <input
                type="text"
                placeholder="Телефон, имя пользователя или эл.адрес"
                {...register("email", { required: true })}
              />
              <button type="submit">Получить ссылку для входа</button>
            </form>
            <div className={scss.next}>
              <hr />
              <h4>ИЛИ</h4>
              <hr />
            </div>
            <h5 onClick={() => registr()}>Создать новый аккаунт</h5>
            <Link href={"/"}>Вернуться к входу</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
