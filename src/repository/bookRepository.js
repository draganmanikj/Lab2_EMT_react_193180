import axios from '../custom-axios/axios';

const BookService = {
    fetchBooks: () => {
        return axios.get("/books");
    }
}

export default BookService;