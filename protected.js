function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user !== null;
}

// Check if the user is authenticated
if (!isAuthenticated()) {
    window.location.href = 'http:///E:/SMIT%20project/salessignin.html' ;
}

const logout = () => {
    localStorage.removeItem('user');
}