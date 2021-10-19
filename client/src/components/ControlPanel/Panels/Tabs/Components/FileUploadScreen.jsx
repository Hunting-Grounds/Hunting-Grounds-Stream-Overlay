import React, { useState, useEffect } from 'react';
import { singleFileUpload } from '../../../../../api/index';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Progress, Row, Col } from 'antd';

const FileUploadScreen = (props) => {

    const [singleFile, setSingleFile] = useState({});
    const [singleProgress, setSingleProgress] = useState(0);

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }

    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }

    const uploadSingleFile = async (fileParent) => {
        console.log(fileParent)
        const formData = new FormData();
        formData.append('file', singleFile);
        formData.append('fileParent', fileParent)
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>
                    <label>Upload Image</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                    <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile(props.fileParent)} >Upload</button>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Progress percent={singleProgress} />
                </Col>
            </Row>
        </div>
    );
}

export default FileUploadScreen;