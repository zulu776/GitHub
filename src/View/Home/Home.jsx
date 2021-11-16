import React, { useContext } from 'react'

//Components
import GitForm from '../../Components/Home/GitForm'
import GitUser from '../../Components/Home/GitUser';
import GitHubContext from '../../Context/GitHubContext'

const Home = () => {

    const {
        infoUser,
    } = useContext(GitHubContext);

    return (
        <div>
            <GitForm />

            {infoUser && <GitUser />}

        </div>
    )
}

export default Home
