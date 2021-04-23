import axios from "axios";


export default { 
    getBooks: function(param) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + param);
    }
}