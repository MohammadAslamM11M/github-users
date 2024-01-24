import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputForm from "./components/InputForm";
import UserInfo from "./components/UserInfo";
import RepositoryList from "./components/RepositoryList";
import RepositoryDetails from "./components/RepositoryDetails";
import FollowersList from "./components/FollowersList";
import FollowerRepositoryList from "./components/FollowerRepositoryList";
import "./App.css";

const App = () => {
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [followers, setFollowers] = useState([]);

    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route
                        path="/user/:username"
                        element={
                            <div>
                                <InputForm
                                    setUser={setUser}
                                    setRepositories={setRepositories}
                                    setFollowers={setFollowers}
                                />
                                {user && (
                                    <div className="infoGrid">
                                        <div className="userInfo">
                                            <UserInfo user={user} />
                                        </div>
                                        <div className="repoList">
                                            <RepositoryList repositories={repositories} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                    />
                    <Route path="/repository/:repoName" element={<RepositoryDetails />} />
                    <Route path="/followers/:username" element={<FollowersList />} />
                    <Route path="/follower-repositories/:followerName" element={<FollowerRepositoryList />} />
                    <Route
                        path="/"
                        element={
                            <InputForm
                                setUser={setUser}
                                setRepositories={setRepositories}
                                setFollowers={setFollowers}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
