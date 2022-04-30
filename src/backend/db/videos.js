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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Soham Shah",
    views : "50K",
    isTrending:false,
    categoryName : "Computer Programming"
  },
  {
    _id: uuid(),
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "150K",
    isTrending : false,
    categoryName : "Computer Programming"
  },
  {
    _id: uuid(),
    title: "Basics of Jeet Kun Do",
    creator: "Bruce Lee",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "450K",
    isTrending:false,
    categoryName : "Entertainment"
  },
  {
    _id: uuid(),
    title: "Naruto Motivational Music",
    creator: "Mr.Uzumaki",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "120M",
    isTrending : true,
    categoryName : "Entertainment"
  },
  {
    _id: uuid(),
    title: "Why Front End will always be in demand",
    creator: "Shlok",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "100M",
    isTrending : true,
    categoryName : "Computer Programming"
  },
  {
    _id: uuid(),
    title: "How to switch off a light bulb ",
    creator: "Sharma Ji",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "400M",
    isTrending : true,
    categoryName : "Entertainment"
  },
  {
    _id: uuid(),
    title: "Shayad",
    creator: "Arijit SIngh",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "500M",
    isTrending : true,
    categoryName : "Entertainment"
  },
  {
    _id: uuid(),
    title: "Dr. Strange Trailer",
    creator: "Marvel",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "650M",
    isTrending : true,
    categoryName : "Entertainment"
  },
  {
    _id: uuid(),
    title: "Guided Meditation",
    creator: "Sadhguru",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    views : "190K",
    isTrending : true,
    categoryName : "Entertainment"
  },
];
