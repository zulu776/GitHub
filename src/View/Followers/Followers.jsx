import React, { useContext, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

//Components
import GitFollowers from '../../Components/Followers/GitFollowers'

//Context
import GitHubContext from '../../Context/GitHubContext'

const Followers = () => {

    //Hooks
  const { name } = useParams();

    const {
        infoUser,
        followers,setFollowers
      
    } = useContext(GitHubContext);

    useEffect(() => {
        setFollowers([]);
        const handleUserFollowers = async () => {
        const response = await fetch(`https://api.github.com/users/${name}/followers`);
        const result = await response.json();
        setFollowers(result);
    
        };
        handleUserFollowers();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [name]);
 
    return (
        <div>
            <p className="flex justify-center text-center text-4xl mt-8">
                Follower to {infoUser.name}
            </p>

            <Link to="/" className="flex justify-center text-3xl mt-8">
                <button>
                    Return
                </button>
            </Link>

            {followers && 
             (followers.map(user => (
                <GitFollowers
                 avatar={user.avatar_url}
                 login={user.login}
                 repos={user.html_url}
                 />
            )))}

            <Link to="/" className="flex justify-center text-3xl mt-8">
                <button>
                    Return
                </button>
            </Link>
        </div>
    )
}

export default Followers
