import React from "react";
import Faq from "./Faq";
import Register from "./Register";
import WorkshopDetails from "./WorkshopDetails";
import HeroSection from "../../Shared/HeroSection";

const WorkshopSingle = () => {
  let workshop = {
    title: "Machine Learning",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officias tempora maiores",
    category: "online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
    image: "https://placeimg.com/1920/1280/arch",
    rules: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
    ],
    faq: [
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    contacts: [
      {
        name: "Abhishek Gupta",
        email: "abhigupta@gmail.com",
        phone: "917883299922",
      },
      {
        name: "Abhishek Gupta",
        email: "abhigupta@gmail.com",
        phone: "917423299922",
      },
    ],
    schedule: [
      {
        title: "Round 1",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 2",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 3",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 4",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
    ],
    hosts: [
      {
        hostName: "Jeffrey Dahmer",
        hostDesc:
          "Short Description Profile: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos ex illo",
        hostImg: "https://placeimg.com/300/300/people",
      },
      {
        hostName: "Charles Manson",
        hostDesc:
          "Short Description Profile: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos ex illo",
        hostImg: "https://placeimg.com/300/300/people",
      },
      {
        hostName: "Ed Kemper",
        hostDesc:
          "Short Description Profile: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos ex illo",
        hostImg: "https://placeimg.com/300/300/people",
      },
    ],
  };
  return (
    <>
      <HeroSection
        title={workshop.title}
        desc={workshop.subtitle}
        breadParams={[
          {
            title: "Instruo",
            url: "/",
          },
          {
            title: "Workshop",
            url: "/workshops",
          },
          {
            title: workshop.title,
            url: "",
          },
        ]}
      />
      <WorkshopDetails {...workshop} />
      <Register />
    </>
  );
};

export default WorkshopSingle;
