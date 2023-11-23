import  express  from "express"
import { UserController } from "./users.controller";

const router = express.Router();

router.post("/", UserController.createUsers);
router.get("/", UserController.getAllUsers)
router.get("/:userId", UserController.getSingleUser)
router.delete("/:userId", UserController.deleteSingleUser)

export const UserRouter  = router;