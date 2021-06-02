import { Router } from "express";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../controllers/todos";

const router: Router = Router();

router.get("/todos", getTodos);

router.post("/todo", addTodo);

router.put("/todo/:id", updateTodo);

router.delete("/todo/:id", deleteTodo);

export default router;