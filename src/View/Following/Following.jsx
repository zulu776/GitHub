import React, { useContext, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"

//Components
import GitFollowing from '../../Components/Following/GitFollowing'

//Context
import GitHubContext from '../../Context/GitHubContext'

const Following = () => {
      //Hooks
  const { name } = useParams();

  const {
      infoUser,
      following,setFollowing
    
  } = useContext(GitHubContext);

    useEffect(() => {
    setFollowing([]);
    const handleUserFollowing = async () => {
        const response = await fetch(`https://api.github.com/users/${name}/following`);
        const result = await response.json();
        setFollowing(result);

    };
    handleUserFollowing();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [name]);

    return (
         <div>
            <p className="flex justify-center text-center text-4xl mt-8">
                Following by {infoUser.name}
            </p>

            <Link to="/" className="flex justify-center text-3xl mt-8">
                <button>
                    Return
                </button>
            </Link>

            {following && 
             (following.map(user => (
                <GitFollowing
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

export default Following
