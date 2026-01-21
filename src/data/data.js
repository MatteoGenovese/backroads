import image1 from "../images/tour-1.jpeg";
import image2 from "../images/tour-2.jpeg";
import image3 from "../images/tour-3.jpeg";
import image4 from "../images/tour-4.jpeg";

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 1, href: "#about", text: "about" },
    { id: 1, href: "#services", text: "services" },
    { id: 1, href: "#tours", text: "tours" },
];

export const socialLinks = [
    {
        id: 1,
        href: "https://facebook.com",
        icon: "fab fa-facebook",
    },
    {
        id: 2,
        href: "https://twitter.com",
        icon: "fab fa-twitter",
    },
    {
        id: 3,
        href: "https://instagram.com",
        icon: "fab fa-instagram",
    },
];

export const services = [
    {
        id: 1,
        icon: "fas fa-wallet fa-fw",
        title: "saving money",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
        id: 2,
        icon: "fas fa-tree fa-fw",
        title: "endless hiking",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
        id: 3,
        icon: "fas fa-socks fa-fw",
        title: "amazing comfort",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
];

export const tours = [
    {
        id: 1,
        date: "august 26th, 2020",
        image: image1,
        title: "Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "china",
        duration: "6 days",
        price: "$2100",
    },
    {
        id: 2,
        date: "october 1th, 2020",
        image: image2,
        title: "best of java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "indonesia",
        duration: "11 days",
        price: "$1400",
    },
    {
        id: 3,
        date: "september 15th, 2020",
        image: image3,
        title: "explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "hong kong",
        duration: "8 days",
        price: "$5000",
    },
    {
        id: 4,
        date: "december 5th, 2019",
        image: image4,
        title: "kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "kenya",
        duration: "20 days",
        price: "$3300",
    },
];
