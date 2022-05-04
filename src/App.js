import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react';
function App() {
    const [body,setBody] = useState("");
    console.log(body);
    return (
        <div className="App">
            <ReactQuill
                placeholder={"some thing like .... "}
                value={body}
                onChange={(e)=>setBody(e)}
                modules={App.modules}
                formats={App.formats}
            />
        </div>
    );



}

App.modules = {
    toolbar:[
        [{header:"1"},{header:"2"},{header:[3,4,5,6]},{font:[]}],
        [{size:[]}],
        ["bold","italic","underline","strike","blockquote"],
        [{list:"ordered"},{list:"bullet"}],
        ["link","image","video"],
        ["clean"],
        ["code-block"],
    ],
};
App.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
]

export default App;
