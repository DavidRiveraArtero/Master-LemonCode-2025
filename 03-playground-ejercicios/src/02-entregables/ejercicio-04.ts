console.log(
  "%c\n************** DELIVERABLE 04 *********************",
  "font-weight: bold; color: aquamarine; font-size: 24px",
);

// General
interface Books {
  title: string;
  isRead: boolean;
}

const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books: Books[], titleToSearch?: string): boolean =>
  books.find(({ title }) => title === titleToSearch)?.isRead ?? false;
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
