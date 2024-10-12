import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { registerArtist } from '../controllers/artist/registerArtist.controller.js';


const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: "profilePicture",
      maxCount: 1,
    }
  ]),
  registerArtist
);


export default router;