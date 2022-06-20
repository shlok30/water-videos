/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

 import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "Awesome Video about Coding",
    description:
      "Learn React for free in this Video",
    creator: "Soham Shah",
    views : "50K",
    isTrending:false,
    categoryName : "Computer Programming",
    thumbnail : "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    _id: uuid(),
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    description:
      "They say AI/ML is the present and future of tech so why not learn it right now?",
    views : "150K",
    isTrending : false,
    categoryName : "Computer Programming",
    thumbnail : "https://img.youtube.com/vi/ob1yS9g-Zcs/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/ob1yS9g-Zcs"
  },
  {
    _id: uuid(),
    title: "Basics of Jeet Kun Do",
    creator: "Bruce Lee",
    description:
      "Learn the fundamentals of Bruce Lee's combat system.",
    views : "450K",
    isTrending:false,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/_q1adby1QyM/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/_q1adby1QyM"
  },
  {
    _id: uuid(),
    title: "Naruto Motivational Music",
    creator: "Mr.Uzumaki",
    description:
      "Peaceful music from Naruto series to help you relax and feel happy",
    views : "120M",
    isTrending : true,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/hFxCDbiPWJk/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/hFxCDbiPWJk"
  },
  {
    _id: uuid(),
    title: "Why Front End will always be in demand",
    creator: "Shlok",
    description:
      "Watch this video to understand why front end devs will always be in demand",
    views : "100M",
    isTrending : true,
    categoryName : "Computer Programming",
    thumbnail : "https://img.youtube.com/vi/Gc0msPEmGjA/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/Gc0msPEmGjA"
  },
  {
    _id: uuid(),
    title: "Light ",
    creator: "Charlie Puth",
    description:
      "Music Video of Charlie Puth's latest song",
    views : "400M",
    isTrending : true,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/mF2BHtQh4EI/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/mF2BHtQh4EI"
  },
  {
    _id: uuid(),
    title: "Shayad",
    creator: "Arijit Singh",
    description:
      "Title song of the movie Love Aaj Kal by Arijit Singh",
    views : "500M",
    isTrending : true,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/mF2BHtQh4EI/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/mF2BHtQh4EI"
  },
  {
    _id: uuid(),
    title: "Dr. Strange Trailer",
    creator: "Marvel",
    description:
      "Watch the latest trailer of Dr.Strange in the Multiverse of Madness and Pre Book your tickets",
    views : "650M",
    isTrending : true,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/aWzlQ2N6qqg/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/aWzlQ2N6qqg"
  },
  {
    _id: uuid(),
    title: "Guided Meditation",
    creator: "Sadhguru",
    description:
      "Follow along to this video to learn the basics of meditation",
    views : "190K",
    isTrending : true,
    categoryName : "Entertainment",
    thumbnail : "https://img.youtube.com/vi/2BkjDk903Uc/maxresdefault.jpg",
    videoLink : "https://www.youtube.com/embed/2BkjDk903Uc"
  },
];
