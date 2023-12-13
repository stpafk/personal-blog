
const fetchUser = async () => { 
    const res = await fetch("http://localhost:3000/user",  {
            method: "GET",
            credentials: 'include',  
            headers: {
                "Content-Type": "application/json", 
            } 
        });
    
    if (!res.isLogged) {
        return false;
    }

    if (res.status === 200) {
        return res.json();
    }

}

export { 
    fetchUser 
};