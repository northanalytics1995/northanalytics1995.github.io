import React from "react";
import "./title-unit.styles.scss";

class TitleUnit extends React.Component {
    render() {
        return (
            <div className="my-5 pt-4 title-unit-component">
                <div className="container wrapper">
                    <div className="left-text">
                        <h1 className="mb-0 font-display">{this.props.title?this.props.title:"Missing props 'title'"}</h1>
                        <hr className="global-hr mt-2"/>
                        <p className="global-title-paragraph">
                            {
                                this.props.titleParagraph?this.props.titleParagraph: 
                                "Missing props 'titleParagraph', Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam totam excepturi eum hic ipsam praesentium ducimus, suscipit voluptates dolorum pariatur officiis sed rem deserunt fuga quisquam cupiditate molestiae non rerum?"
                            }
                        </p>
                        {this.props.button?this.props.button:null}

                    </div>
                    <div className="right-image">
                        <img src={this.props.imageSrc? this.props.imageSrc:"https://via.placeholder.com/150" }alt="placeholder"></img>
                    </div>
                    
                </div>
                <p className="global-title-paragraph"></p>
            </div>
        )
    }
}

export default TitleUnit;