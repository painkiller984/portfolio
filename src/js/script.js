import "/src/sass/style.scss";
import JustValidate from "just-validate";

const hamburger = document.querySelector(".promo__hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("menu--active");
    document.body.style.overflow = "hidden";
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("menu--active");
    document.body.style.overflow = "";
});

const list = document.querySelectorAll(".menu__list-link");

list.forEach((lists) => {
    lists.addEventListener("click", () => {
        menu.classList.remove("menu--active");
        document.body.style.overflow = "";
    });
});

const counters = document.querySelectorAll(".skills__item-percents"),
    lines = document.querySelectorAll(".skills__item-progress-bar-color");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

document.addEventListener("click", (e) => {
    const tap = e.target.closest(".price__info-text");
    if (tap) {
        tap.querySelector("p").classList.toggle("active");
        tap.querySelector("span").classList.toggle("active");
    }
});

const contactsValidate = new JustValidate(".contacts__form");

contactsValidate
    .addField("#name", [
        {
            rule: "required",
            errorMessage: "Введите имя",
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "Минимальное количество символов: 2",
        },
    ])
    .addField("#email", [
        {
            rule: "required",
            errorMessage: "Введите email",
        },
        {
            rule: "email",
            errorMessage: "пример kebab@gmail.com",
        },
    ])
    .addField("#text", [
        {
            rule: "required",
            errorMessage: "Введите ваше сообщение",
        },
        {
            rule: "minLength",
            value: 5,
            errorMessage: "Минимальное количество символов 5",
        },
    ])
    .addField(
        "#checkbox",
        [
            {
                rule: "required",
                errorMessage:
                    "Нужно согласиться с политикой конфиденциальности",
            },
        ],
        {
            errorsContainer: ".error-checkbox-message",
        },
    )
    .onSuccess((event) => {
        event.currentTarget.submit();
    });
