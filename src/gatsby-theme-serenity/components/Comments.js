import React, {Component} from 'react';

export default class Comments extends Component {
    
    render() {
    return (
           <div>
            <script src="https://utteranc.es/client.js"
                repo="pchason/paulchason.com-gatsby-netlify"
                issue-term="pathname"
                theme="github-light"
                crossorigin="anonymous"
                async>
            </script>
           </div>
           );
    }
}