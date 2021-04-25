import axios from "axios";


export default { 
    getBooks: function(param) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + param);
    },
    getSaved: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}