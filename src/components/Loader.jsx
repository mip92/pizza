import ContentLoader from "react-content-loader";
import React from "react";

let Loader = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">

            <circle cx="140" cy="155" r="130"/>
            <rect x="10" y="290" rx="6" ry="6" width="260" height="25"/>
            <rect x="10" y="400" rx="6" ry="6" width="125" height="50"/>
            <rect x="10" y="325" rx="6" ry="6" width="260" height="63"/>
            <rect x="145" y="400" rx="6" ry="6" width="125" height="50"/>
        </ContentLoader>)
}
export default Loader