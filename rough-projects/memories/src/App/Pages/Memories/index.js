import React from "react";
import FamilySearch from "familysearch";

function Memories(props) {
    let client = new FamilySearch({
        client_id: "tuf000141622",
        environment: "integration",
        redirect_uri: "http://localhost:3000/"
    })

    return (
        <div className="Memory">

        </div>
    )
}

export default Memories;
