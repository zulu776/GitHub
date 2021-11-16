import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import GitHubContext from '../../Context/GitHubContext'

//Antd
import { Card, Divider} from 'antd';
import { CodepenCircleOutlined } from '@ant-design/icons';

//CSS
import 'antd/dist/antd.css';



const { Meta } = Card;
const GitFollowers = ({avatar,login,repos}) => {

    return (
        <div className="flex justify-center mt-6">
            <Card
                className="w-96"
            >
                <div className="flex justify-center">
                    <img src={avatar} alt="not found" className="rounded-full w-52 h-52" />
                </div>

                <Divider />

                <Meta
                title={login}
                className="flex justify-center"
                />

                <Divider/>

                <div className="w-full h-11 flex justify-center items-center">
                    <a className="flex flex-col items-center w-5/6 mt-4" href={repos}>
                        <CodepenCircleOutlined className="w-4 h-4"/>
                        <p>
                            Repository
                        </p>
                    </a>
                </div>
            </Card>
        </div>
    )
}

export default GitFollowers
