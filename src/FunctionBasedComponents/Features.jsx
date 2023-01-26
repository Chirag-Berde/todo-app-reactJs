import React from "react";
import todoImage from './todoImage.jpg'
const Features = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <h2>What are the features of Todo App?</h2>
                        <p>
                            Image result for todo application features
                            Todo's gives you the confidence that everything's organized and accounted for, so you can make <br /> progress on the things that are important to you.</p>
                        <hr />
                        <h2>What is a to-do list application?</h2>
                        <p>It's a list of tasks you need to complete or things that you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post it notes and act as a memory aid.</p>
                        <hr />
                    </div>
                    <div className="col-md-6">

                        <img style={{width:"100%", margin:"50px 20px",borderRadius:"10px"}} src={todoImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features