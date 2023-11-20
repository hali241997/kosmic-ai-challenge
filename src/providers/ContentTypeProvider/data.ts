import { ContentTypeOptions } from "./types";

/*
I imagine in a real world application an api call will return this type of data:

data: [
  {
    key: "Fun", // ContentTypeOptions
    options: [...] // string[]
  }
]

Then I would transform the array into an object like on line no. 95 and use that object in the context

*/

export const FunOptions = [
  "Board games revival",
  "Comedy trends",
  "Amusement parks",
  "Escape rooms",
  "Street performances",
  "Online challenges",
  "Festival impact",
  "Crafting movement",
  "Social gaming",
  "Virual Reality",
];

export const EducationOptions = [
  "Gamified learning",
  "Education systems",
  "Bilingual benefits",
  "Standardized testing",
  "Arts in schools",
  "Tech bootcamps",
  "Homeschooling dynamics",
  "Mentorship importance",
  "Educational equity",
  "Mobile learning",
];

export const SportsOptions = [
  "Sports medicine",
  "Team sociology",
  "Olympic economics",
  "Gender parity",
  "Fandom psychoology",
  "Extreme sports",
  "Sports business",
  "Youth atheletics",
  "Data analytics",
  "Doping ethics",
];

export const NewsOptions = [
  "Citizen journalism",
  "Whistleblower influence",
  "Fake news",
  "Print media survival",
  "Social media news",
  "Cybersecuruty news",
  "Democratic media",
  "News deserts",
  "News economics",
  "Broadcast evolution",
];

export const InvestmentOptions = [
  "Robo-advising",
  "Geopolitical impacts",
  "Index funds",
  "Real estate funds",
  "Startup investing",
  "Social trading",
  "Tax strategies",
  "Emerging markets",
  "Financial literacy",
  "Pension futures",
];

export const FactsOptions = [
  "Animal oddities",
  "Everyday science",
  "Historical obscurities",
  "Science myths",
  "Human body facts",
  "Oceanic discoveries",
  "Space exploration",
  "Ancient tech",
  "World laws",
  "Bizarre news",
];

export const options: Record<ContentTypeOptions, string[]> = {
  Fun: FunOptions,
  Education: EducationOptions,
  Sports: SportsOptions,
  News: NewsOptions,
  Investments: InvestmentOptions,
  Facts: FactsOptions,
};
