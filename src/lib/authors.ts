export interface Author {
  name: string;
  title: string;
  image: string;
}

export const authors = {
  choaib: {
    name: "Choaib Mouhrach",
    title: "Founder",
    image: "/authors/choaib.jpg",
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;
