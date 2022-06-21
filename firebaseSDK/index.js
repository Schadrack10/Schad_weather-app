
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Alert } from "react-native";


// signup user
export async function registration(
    email,
    password,
    fullname
) {
    console.log("sdk - registration starts", email, password, fullname);
    try {
        console.log('try')
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();

        db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            fullname,
            userid: currentUser.uid,
        });
        console.log('done')
    } catch (error) {
        alert(error.message)
    }


    // catch (err) {
    //     console.log("There is something wrong!!!!", err.message);
    //     alert("There is something wrong!!!!", err.message);
    // }
    console.log('ended')
};

// login user
export async function signInUser(email, password) {
    try {
        console.log(email, password);
        let user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;

    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
    }
}

// logging out
export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
    }
}

// reset password
export async function passwordReset(email) {
    try {
        console.log("running....");
        // const send = await firebase.auth().sendPasswordResetEmail(email);
        await firebase.auth().sendPasswordResetEmail(email);
        return true;
    } catch (error) {
        console.log(error);
        Alert.alert("There is something wrong!", error.message);
    }
}

//add city
export async function addFavCityToDatabase(city) {

    //getting the current user
    const currentUser = firebase.auth().currentUser;

    //assigning firestore to db
    const db = firebase.firestore();

    //getting the specific database in firestore
    const columnRef = db.collection('favourite-cities')

    //adding new data to the specific database
    db.collection("cities").doc(currentUser.uid).set({
        name: city
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


}

//delete city 
export async function deleteCities({city}) {
    
        //getting the current user
        const currentUser = firebase.auth().currentUser;

       var cityRef = db.collection('cities').doc(currentUser.uid);

    // Remove the 'capital' field from the document
       var removeCapital = cityRef.update({
        capital: firebase.firestore.FieldValue.delete()
       });
}

//get cities from database
export async function fetchCitiesFromFireStore(){
        //  fetching cities from firestore database
         console.log('hello world')

         const currentUser = firebase.auth().currentUser;

         var docRef = db.collection("cities").doc(currentUser.uid);

         docRef.get().then((doc) => {
             if (doc.exists) {
                 console.log("Document data:", doc.data());
             } else {
                 // doc.data() will be undefined in this case
                 console.log("No such document!");
             }
         }).catch((error) => {
             console.log("Error getting document:", error);
         });

}
