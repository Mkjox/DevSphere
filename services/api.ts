import axios from 'axios';
import { Post, Comment } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_URL}/posts`);
    return response.data;
};

export const fetchComments = async (postId: number): Promise<Comment[]> => {
    const response = await axios.get<Comment[]>(`${API_URL}/posts/${postId}/comments`);
    return response.data;
};

export const fetchRandomUser = async (): Promise<any> => {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
};

export const fetchSpecificUser = async (seed: string): Promise<any> => {
    const response = await axios.get(`https://randomuser.me/api/?results=1&seed=${seed}`);
    return response.data.results[0];
};
