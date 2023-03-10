export const API_URL = 'https://api.discogs.com/';

export const API_USERNAME = `${import.meta.env.VITE_API_USERNAME}`;

export const API_PER_PAGE = 48;

export const API_ALBUMS_URL = `${API_URL}users/${API_USERNAME}/collection/folders/0/releases?per_page=${API_PER_PAGE}`;

export const API_DETAILS_URL = `${API_URL}releases/`;

export const API_KEY = `${import.meta.env.VITE_API_KEY}`;

export const API_SECRET = `${import.meta.env.VITE_API_SECRET}`;
