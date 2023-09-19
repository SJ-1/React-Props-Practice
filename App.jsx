import React from "react";
import Card from "./Card";
import contacts from "./Contacts";

let App = () => {
    return (
        <>
            <div><h1 className="heading">My Contacts</h1></div>
            <Card 
                name = {contacts[0].name}
                img =  {contacts[0].imgURL}
                phn = {contacts[0].phone}
                email = {contacts[0].email}
            />
            <Card 
                name = {contacts[1].name}
                img = {contacts[1].imgURL}
                phn = {contacts[1].phone}
                email = {contacts[1].email}
            />
            <Card 
                name = {contacts[2].name}
                img = {contacts[2].imgURL}
                phn = {contacts[2].phone}
                email = {contacts[2].email}
            />
        </>
    );
}
export default App;
