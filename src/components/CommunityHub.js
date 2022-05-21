import React, {useEffect, useState} from "react";
import {listAll, ref, getDownloadURL} from 'firebase/storage'
import { storage } from "../firebase";

function Hub(){
    const [fileList, setFileList] = useState([])

    const fileListRef = ref(storage, "animatedModels/")
    useEffect(()=>{
        listAll(fileListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setFileList((prev)=>[...prev, url]);
                })
            })
            console.log(fileList)
        })
    }, [])
    
    return(
        <div>
            <h3>Community submissions</h3>
            <p>Select one of the animated models</p>
            {fileList.map((url)=>{
                return <p>{url}</p>
            })}
        </div>
        
    )   
}
export default Hub;