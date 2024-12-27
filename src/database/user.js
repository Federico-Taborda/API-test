
import { readFile } from 'fs/promises';

const DB = JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf-8'));

const getAllUsers = () => {
  return DB.users;
};

export default { getAllUsers };