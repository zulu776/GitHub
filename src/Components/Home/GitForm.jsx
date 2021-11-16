import React, { useContext } from 'react'
import GitHubContext from '../../Context/GitHubContext'


const GitForm = () => {

    const {
        handleUserGit,
        fetchUserGit,
    } = useContext(GitHubContext)   ;

    return (
        <div className="h-52 flex justify-center items-center">
            <form
            onSubmit={handleUserGit}
            >
                <input
                type="text"
                onChange={({target}) => fetchUserGit(target)}
                />
                <input
                type="Submit"
                value="Search it!"
                />
                
            </form>
        </div>
    )
}

export default GitForm
