import testimonio1 from "../../assets/img/testimonio1.jpg";
import testimonio2 from "../../assets/img/testimonio2.jpg";

import cliente1 from "../../assets/img/cliente-1.png";
import cliente2 from "../../assets/img/cliente-2.png";
import cliente3 from "../../assets/img/cliente-3.png";
import cliente4 from "../../assets/img/cliente-4.png";
import cliente5 from "../../assets/img/cliente-5.png";

export const activities = [
    {
        icon: "fa fa-code",
        title: "Programación",
        description:
            "Lorem ipsum dolor sit amet consectetur elit. A voluptatum, neque, aliquid dolorum ab quaerat cum totam illo aspernatur dicta qui animi dolorem debitis nesciunt fuga consequatur iste voluptas et culpa nam. Ratione ex voluptates laboriosam quae natus fuga quidem. ",
    },
    {
        icon: "fa fa-chalkboard-teacher",
        title: "Estudiar",
        description:
            "Lorem ipsum dolor sit amet consectetur elit. A voluptatum, neque, aliquid dolorum ab quaerat cum totam illo aspernatur dicta qui animi dolorem debitis nesciunt fuga consequatur iste voluptas et culpa nam. Ratione ex voluptates laboriosam quae natus fuga quidem.",
    },
    {
        icon: "fa fa-computer",
        title: "Desarrollo Web",
        description:
            "Lorem ipsum dolor sit amet consectetur elit. A voluptatum, neque, aliquid dolorum ab quaerat cum totam illo aspernatur dicta qui animi dolorem debitis nesciunt fuga consequatur iste voluptas et culpa nam. Ratione ex voluptates laboriosam quae natus fuga quidem.",
    },
    {
        icon: "fa-solid fa-terminal",
        title: "Automatizaciones",
        description:
            "Lorem ipsum dolor sit amet consectetur elit. A voluptatum, neque, aliquid dolorum ab quaerat cum totam illo aspernatur dicta qui animi dolorem debitis nesciunt fuga consequatur iste voluptas et culpa nam. Ratione ex voluptates laboriosam quae natus fuga quidem.",
    },
];

export const testimonials = [
    {
        image: testimonio1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, facilis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt accusantium tempora. ",
        author: "Ana Peluche",
        company: "Developers S.A",
    },
    {
        image: testimonio2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, facilis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt accusantium tempora. ",
        author: "Carlos José",
        company: "FullStack S.A",
    },
];

export const clients = [cliente1, cliente2, cliente3, cliente4, cliente5];

export const prices = [
    {
        type: "NORMAL",
        value: "$20",
        cursos: "Un curso de desarrollo web",
        extras: "Soporte a preguntas y dudas",
    },
    {
        type: "PREMIUM",
        value: "$50",
        cursos: "Cinco cursos de desarrollo web",
        extras: "Soporte a preguntas y dudas prioritario",
    },
];

export const extras = [
    {
        subtitle: "Alumnos Contentos",
        icon: "fa-heart",
        quantity: "375.000",
    },
    {
        subtitle: "Horas de contenido",
        icon: "fa-clock",
        quantity: "800",
    },
    {
        subtitle: "Puntuación",
        icon: "fa-star",
        quantity: "10",
    },
];
