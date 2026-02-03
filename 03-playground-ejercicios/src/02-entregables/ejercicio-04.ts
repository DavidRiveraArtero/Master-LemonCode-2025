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

const isBookRead = (books: Books[], titleToSearch: string): boolean => {
  let findBook: Books = books.find(
    (book: Books): boolean => book.title === titleToSearch,
  );
  return findBook === undefined ? false : findBook.isRead;
};
console.log(isBookRead(books, "Devastación"));
