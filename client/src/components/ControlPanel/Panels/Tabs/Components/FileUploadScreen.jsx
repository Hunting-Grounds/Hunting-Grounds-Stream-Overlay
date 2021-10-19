import React, { useState, useEffect } from 'react';
import { singleFileUpload } from '../../../../../api/index';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Progress, Row, Col } from 'antd';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

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

    ////// UPLOAD STUFF ////////
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: 'Test',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    const { previewVisible, previewImage, fileList, previewTitle } = this.state;

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    /////////

    return (
        <div>
            <Row>
                <Col>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={this.handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{ width: '50%' }}>
                        <Progress percent={singleProgress} />
                    </div>
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