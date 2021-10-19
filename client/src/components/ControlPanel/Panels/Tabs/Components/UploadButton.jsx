import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { singleFileUpload } from '../../../../../api/index';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const[singleFile, setSingleFile] = useState({ });
const[singleProgress, setSingleProgress] = useState(0);

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
    this.props.getsingle();
}

class UploadButton extends React.Component {

    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: 'Test',
        fileList: [
            {
                uid: '1',
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

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <Upload
                    action={() => uploadSingleFile(this.props.fileParent)}
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
            </>
        );
    }
}

export default UploadButton;