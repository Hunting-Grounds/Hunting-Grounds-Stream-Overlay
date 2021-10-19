import React from 'react'

import { useDispatch } from 'react-redux';

import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { deleteFile } from '../../../../../actions/file.js'

const FileCard = (props) => {

    const dispatch = useDispatch();

    const deleteSingleFile = async (fileId) => {
        await dispatch(deleteFile(fileId));
        props.getsingle();
    }

    return (
        <div>
            <Card
                title={props.fieldName}
                style={{ width: '20vw', height: '25vh', overflow: 'hidden'}}
                cover={
                    <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '100%', width: '100%', zIndex: '2'}}
                        src={`http://195.22.157.230:5000/${props.file.filePath}`}
                    />
                }
            />
            <Card style={{ width: '20vw'}}><a onClick={() => deleteSingleFile(props.file._id) }><DeleteOutlined key="delete" /></a></Card>
        </div>
    )
}

export default FileCard
