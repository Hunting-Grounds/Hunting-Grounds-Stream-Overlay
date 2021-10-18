import React, {useState, useEffect} from 'react';
import {singleFileUpload} from '../../../../api/index';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FileUploadScreen = (props) => {

    console.log(props.fileParent)

    const [singleFile, setSingleFile] = useState({
        fileName: '', filePath: '', fileType: '', fileSize: '', fileParent: ''
    });
    const [singleProgress, setSingleProgress] = useState(0);

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0], {fileParent: ''});
        setSingleProgress(0);
    }

    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }

    const uploadSingleFile = async (fileParent) => {
        const formData = new FormData();
        formData.append('file', singleFile);
        console.log(formData)
        await singleFileUpload(formData, singleFileOptions, fileParent);
        props.getsingle();
    }

    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Select Single File</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile(props.fileParent)} >Upload</button>
                    </div>
                    {/* <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default FileUploadScreen;