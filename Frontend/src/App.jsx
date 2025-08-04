import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import axios from "axios";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import "prismjs/components/prism-javascript";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum(){
  return 1+1;
}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const res = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });

    // Wrap response in Markdown code block format if not already
    setReview(res.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid gray",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        <div className="right">
          <Markdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {review}
          </Markdown>
        </div>
      </main>
    </>
  );
}

export default App;







// import { useState, useEffect } from "react"
// import "prismjs/themes/prism-tomorrow.css"
// import Editor from "react-simple-code-editor"
// import prism from "prismjs"
// import Markdown from "react-markdown"//cd Frontend npm i react-markdown

// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
// import axios from "axios";// npm i axios , npm i cors kro
// import "prismjs/components/prism-javascript"
// import './App.css'

// function App() {

//   const [code, setCode] = useState(`function sum(){
//   return 1+1
// }`)

//   const [review , setReview] = useState(``)

//     useEffect(() => {
//       prism.highlightAll()
//     },[])

//     async function reviewCode() {
//       const res = await axios.post('http://localhost:3000/ai/get-review' , {code})
//       // setReview(res.data)
//       const formatted = `\`\`\`js\n${res.data}\n\`\`\``;

//   setReview(formatted);
//     }

//   return (
//     <>
//       <main>
//         <div className="left">
//           <div className="code">
//             <Editor
//               value={code}
//               onValueChange={code => setCode(code)}
//               highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
//               padding={10}
//               style={{
//                 fontFamily: '"Fira code", "Fira Mono", monospace',
//                 fontSize: 16,
//                 border: '1px solid #ddd',
//                 borderRadius: '5px',
//                 height: '100%',
//                 width: '100%',
//               }}
//             />
//           </div>
//           <div 
//             onClick={reviewCode}
//              className="review">Review</div>
//         </div>
//         <div className="right">
//           <Markdown
//            rehypePlugins = {[ rehypeHighlight ]}
//           >{review}</Markdown>
//         </div>
//       </main>
//     </>
//   )
// }


// export default App
