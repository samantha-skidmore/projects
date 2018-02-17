/* Redux Purpose:  To provide a global state.  What makes up Redux...What are the 4 components of Redux?
All of these have to manage data flow across our App.
Dispatcher
Store (The Store is the object that the Reducers generate.  It is made up of Reducers)
Action 
The View
The order that the data goes between the 4 things above:  Action => Dispatcher => Store => View => Back to Action

Redux will contain:
Array of Data
Actions that let us change the state (Functions)
Example:  Add, Edit, Delete (Action Creators)

Passing the "Add" Function from the Store to the Form through Props.

Store the array of data as a property in the store

Diagram:
Each Item (lines) from the SuperDad/Redux is passing information to the items within the App (Form, List, List Items, Edit Form, Etc. Etc. Etc.)

Each of these items is receiving the actions through Props.

This way we don't have to store everything in an App and then pass these things through other components who don't need those actions.

Step 1:  create-react-app .
Step 2:  Delete src and re-create src
Step 3:  Redux Folder which is a sibling to App/
Step 4:  Write the thing on store that we are going to have (recipes.js) in Redux folder
Step 5:  

The rootReducer is the main reducer which is in the index.js of the Redux folder.  

The recipesReducer has a prevState which by default is an empty array, it takes an action.  It has a switch statement that checks the action type and for now we are going to make it default: return prevState;

The job of a reducer is to take whatever the previous state was and an action and return a new state.  

export default recipesReducer;

The dispatcher is hidden under the hood.  When we use Connect that is what connects the dispatcher to the server room.

We have our Store and we have everything set up for it's global state.  If we want to have this connect to react what are the components that we need ?
    import react from react
    import reactdom from reactdom
    import app from app
    reactdom.render(
    
what component do we wrap around the <App />?  PROVIDER
Now our App has access to the store for later.  Now we can start building the App.

The following has been started:

*********
src/index.js

import React from "react";
import ReactDOM from "react-dom";

//redux
import {Provider} from "react-redux";
import store from "./Redux";

import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

*********


src/Redux/index.js

import {createStore, combineReducers} from "redux";
import recipes from "./recipes";

const rootReducer = (combineReducers({recipes}));
//now we need to create the store



export default store;


*********


src/Redux/recipes.js:

const recipesReducer = (prevRecipes = [], action) => {
    switch (action.type) {
            return prevState;
//We will be having different cases and action types later on but this is what we start with

export default recipesReducer;


*********

Now setting up the App/index.js 
Making a functional component and the div and export default App.  Write Test in the Div to see if we can see it in the browser and type NPM Start

Lost some video but we have started the Form.js in the "shared" folder

destructure state under the render in the Form.js:
let { name, category, cookTime } = this.state.inputs;

export default Form
*********
This is what this Form.js looks like right now:
/src/shared/Form.js

import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        let { name, category, cookTime } = props;
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || "",
                
                
            }
        }
        
    }
    
    render() {
        let { name, category, cookTime } = this.state.inputs;
        return (
                <form onSubmit={this.handleSubmit}>
                    <input value={name} name="name" type="text"  />
                    <input value={category} name="category" type="text"  />
                    <input value={cookTime} name="cookTime" type="text"  />
                    
                    </form>
    
                )
            }
        }
        
        export default Form;
*********

We have our different inputs now.  We need to give them values so we are going to destructure state (see the last paragraph of notes above) and we are continuing the notes from that point here:

We are now giving values to the inputs
<input value={name} etc. etc.

The next thing now that we have set up the form we need to write our event handlers:
handleChange(e) {

}
now we are destructuring the event into their things.  The "e" is for event:
let {name, value} = e.target;
this.setState((prevState) => {
    return ...


    the brackets around [name] in the handleChange is a dynamic way of referring to the properties above:
        inputs: {
            name: name || "",
            category: category || "",
            cookTime: cookTime || ""
        }
})

Because the Form as it is in shared, is just a template.  We don't know whether or not we need to add a recipe or edit a recipe.  WE don't know what action creator to use here.  It is a template for the form.  It is handling for both adding and editing. We are going to use this form in a bunch of places.

We are still able to add and edit this form component.  We are going to connect our Form to Redux and get both "edit" and "add" functions and I am going to pass in a prop called either "add" or "edit" in the App/index.js <Form add  ></Form>

handleSubmit(e) {
    e.preventDefault();
    //check whether props includes "edit" or "add" and call the corresponding action creator.

    This way when I need to render a particular form I don't have to pass the function into the form manually from above.  I am going to have redux do it.  This way I can tell it what kind of form to be and therefore whether to clear it or not.

    In order for this to work I have to go back to redux and connect it to Redux and we have to have something to get from Redux.  We are now going back to Redux to write the actual action creator so we can actually write data.

    Redux/recipes.js 
    Inside the switch statement is where we are going to handle state changes and it's down just above the export default recipesReducer that we are going to write the ac
}

We don't know which action creator to use here so we have to use a prop called SUBMIT to be a placeholder.
    this.props.submit(this.state.inputs)

The "inputs" are from above:  name, category, cookTime
this.props.submit and we are passing in this.state.inputs

this is the object that we are submitting so whether it is an add or an edit those inputs don't change whether through the add form or the edit form which are the same.

Then we can clear the inputs if we want to.  In an edit form we don't want to clear the inputs because we just want to edit the information.  We also want to clear if we are adding something new because we don't want to have to erase everything just to type something new.

We can clear inputs with a prop called "CLEAR".  This function is available if we need to clear the inputs:
clearInputs() {
    this.setState({
        inputs: {
            name:"",
            category: "",
            cookTime: ""
        }
    })
} 

So based on what we have in props it will clear or it won't.  


recipes.js
so the:
export default recipesReducer is for the stores purposes.
export const addRecipe = () is for the views purposes.

in the () is the parameter.  What am I providing the action creator/payload (recipe) and what is the job of the recipe?  It's to create the action which is an object.

Every action has a type as a property.  My type is called ADD_RECIPE and it has a payload of "recipe"

EDIT RECIPE SIMILAR WAY AS ABOVE
export const editRecipe = (updatedRecipe, index or ID - if we have an ID) => {
    returns an object with a type of "EDIT_RECIPE"
}
Samantha to notice that below the type: "ADD_RECIPE" AND "EDIT_RECIPE" it has the same information as the export const addRecipe = line
EXAMPLE:    type: "ADD_RECIPE",
            recipe

            type: "EDIT_RECIPE",
            updatedRecipe,
            index


For the "ADD_RECIPE" case what is my logic here?  How do I add a recipe?

We need to add the recipe to the array so I am going to copy my ...prevRecipe into an array but I am going to add what to the end?  action.recipe]

Now we do our case for the "EDIT_RECIPE":
    case "EDIT_RECIPE":
        return what array method should we use?
        return [...prevRecipes].map((recipe, i) => {
            if... 
What do we have available to us with the payload of the action?  What do we want to do if this index matches the action index?  We want to replace what is there.

if i = action.index then return the updated recipe.  Otherwise, return the recipe as normal as it already is.

(The above is in recipes.js file)

Now that the action creators exist and they change state accordingly (see recipes.js line 6-16 with the add and edit recipes)...  We are now going to export these to our Form.

Now in the Form.js we are now going to connect the action creators from recipe.js to the form.js   What function do we need from React-Redux in order to join my form with redux?  CONNECT  in the form... 
import { connect } from "react-redux"; 
Now I need to import the action creators.  and then what is the syntax for things that are exported in this way?  Not by default.  Just exported.

export is different then export by default

We do it by "import {addRecipe, editRecipe} from "../Redux/recipes.js";  

Add Recipe and Edit Recipe we now have available to us in the Form from the recipes.js file in Redux.  

Now we want to connect this to props.  We do this by connecting the action creators to props.

At the bottom of the Form.js  There is function that I need if I need something from State.  Do I need something from state?  Yes 

Connect takes two arguments: 

We can do
export default connect(state => state) this does work but it is very possible that "state" will be huge (ours isn't)so there is a better way to do it:

const mapStateToProps = (state)=>{
    return { recipes: state.recipes }
}
export default (connect())

We are now getting our entire list of recipes back and with the edit we are only wanting a particular object from there.  

Since we don't have access to props.index down at the bottom as it is only known inside the class.

The bottom of Form.js from the const MapStateToProps to the last line of export default connect() is all the Redux stuff.

We were mapping state to props and now we have to check if our props has an add or edit string and we are going to call the corresponding function as part of our submit action.

First we are going to the last line:
export default connect(mapStateToProps, ) 

We are first going to take mapStateToProps and puts it into an object
but we also need to connect the actions to props.  Which we imported at the top.  That is just as simple as providing a new object to the Form.  So mapStateToProps is an object and {} is an object and we need to put in a bigger object.  The {} needs to call the functions that we have above which are {addRecipe, editRecipe} 
export default connect(mapStateToProps, {addRecipe, editRecipe}) 
Connect has just made one big object out of two smaller objects.  Now we have to tell it which component should I put this into through Props and this is where we tell it (Form)

export default connect(mapStateToProps, {addRecipe, editRecipe})(Form)

Lost some video: Nothing in new in crud redux react router 3 or part 4:

Video #5

Lets see if our input works now totally.  Do you guys remember what that built-in function was in Redux that led us to the state everytime it changed?  Subscribe

It's not necessary for the App to work but if we want to keep track of our state this is really nice.  Go to the index.js in Redux Folder:

store.subscribe(() => {
    console.log(store.getState());
})

This will allow us to see if we add something to the array or when I call the add action creator I should see the state change with the new ite added.

Put everything above Exports and everything below imports as a general rule

Placeholders is what we see in the input box.

RE-CAPPING WHAT WE DID:
Redux
    We created our state which contains recipe.
    We created our store based on that
    
RecipesReducer
    It handles all of the actions that could affect our array.
    Add Recipe and Edit Recipe was created

We export the recipes to the form along with state so that we can call the submit conditionally based on the kind of form it is (Add or Edit)

We then imported the recipes into props and the index  to handle potential edits.

In Hind Sight we could have done all of the editing later and just did the add part of the form.  But we made a form that can handle the adding and editing.

The Next Steps:
Go to our App
Create a list component which will be attached to the Redux State where we get our array.  We will render a bunch of individual recipe components using that data.
Create a individual Recipe Component
We will then write the delete function in here (looks like he is in the App index.js) and pass it to the individual recipe component and then inside the recipe component call the form not just as the add form but the edit form as well and pass it the necessary information.

When adding an API to the mix we would then have to do componentDidMount etc. and then we will be working with our own databases when we get to the backend.  

Part 6

Creating a "Recipes" folder with an index.js.  The job here is to create individual Recipe Components.

But we haven't made the Recipe Component yet (at this point) 

I am going to get my array from Props.  How do I stick that array into Props using Redux?  Connect
import { connect} from "react-redux";

What do we need from Connect/Redux?  
const mapStateToProps = (state) => {
    return {recipes: state.recipes }
}
State is the result of the combined reducers

How does my Connect Work?  What is the syntax for connect?

export default connect(mapStatetoProps, {})(Recipes);

Explain Above:
Do we need any action creators if we are just rendering a list?  No.  Why?  There is no actions to occur.  We are just generating a list of objects so Connect still needs a 2nd argument but it will be an empty object {} which is fine.  Connect returns a function and we call that function with (Recipes); as the argument and it produces Recipes with the new props added to it.  

If I want to see my recipes then I need to import it.  
In the App/index.js is where he put the <Recipes></Recipes> 

Then adding the line above import Recipes from "./Recipes";
Our Recipes is now on the App and connected to the App and it's just an empty div but hopefully we can see something from props beause of the connect(mapStateToProps, {})(Recipes); in the Recipes/index.js  

Now...what are we going to do with the array? (we are seeing it in the console of the webpage after we enter recipe info in it).

We are going to Map through the Array.  Still in the Recipes/index.js below the function Recipes(props) will be:
let {recipes} = props;
We will destructure recipes.

Bob likes to do the map here and store the variable so that is what we will do:
let recipeComponents = recipes.map((recipe, i) => {
        return <Recipe key={i + recipe.name} {...recipe} index={i}></Recipe>
    })
WE need to make an individual Recipe Component to go with the above "let".  Created a Recipe Folder and then an index.js inside of the Recipes/Recipe/index.js  

This file will be a functional component not a class component because this is where we will set up our template for recipes.  

Now going back to the Recipes/index.js and if I want to use my Recipe component inside of my Recipes component I need to import it.

importRecipe from "./Recipe";

and then I am going to call it at the 
    return <Recipe></Recipe>

What Props should I give this recipe? This recipe is the recipe above that is part of the line:
recipes.map((recipe, i) => { 

The ((recipe, i)  So...What props should I give this recipe?
Redux will yell at us if we don't do what?  Provide a key
on this line:
return <Recipe key={i + recipe.name} {...recipe} index={i}></Recipe> 

We do this so that it is easier for React to find what it needs instead of looping through everything.

We are going to provide the key and the recipe spread which looks like this:
...recipe 

We also need to pass down the ID or the index down to Recipe.  

Now we are going to the Recipe and console.log props and where do we want to put it so we can see it?  In the Div.  We want to see individual props

We are now destructuring Recipe.
Adding some HTML elements like H3 and P Tags

Now we can see it in the browser window with some formatting.

Now... if I want to delete this then I will want a button
I put the button in with an "X" but where is the function going to be for the delete button?  Redux

If I want to get something from Redux how do i do that?  Connect

import {connect} from "react-redux";

I also need the function.  Where do I get the delete function from ?  We haven't written it yet but if we are going to write it where will we write it?  Redux/recipes.js file.  

We go to that file and make a new action:

export const removeRecipe  () => {

}
So, what information do I need to delete a specific one?  The ID or the index.  What data type does this always return (It's an action creator)?  Object and what property does this object have?  A Type and the type is removeRecipe and the payload is index so our action creator now looks like this:

export const removeRecipe = (index) => {
    return {
        type: "REMOVE_RECIPE",
        index
    }

Now we need to go to the reducer and handle the case for when we want to remove a recipe.

Add a case and the type is REMOVE_RECIPE what is a good method to use for removing an object out of an array?  Filter. 
With Edit Recipe we did a map because we wanted the same number of items back.  With filter we want it to return all of the ones back minus the one we removed that matches the ID or index.

It is almost identical to the EDIT_RECIPE Case.  
    We return ...prevRecipes.filter and then we add recipe, i 
    I am going to filter through my recipes and we are going to check if the index or the ID that we are currently on matches the index provided by the action.  So the call back function of filter always returns (what data type? a Boolean) because a filter always has to pass a test...true or false.  

    In this case the only way to pass the test is if your index doesn't match the one that we want to remove.  We want to continue all of the things except the one that is to be removed.  So we are checking that i doesn't match the action.index

    Thats it for the Remove.  This is what it looks like:

    case "REMOVE_RECIPE":
            return [...prevRecipes].filter((recipe, i) => {
                return i !== action.index;
            })
        default:
            return prevRecipes;
    }

    So how do I trigger this delete function?  Pass it down through Props

    We need to import {removeRecipe} from Redux:

    In the App/Recipes/Recipe/index.js we need to import the functions down through props from the Redux/recipes.js by importing into the index.js file in the Recipe Directory.  The lines of code should look like this:

    import { addRecipe } from "../../../Redux/recipes.js";
    import { removeRecipe } from "../../../Redux/recipes.js";
    import { editRecipe } from "../../../Redux/recipes.js";

At the bottom of the App/Recipes/Recipe/index.js we need to connect those imports above to props.  This is what it should look like:
export default connect(null, { removeRecipe }, { addRecipe }, {editRecipe})(Recipe);

We need to connect and do we need state if all we need is a function?  No.
We can just write "Null"

We provide the object containing the functions we want and in this case it is {removeRecipe} and then we wrap our (Recipe) in parenthesis and now we have connected our things.

What we are going to do is if we console.log props and remove recipe should be in the console under the browser.

Now we can call it.  How do we trigger a function call?  onClick

What do we need to provide this function for it to work?  No we need to provide it an index or ID  We need to be careful where we put it because it will call it the moment it reads it so IT CAN'T LOOK LIKE THIS:  <button onClick={removeRecipe(index)}>X</button>

All we need to do is wrap it in a callback function:
this is the simplest most easy way to do it:
<button onClick={() => removeRecipe(index)}>X</button>

So this is how we implement the "remove" 
We get "remove recipes" from Redux via the connect function and then we call it on "onClick" from within this callback function.  

Next and last thing to do for our CRUD operation is the Edit.  

For the sake of time:  Ben didn't do this but I need to make this (App/Recipes/Recipe/index.js) into a class, maintain state and toggle the view.  The purpose of this lesson was Redux.

Where do I get my form from?  The shared folder.  import Form from "../../../shared/Form";

What props does Form have to get for Editing?
We are going to pass in name category and cooktime which is the same thing as:
<Form {...props}></Form>
That way it gets the remove recipe and everything.

How do I tell my form it is an edit form and not an add form?  

From Bob/Databases 1

Schema is a blueprint

We need to create a model that helps us create the database



        
*/