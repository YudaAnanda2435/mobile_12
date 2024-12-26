// import axios from 'axios';
// import {API_URLS} from './apiConfig';

// export const getCats = async () => {
//   try {
//     const response = await axios.get(API_URLS.cats);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching cats:', error);
//     throw error;
//   }
// };

// export const addCat = async (catData: {
//   name: string;
//   type: string;
//   owner: string;
//   dateTaken: string;
// }) => {
//   try {
//     const response = await axios.post(API_URLS.cats, catData);
//     return response.data;
//   } catch (error) {
//     console.error('Error adding cat:', error);
//     throw error;
//   }
// };

// export const updateCat = async (
//   id: number,
//   updatedCatData: {
//     name: string;
//     type: string;
//     owner: string;
//     dateTaken: string;
//   },
// ) => {
//   try {
//     const response = await axios.put(`${API_URLS.cats}/${id}`, updatedCatData);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating cat:', error);
//     throw error;
//   }
// };

// export const deleteCat = async (id: number) => {
//   try {
//     const response = await axios.delete(`${API_URLS.cats}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting cat:', error);
//     throw error;
//   }
// };

// export const sendCatToTitipan = async (catData: {
//   name: string;
//   type: string;
//   owner: string;
//   dateTaken: string;
// }) => {
//   try {
//     const response = await axios.post(API_URLS.titipan2, catData);
//     return response.data;
//   } catch (error) {
//     console.error('Error sending cat to TitipanScreen:', error);
//     throw error;
//   }
// };

// export const getTitipanCats = async () => {
//   try {
//     const response = await axios.get(API_URLS.titipan2);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching titipan cats:', error);
//     throw error;
//   }
// };

import {
  getAnimalsFromDB,
  addAnimalToDB,
  updateAnimalInDB,
  deleteAnimalFromDB,
} from '../database/AnimalsDatabase.ts';

interface Cat {
  // Pastikan interface Cat didefinisikan
  id: number;
  name: string;
  type: string;
  owner: string;
  dateTaken: string;
}

const tableName = 'Cats';

// Fungsi untuk mengambil data Cats
export const getCats = (): Promise<Cat[]> => getAnimalsFromDB(tableName);

// Fungsi untuk menambah data Cat
export const addCat = async (cat: {
  name: string;
  type: string;
  owner: string;
  dateTaken: string;
}): Promise<Cat> => {
  // Mengembalikan tipe Cat, bukan 'Cats'
  try {
    const response = await addAnimalToDB(tableName, cat);
    return response as Cat; // Pastikan response sesuai dengan tipe Cat
  } catch (error) {
    console.error('Error adding cat:', error);
    throw error;
  }
};

// Fungsi untuk memperbarui data Cat
export const updateCat = (
  id: number,
  cat: {name: string; type: string; owner: string; dateTaken: string},
): Promise<Cat> => updateAnimalInDB(tableName, id, cat);

// Fungsi untuk menghapus data Cat
export const deleteCat = (id: number): Promise<void> =>
  deleteAnimalFromDB(tableName, id);
