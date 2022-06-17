import styles from "./LandingPage.module.css";
import React from "react";
import {BsArrowRightCircle} from "react-icons/bs";
import {GrInstagram, GrLinkedin, GrGithub} from "react-icons/gr";
import Hover from "react-3d-hover";

export default function LandingPageInfo(props){

return(
<div>
    <header className={styles.headerInfo}>
    <button onClick={props.page}> <h1>Start animating</h1></button>
    <iframe src='https://my.spline.design/untitled-971b6990cad7ed57b43d1c81e0b9d197/' frameborder='0' width='110%' height='1080px'></iframe>
    </header>
    <main>
        <section id="about" className={styles.container}>
            <div className={styles.interactive}>
                <div className={styles.interactiveFirstImage}>
                    <img src="homeEnvironment.png"></img>
                </div>
                <div className={styles.interactiveFirstText}>
                <Hover max="30" scale="1.2">
                    <div className={styles.glassBox}>
                    
                    <h2>Environment</h2>
                    <p>Anymate gives you the oppurtunity to attach multiple animations on your 3D character, in a fast and user friendly manner.
                    Our library will keep on growing for you to find the animations that are deemed to help you through your animation process.
                    And on top of everything, you get to see everything in a smooth & responsive rendered view.</p> <p><i onClick={props.page} style={{cursor:"pointer", color: "#F38A8A"}}>Take me there! <BsArrowRightCircle style={{paddingLeft:"0.5em", verticalAlign: "middle"}}/></i></p>
                    </div>
                    </Hover>
                </div>
            </div>
            <div className={styles.interactive2}>
            <div className={styles.interactiveSecondText}>
                <Hover max="30" scale="1.2">
                <div className={styles.glassBox}>
                    <h2>Development</h2>
                <p>This project is still under development as it's an alpha release. More updates and features will be implemented in the near future. For the moment the tool only
                    accepts .glb and .gltf filetypes. As per which the models that can be animated are only Mixamo models. This is to counter any bugs & compatibility issues.
                </p>
                </div>
                </Hover>
                </div>
                <div className={styles.interactiveSecondImage}>
                    <img src="devving.jpg"></img>
                </div>
            </div>
            <div className={styles.interactiveVideo}>
                <div className={styles.interactiveVideoDetails}>
                    <h2>Showreel</h2>
                    <iframe src="https://www.youtube.com/embed/G2-7UHapub8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            
        </section>
        <div>
        <h2 className={styles.why}>Why Anymate?</h2>
        <section className={styles.creations}>
            <Hover max="30" scale="1.2">
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1633406389921-9b03b77d72bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Community driven</h2>
                    <p className={styles.cardBody}>This tool does not only provide the oppurtunity to animate your model, but it also can be used to find other users' animated models in the community hub. Once you are finished with your model, you are
                    free to upload your creation to the hub for others to download and share it.</p>
                </div>
            </div>
            </Hover>
            <Hover max="30" scale="1.2">
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1618303085702-e2f951c2ee55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Realtime render</h2>
                    <p className={styles.cardBody}>Our tool renders your model as smooth as possible using the power of your GPU. We continue to thrive and excell its performance to make it a great experience. The render will run in 60fps, which will make it possible 
                    for you to see the result before downloadingit, to use it in a 3D suite</p>
                </div>
            </div>   
            </Hover>
            <Hover max="30" scale="1.2">
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Use custom models</h2>
                    <p className={styles.cardBody}>We provide the ability to upload your own models to animate, as long as they fit the criteria. We will continue working hard to broaden these criteria to fit the needs of our users.
                    If you do not own any models, no problem! You start with a local model provided by us to work with, how cool is that!?</p>
                </div>
            </div> 
            </Hover>
            <Hover max="30" scale="1.2">
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1636189239307-9f3a701f30a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Animation library</h2>
                    <p className={styles.cardBody}>Our animation library will keep expanding and updating down the road. All our animations can be used on Mixamo supported models, but you might face some compatibility issues with other models. If you would like to see certain animations
                    feel free to let us know on our socials down below. </p>
                </div>
            </div> 
            </Hover>
        </section>
        </div>
    </main>
    <footer className={styles.siteFooter}>
        <div className={styles.socialIcons}>
            <a className={styles.github} href="#"><GrGithub/></a>
            <a className={styles.instagram} href="#"><GrInstagram/></a>
            <a className={styles.linkedIn} href="#"><GrLinkedin/></a>  
        </div>
            <hr/>
        <div>
            <div>
                <div>
                    <p>Developed by <i>Omar Aghallaj</i></p>
                </div> 
            </div>
        </div>
    </footer>
</div>
)
}