export type TEventPanel = {
  image: string;
  title: string;
  description: string;
  presenter: string;
  date: string;
  time: string;
  page: string;
};

export const EVENTS_PANELS: TEventPanel[] = [
  {
    image: "/images/irein-aronville.webp",
    title: "Summon Irein",
    description:
      "Summoning circle with Erenville holding red bull and knitting supplies. Musical theater tunes and the Legend of Zelda gameplay wouldn't hurt, either. I hope you're happy.",
    presenter: "Crimson Naitou",
    date: "04/01/2024",
    time: "11:15-11:30 AM PST",
    page: "/events/summon-irein",
  },
  {
    image: "/images/lore-book.webp",
    title: "Irein Lore",
    description:
      "The lore of Irein is vast and added onto every day. The bards of tomorrow will continue to regale the people with tales of her grandiosity and squad mom status. Attend this exclusive event to grasp even just a little bit of the celebrated history of our dear supreme overlord.",
    presenter: "Emmryn Mythal",
    date: "04/01/2024",
    time: "11:15-11:30 AM PST",
    page: "/",
  },
  {
    image: "/images/healing-card.webp",
    title: "How to heal like Irein",
    description:
      "If your party members suck, it's not your responsibility to carry them. It's their job to learn mechanics and make life easier for you. After all, that's why you crafted all that battle gear for them, right?",
    presenter: "Crimson Naitou",
    date: "04/01/2024",
    time: "11:15-11:30 AM PST",
    page: "/",
  },
  {
    image: "/images/crafting-card.webp",
    title: "Crafting and why Sanji isn't better",
    description:
      "Crafting is a state of mind that can set your brain free of the shackles of everyday trauma. Just because a very handsome Au Ra man can also craft doesn't mean that his goods are superior in-game. Irein has the meat-space yarn to prove it.",
    presenter: "Sanjiro Avagnar",
    date: "04/01/2024",
    time: "11:15-11:30 AM PST",
    page: "/events/irein-crafting",
  },
];
