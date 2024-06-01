const axios = require('axios');

async function registerWithCompanies() {
    const url = "http://20.244.56.144/test/register";  
    try {
        const response = await axios.post(url, {
            startup: "Priyanshu_Startup",
            email: "priyanshu.2125csme@kiet.edu"
        });
        if (response.status === 200) {
            console.log("Successfully registered with all companies");
        } else {
            console.log("Registration failed", response.data);
        }
    } catch (error) {
        console.error("Error registering", error);
    }
}

registerWithCompanies();
