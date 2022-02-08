import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confiq";

const initializeAuthentication = ()=> {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* Steps for Authentication
---------------------------

Initial Setup
1.firebase: Create Project
2. Create web app
3. get configuration
4. initialize firebase
5. Enable auth method

--------------------------

Step 2
1. Create login component
2. Create Register Component
3. Create Route for login and register component
------------------------------------------------

step 3 set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. necessary steps


step 4: create auth context
1. create a auth context
2. create context provider
3. set context Provider context value
4. use auth provider
5. create useAuth Hook


step 5: create private route
1. create private route
2. set private route

*/