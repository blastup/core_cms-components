import React from "react"

export default class Loader extends React.Component {
  render(){
    return(
      <div className="preloader-wrapper small active center m-l-10 theme-options-loader">
        <div className="spinner-layer">
          <div className="circle-clipper link left">
            <div className="circle"/>
          </div>
          <div className="gap-patch">
            <div className="circle"/>
          </div>
          <div className="circle-clipper right">
            <div className="circle"/>
          </div>
        </div>
      </div>
    )
  }
}
