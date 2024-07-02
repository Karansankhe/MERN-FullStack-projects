import {Router} from 'express';
import { createTask, fetchAllTasks, updateTaskById, deleteTaskById } from '../Controllers/TaskController.js';

const router = Router();

//T oget all the task

// To get all the tasks
router.get('/', fetchAllTasks);

// To create a new task
router.post('/', createTask);

// To update a task by ID
router.put('/:id', updateTaskById);

// To delete a task by ID
router.delete('/:id', deleteTaskById);


export default router;