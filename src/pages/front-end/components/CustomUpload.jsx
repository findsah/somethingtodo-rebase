/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React from 'react'
import Dropzone from 'react-dropzone'

const CustomUpload = ({ setFiles, setPreview }) => {

    // a funtion to setfiles and setpreview obj
    const FilesUpload = (acceptedFiles) => {

        if (acceptedFiles) {
            const fileArray = Array?.from(acceptedFiles)?.map(file => URL?.createObjectURL(file))
            setPreview((prevImages) => prevImages?.concat(fileArray))
            setFiles((prevImages) => prevImages?.concat(acceptedFiles))
            // clean up url createObject
            Array?.from(acceptedFiles)?.map((file) => {
                URL?.revokeObjectURL(file)
            })
        }
    }
    return (
        <Dropzone onDrop={acceptedFiles => { FilesUpload(acceptedFiles) }}>
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {/* a custom style */}
                        <div className='add_image'  >
                            <div className='icon_cirlce'>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}

export default CustomUpload