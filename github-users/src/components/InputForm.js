import React, { useState } from "react";

const InputForm = () => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default InputForm;