// import React from "react";
// import Input from './Input';

// function AddButton(){
//     return(
//         <div id="AddRecipe">
//         {this.state.clicked ? (<Input />): (<button onClick={this.handleClick}> Add Recipe </button> )}
//         </div>
//     )
// }

// class AddButton extends React.Component{
//     constructor(){
//         super();

//         this.state = {
//             clicked: false
//         };

//         this.handleClick = this.handleClick.bind(this);

//     }
//     handleClick() {
//         this.setState({
//             clicked:true
//         });
//     }
    
//     render(){
//         return(
//             <div id="AddRecipe">
//             {this.state.clicked ? (<Input />): (<button onClick={this.handleClick}> Add Recipe </button> )}
//             </div>
//         )
//     }
// }

// export default AddButton;