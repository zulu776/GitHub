import React,{createContext, useState} from 'react'


const GitHubContext = createContext();

const GitHubProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [infoUser, setInfoUser] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const fetchUserGit = ({value}) => {
        setUser(value);
    }

    const handleUserGit = async(e) => {
        e.preventDefault();

        const API = `https://api.github.com/users/${user}`

        
        const request = await fetch(API);
        const result = await request.json();
        
        // console.log(result);

        setInfoUser(result);
    }


    const data = {
        user, setUser,
        infoUser, setInfoUser,
        followers, setFollowers,
        following, setFollowing,
        handleUserGit,
        fetchUserGit
    }

    return (
      <GitHubContext.Provider value={data}>
          {children}
      </GitHubContext.Provider>
    )
}

export {GitHubProvider};
export default GitHubContext
