import { collection } from "firebase/firestore";
import { db } from "./initalize-firebase";

export const citizenCollectionRef = collection(db, 'members')