import React, { useState, useEffect } from 'react';
import { singleFileUpload } from '../../../../../api/index';
import 'react-circular-progressbar/dist/styles.css';
import { Progress, Row, Col } from 'antd';

import UploadButton from './UploadButton'

const FileUploadScreen = (props) => {

    return (
        <div>
            <Row>
                <Col>
                    <UploadButton {...props}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Progress percent={0} />
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