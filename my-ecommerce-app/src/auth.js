
export const handleLogin = async (username, password, setIsLoggedIn) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Login failed');
        }
        
        setIsLoggedIn(true);
    } catch (error) {
        
        console.error('Login error:', error);
    }
};

export const handleLogout = (setIsLoggedIn) => {
    
    setIsLoggedIn(false);
    
};
