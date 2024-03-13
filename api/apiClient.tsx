import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

interface Book {
    id: string;
    title: string;
    author: string;
    year: string;
}

class APIClient {
    constructor(private apiUrl: string) {}

    public async getBooks(): Promise<Book[]> {
        try {
            console.log("Getting books");
            const response = await axios.get<Book[]>(`${this.apiUrl}/books`,
            {withCredentials: true});
            console.log("Got books");
            return response.data;
        } catch (error) {
            throw new Error('Error fetching books');
        }
    }

    public async getBook(id: string): Promise<Book> {
        try {
            const response = await axios.get<Book>(`${this.apiUrl}/books/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching book with ID ${id}`);
        }
    }

    public async createBook(book: Book): Promise<Book> {
        try {
            const response = await axios.post<Book>(`${this.apiUrl}/books`, book);
            return response.data;
        } catch (error) {
            throw new Error('Error creating a new book');
        }
    }

    public async updateBook(id: string, book: Partial<Book>): Promise<Book> {
        try {
            const response = await axios.put<Book>(`${this.apiUrl}/books/${id}`, book);
            return response.data;
        } catch (error) {
            throw new Error(`Error updating book with ID ${id}`);
        }
    }

    public async deleteBook(id: string): Promise<void> {
        try {
            await axios.delete(`${this.apiUrl}/books/${id}`);
        } catch (error) {
            throw new Error(`Error deleting book with ID ${id}`);
        }
    }
}

const client = new APIClient(API_URL);
export default client;

