const prompt = require("prompt-sync")();

let book1 = {
  id: 1,
  title: "eng",
  author: "tina",
  isBorrowed: true,
};
let book2 = {
  id: 2,
  title: "hindi",
  author: "ashu",
  isBorrowed: true,
};
let book3 = {
  id: 3,
  title: "maths",
  author: "rita",
  isBorrowed: false,
};
let book4 = {
  id: 4,
  title: "science",
  author: "rajni",
  isBorrowed: true,
};
let book5 = {
  id: 4,
  title: "computer",
  author: "savita",
  isBorrowed: true,
};

let books = [];
books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);
console.log(books);

function Adding_books(ch) {
  let choice = ch;
  while (choice == 1) {
    let new_id = parseInt(prompt("enter id: "));
    let new_title = prompt("enter title");
    let new_author = prompt("enter author: ");
    const new_book = {
      id: new_id,
      title: new_title,
      author: new_author,
      isBorrowed: false,
    };
    books.push(new_book);

    choice = parseInt(prompt("enter 1 if wants to add books else enter 0: "));
  }
}

function Borrowing_books(ch, id_) {
  let choice = ch;
  while (choice == 1) {
    for (let bookc of books) {
      if (bookc.id == id_) {
        if (bookc.isBorrowed == true) {
          console.log("Book Not available");
        } else {
          bookc.isBorrowed = true;
        }
      }
    }

    choice = parseInt(prompt("enter 1 if wants to borrow else enter 0: "));
  }
}

function Returning_books(ch, id__) {
  let choice = ch;
  while (choice == 1) {
    for (let bookc of books) {
      if (bookc.id == id__) {
        bookc.isBorrowed = false;
      }
    }

    choice = parseInt(prompt("enter 1 if wants to borrow else enter 0: "));
  }
}

function Available_books(ch) {
  let choice = ch;
  while (choice == 1) {
    for (let bookc of books) {
      if (bookc.isBorrowed == false) {
        console.log(bookc.title);
        console.log(bookc.author);
      }
    }

    choice = parseInt(prompt("enter 1 if wants to borrow else enter 0: "));
  }
}

function Search_books(ch, title_) {
  let choice = ch;
  while (choice == 1) {
    for (let bookc of books) {
      if (bookc.title == title_) {
        console.log(bookc);
      }
    }

    choice = parseInt(prompt("enter 1 if wants to borrow else enter 0: "));
  }
}

let ch;
ch = parseInt(prompt("to continue enter 1, else enter 0 "));
while (ch == 1) {
  let operation = prompt(
    "Adding_books/ Borrowing_books/ Returning_books/ List_Available_book/ Search_Book "
  );
  switch (operation) {
    case "Adding_books":
      Adding_books(ch);
      break;
    case "Borrowing_books":
      let id_ = prompt("choose from available book id: 1,2,3,4,5 ");
      Borrowing_books(ch, id_);
      break;
    case "Returning_books":
      let id__ = prompt("choose from available book id: 1,2,3,4,5 ");
      Returning_books(ch, id__);
      break;
    case "List_Available_book":
      Available_books(ch);
      break;
    case "Search_Book":
      let title_ = prompt(
        "choose from available book title:eng, hindi, maths, science, computer "
      );
      Search_books(ch, title_);
      break;
    default:
      console.log("Invalid input");
  }
  ch = parseInt(prompt("to continue enter 1, else enter 0"));
}
