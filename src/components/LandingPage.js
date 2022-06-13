import styles from "./LandingPage.module.css"
import React from "react";

export default function LandingPageInfo(props){

return(
<div>
    <header className={styles.headerInfo}>
    <div className={styles.flexContainer}>  
            {/* <img id="logoHome" src="logo3.svg" width={"30%"}></img> */}
            <h1>Upload <br />Anymate <br />Download</h1>
            
    </div>
    <button onClick={props.page}> <h2>Start animating</h2></button>
    
    <iframe src='https://my.spline.design/untitled-8d3bd0d64f8e57bdaa7023f9a3409f7d/' frameborder='0' width='110%' height='980px'></iframe>
    </header>
    <main>
        <section id="about" className={styles.container}>
            <div className={styles.interactive}>
                <div className={styles.interactiveImg}>
                    <img src="holder.jpg" width={"30%"}></img>
                </div>
                <div className={styles.interactiveTxt}>
                    <h2>Animate your model with a few clicks</h2>
                    <p>Upload your 3D humanoid character in one single click, apply animations to your liking.
                        Satisfied? Download or share your creation with other animators!
                    </p>
                </div>
            </div>
        </section>
        <h1 className={styles.why}>Why Anymate?</h1>
        <section className={styles.creations}>
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1633406389921-9b03b77d72bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Community driven</h2>
                    <p className={styles.cardBody}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1618303085702-e2f951c2ee55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Realtime render</h2>
                    <p className={styles.cardBody}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>   
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> Use custom models</h2>
                    <p className={styles.cardBody}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div> 
            <div className={styles.card} style={{backgroundImage: "url(https://images.unsplash.com/photo-1636189239307-9f3a701f30a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80)"}}>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Animation library</h2>
                    <p className={styles.cardBody}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div> 
            
        </section>
    </main>
</div>
)
}