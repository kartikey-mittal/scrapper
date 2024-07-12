import React from "react";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const Test = () => {

  const addUserDocument = async () => {
    try {
      // Reference to the "users" collection
      const usersCollectionRef = collection(db, "users");

      // Set a document with id "ayush"
      await setDoc(doc(usersCollectionRef, "ayush"), {
        name: "ayush12"
      });

      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  // Call the function to add the document when the component renders
  React.useEffect(() => {
    addUserDocument();
  }, []);

  return (
    <div>
      <h2>Adding Document to Firestore</h2>
      {/* You can add more content or components here */}
    </div>
  );
};

export default Test;
