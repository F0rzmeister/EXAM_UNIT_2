
// bookUtils.js

// Filters books with titles starting with "The"
function booksStartingWithThe(books) {
  return books.filter(book => book.title.startsWith("The"));
}

// Filters books written by authors with a "t" in their name
function booksByAuthorsWithT(books) {
  return books.filter(book => /t/i.test(book.author));
}

// Counts books written after 1992
function booksAfter1992(books) {
  return books.filter(book => book.year > 1992).length;
}

// Counts books written before 2004
function booksBefore2004(books) {
  return books.filter(book => book.year < 2004).length;
}

// Gets ISBNs of books by a given author
function getISBNsByAuthor(books, author) {
  return books.filter(book => book.author === author).map(book => book.isbn);
}

// Sorts books alphabetically
function sortBooksAlphabetically(books, ascending = true) {
  return books.sort((a, b) => ascending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
}

// Sorts books chronologically
function sortBooksChronologically(books, ascending = true) {
  return books.sort((a, b) => ascending ? a.year - b.year : b.year - a.year);
}

// Groups books by author's last name
function groupBooksByLastName(books) {
  return books.reduce((acc, book) => {
    let lastName = book.author.split(" ").slice(-1).join("");
    acc[lastName] = acc[lastName] || [];
    acc[lastName].push(book);
    return acc;
  }, {});
}

// Groups books by author's first name
function groupBooksByFirstName(books) {
  return books.reduce((acc, book) => {
    let firstName = book.author.split(" ")[0];
    acc[firstName] = acc[firstName] || [];
    acc[firstName].push(book);
    return acc;
  }, {});
}

export {
  booksStartingWithThe, booksByAuthorsWithT, booksAfter1992, booksBefore2004,
  getISBNsByAuthor, sortBooksAlphabetically, sortBooksChronologically,
  groupBooksByLastName, groupBooksByFirstName
};
