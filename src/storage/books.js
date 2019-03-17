const books = [
  {
    id: 1,
    title: "Jewels of Nizam",
    author: "Geeta Devi", 
    price: 0,
    popular: true,
    date: new Date(1995, 11, 17),
    rating: 4
  },
  {
    id: 2,
    title: "Cakes & Bakes",
    author: "Sanjeev Kapoor",
    price: 1000,
    popular: true,
    date: new Date(),
    rating: 3
  },
  {
    id: 3,
    title: "Jamie’s Kitchen",
    author: "Jamie Oliver",
    price: 792,
    popular: false,
    date: new Date(2010, 6, 10),
    rating: 0
  },
  {
    id: 4,
    title: "Inexpensive Family Meals",
    author: "Simon Holst",
    price: 0,
    popular: true,
    date: new Date(2019, 2, 2),
    rating: 5
  },
  {
    id: 5,
    title: "Paleo Slow Cooking",
    author: "Chrissy Gower",
    price: 400,
    popular: false,
    date: new Date(2017, 11, 13),
    rating: 1
  },
  {
    id: 6,
    title: "Cook Like an Italian",
    author: "Tobie Puttock",
    price: 300,
    popular: false,
    date: new Date(2012, 11, 20),
    rating: 0
  },
  {
    id: 7,
    title: "Suneeta Vaswani",
    author: "Geeta Devi",
    price: 1600,
    popular: false,
    date: new Date(2000, 9, 21),
    rating: 0
  },
  {
    id: 8,
    title: "Jamie Does",
    author: "Jamie Oliver",
    price: 0,
    popular: true,
    date: new Date(),
    rating: 4
  },
  {
    id: 9,
    title: "Jamie’s italy",
    author: "Jamie Oliver",
    price: 0,
    popular: true,
    date: new Date(2006, 9, 21),
    rating: 4
  },
  {
    id: 10,
    title: "Vegetables Cookbook",
    author: "Matthew Biggs",
    price: 800,
    popular: false,
    date: new Date(2016, 5, 11),
    rating: 0
  }
]

export function setInitBooks() {
  const items = JSON.stringify(books)
  localStorage.setItem('books', items);
}

export function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || books;
}