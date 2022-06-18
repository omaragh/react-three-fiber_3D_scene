import React, {useEffect, useState} from "react";
import {listAll, ref, getDownloadURL} from 'firebase/storage'
import { storage } from "../firebase";
import LoadAllCanvas from "./FetchModel";
import styles from './CommunityHub.module.css'
import {BsDownload} from 'react-icons/bs'
import {AiOutlineCopy} from 'react-icons/ai'

/**
 * It's a function that returns buttons which provide a download link
 * @param props - {
 * @returns A div with an image and two buttons.
 */
function CopiedUrl(props){
    return(
        <div className={styles.cHub}>
            {/* <LoadAllCanvas link={props.downloadLink}/> */}
            <img src="tempImg.png"></img>
            <div className={styles.icons}>
                <button><AiOutlineCopy size={"30px"} onClick={()=>{navigator.clipboard.writeText(props.downloadLink)}}/></button>
                <button><BsDownload size={"30px"} onClick={()=> window.open(props.downloadLink,"_blank")}/></button>
            </div>
        </div>
    )
}

/**
 * It gets the download URL of every file in a folder in Firebase Storage, and then displays them in a
 * list
 * @returns The fileList is being returned as an array of strings.
 */
function Hub(){
    const [fileList, setFileList] = useState([]);
    const fileListRef = ref(storage, "animatedModels/");
    useEffect(()=>{
        listAll(fileListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setFileList((prev)=>[...prev, url]);
                })
            })
        })
    }, [])
    return(
        <div className={styles.hub}>
            <h2>Community submissions</h2>
            <p>These are the community made animations, free for use by simply clicking the download icon</p>
            
            <section className={styles.loadedInfo}>
                {fileList.map((url)=>{
                    return <CopiedUrl downloadLink={url}/>
                })}
            </section>
        </div>
    )   
}
export default Hub;