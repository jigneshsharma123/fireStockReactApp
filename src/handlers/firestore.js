import {getFirestore, setDoc} from "firebase/firestore";

import app from "../lib/firebase.config";

const db = getFirestore(app);

const Firestore = {
    writeDoc : (...args)=> {
        const [inputs, collection_name] = args;
        return new Promise(resolve => {
            const randomIndex = Math.floor(Math.random() * 100000000);
            try{
                const docRef = doc(db, 'stocks', `${randomIndex}`);
                setDoc(cityRef, {
                    key : "",
                });
            } catch(e){
               
            }
        })
    }
}