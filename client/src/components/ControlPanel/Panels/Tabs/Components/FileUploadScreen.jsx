import React, { useState, useEffect } from 'react';
import { singleFileUpload } from '../../../../../api/index';
import 'react-circular-progressbar/dist/styles.css';
import { Progress, Row, Col } from 'antd';

import UploadButton from './UploadButton'

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
                <Col>
                    <UploadButton/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Progress percent={singleProgress} />
                </Col>
            </Row>
        </div>

        // <div className="form-group">
        //     <label>Select Single File</label>
        //     <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
        // </div>
        // <div className="row">
        //     <div className="col-10">
        //         <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile(props.fileParent)} >Upload</button>
        //     </div>
        //     <div style={{ width: '50%'}}>
        //         <Progress percent={singleProgress} />
        //     </div>
        // </div>
    );
}

export default FileUploadScreen;