
import { initializeApp, getApps, getApp} from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import { getMessaging, isSupported } from "firebase/messaging"




// Firebase configuration variables loaded from environment variables
const firebaseConfig = {
    messagingSenderId: "297434594351",
    projectId: "push-notification-bw-dea05",
    appId: "297434594351",
    apiKey: "AIzaSyBDjZslZEbB7FbpTFe4UnZkX-DOK9resdc",
    storageBucket: "push-notification-bw-dea05.appspot.com",
    authDomain: "push-notification-bw-dea05.firebaseapp.com",
    databaseURL: "https://push-notification-bw-dea05.firebaseio.com"
};

// If Firebase isn't already initialized, initialize it using the above credentials.
const firebaseApp  = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(firebaseApp );

const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported();
        if (isSupportedBrowser) {
            return getMessaging(firebaseConfig);
        }
        console.log('Firebase not supported this browser');
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
    })();
    export const onMessageListener = async () =>
    new Promise((resolve) =>
        (async () => {
            const messagingResolve = await messaging;
            onMessage(messagingResolve, (payload) => {
                // console.log('On message: ', messaging, payload);
                resolve(payload);
            });
        })()
    );
    export const requestForToken = async (dispatch) => {
        try {
            const messagingResolve = await messaging;
            const currentToken = await getToken(messagingResolve, {
                vapidKey: 'BNByZ6qJFpQq78i2mDZqpcMDZ10LWo4XO0M-EQqa3M-LQQPLYlN3ssjNChcbkvp0mHgsjXSuKkke_pk3eDeN2Hg',
            });
            if (currentToken) {
                console.log(token)
            }
        } catch (err) {
            console.log('An error occurred while retrieving token. ', err);
        }
        };
export const db = getFirestore(firebaseApp );

