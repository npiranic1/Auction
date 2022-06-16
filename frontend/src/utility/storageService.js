export const setSession = (res) => {
    localStorage.setItem("user", JSON.stringify(res.user));
    localStorage.setItem("token", res.accessToken);
};

export const clearSession = () => {
    localStorage.clear();
};

export const getUser = () => {
    return window.localStorage.getItem("user")
}


