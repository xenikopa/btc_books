import { connect } from 'react-redux'
import { BooksList } from '../components/BooksList/BooksList';
import { openModal } from '../actions/modal';

const getVisibleBooks = (books, filter) => {
  const bookBySection = getBooksBySection(books, filter.section);

  return getBooksByWord(bookBySection, filter.input);
}

const getBooksBySection = (books, section) => {
  switch (section) {
    case 'SHOW_ALL':
      return books;
    case 'POPULAR': 
      return books.filter(x => x.popular);
    case 'FREE': 
      return books.filter(x => x.price === 0);
    case 'RECENT': 
      return books.filter(x => 
        new Date(x.date).getFullYear() === new Date().getFullYear()
      )
    default:
      return books;
  }
}

const getBooksByWord = (books, input) => {
  return input.length > 0
    ? books.filter(x => x.title.toLowerCase().includes(input) || x.author.toLowerCase().includes(input))
    : books
}

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.booksApp.books, state.booksApp.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBookClick: (form) => {
      dispatch(openModal(form));
    }
  }
}

const VisibleBooksList = connect(
  mapStateToProps, mapDispatchToProps
)(BooksList)

export default VisibleBooksList