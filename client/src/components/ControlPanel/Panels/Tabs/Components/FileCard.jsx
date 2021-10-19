import React from 'react'

import { useDispatch } from 'react-redux';

import { Card, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { deleteFile } from '../../../../actions/file.js'

const FileCard = (props, file) => {

    const deleteSingleFile = async (fileId) => {
        await dispatch(deleteFile(fileId));
        props.getsingle();
    }

    return (
        <Card
            style={{ width: '20vw', left: '20%' }}
            cover={
                <img
                    alt={file.fileParent}
                    src={`http://195.22.157.230:5000/${file.filePath}`}
                />
            }
            actions={[<a onClick={() => deleteSingleFile(file._id)}><DeleteOutlined key="delete" /></a>]}
        >
        </Card>
    )
}

export default FileCard
