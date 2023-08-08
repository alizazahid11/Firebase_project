function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user !== null;
}

// Check if the user is authenticated
if (!isAuthenticated()) {
    window.location.href = '../salessignin.html' ;
}

const logout = () => {
    localStorage.removeItem('user');
}