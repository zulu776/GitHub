import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import GitHubContext from '../../Context/GitHubContext'

//Antd
import { Card, Divider} from 'antd';
import { CodepenCircleOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

//CSS
import 'antd/dist/antd.css';



const { Meta } = Card;

const GitUser = () => {

    const {
        infoUser,
    } = useContext(GitHubContext);

    return (
        <div className="flex justify-center">
            <Card
                className="w-96"
            >
                <div className="flex justify-center">
                    <img src={infoUser.avatar_url} alt="not found" className="rounded-full w-52 h-52" />
                </div>

                <Divider />

                <Meta
                title={infoUser.name}
                description={infoUser.login}
                className="flex justify-center"
                />

                <Divider/>

                <div className="flex justify-center items-center">
                    <div className="w-2/6 h-11 flex justify-center items-center">
                        <a className="">
                            <Link to={`/Followers/${infoUser.login}`} className="flex flex-col items-center w-5/6 mt-4">
                                <TeamOutlined className="w-4 h-4" />
                                <p className="">
                                Followers
                                </p>
                                <p className="">
                                    {infoUser.followers}
                                </p>
                            </ Link>
                        </a>
                    </div>

                    <Divider type="vertical" className="bg-black"/>

                    <div className="w-2/6 h-11 flex justify-center items-center">
                        <a className="flex flex-col items-center w-5/6 mt-4" href={infoUser.html_url}>
                            <CodepenCircleOutlined className="w-4 h-4"/>
                            <p>
                                Repository
                            </p>
                            <p className="">
                                {infoUser.public_repos}
                            </p>
                        </a>
                    </div>

                    <Divider type="vertical" className="bg-black"/>

                    <div className="w-2/6 h-11 flex justify-center items-center">
                        <a className="">
                            <Link to={`/Following/${infoUser.login}`} className="flex flex-col items-center w-5/6 mt-4">
                                <UserOutlined className="w-4 h-4" />
                                <p>
                                    Following
                                </p>
                                <p className="">
                                    {infoUser.following}
                                </p>
                            </ Link>
                        </a>
                    </div>
                </div>

                
            </Card>
        </div>
    )
}

export default GitUser
