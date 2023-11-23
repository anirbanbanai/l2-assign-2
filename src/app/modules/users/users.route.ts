import  express  from "express"
import { UserController } from "./users.controller";

const router = express.Router();

router.post("/users", UserController.createUsers);
router.get("/users", UserController.getAllUsers)

export const UserRouter  = router;