//decode a token and get the user's information out of it
import decode from 'jwt-decode';

//create a new class to represent for a user
class AuthService {
    //get user data
    getProfile() {
        return decode(this.getToken());
    }

    //check if user is logged in
    loggedIn() {
        //check if there is a saved token and is still valid
        const token = this.getToken();
        return !!token && this.isTokenExpired(token); 
    }

    //check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        //Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        //Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        //clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        //reload the page and reset the state of application
        window.location.assign('/');
    }
}

export default new AuthService();