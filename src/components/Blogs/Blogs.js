import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <b>What is the purpose of Context API?</b> </Accordion.Header>
                    <Accordion.Body>
                        <p>The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

                        <p>React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="1">
                    <Accordion.Header> <b>What is Semantic Tag? Explain with some examples. </b> </Accordion.Header>
                    <Accordion.Body>
                        <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.</p>

                        <p>Elements such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> and <code>&lt;article&gt;</code> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code> act more or less like <code>&lt;div&gt;</code> elements. They group other elements together into page sections. However where a <code>&lt;div&gt;</code> tag could contain any type of information, it is easy to identify what sort of information would go in a semantic <code>&lt;header&gt;</code> region.</p>

                        <h5><b>List of new semantic elements:</b></h5>
                        <p>The semantic elements added in HTML5 are:</p>
                        <ul>
                            <li><code>&lt;article&gt;</code></li>
                            <li><code>&lt;aside&gt;</code></li>
                            <li><code>&lt;details&gt;</code></li>
                            <li><code>&lt;figcaption&gt;</code></li>
                            <li><code>&lt;figure&gt;</code></li>
                            <li><code>&lt;footer&gt;</code></li>
                            <li><code>&lt;header&gt;</code></li>
                            <li><code>&lt;main&gt;</code></li>
                            <li><code>&lt;mark&gt;</code></li>
                            <li><code>&lt;nav&gt;</code></li>
                            <li><code>&lt;section&gt;</code></li>
                            <li><code>&lt;summary&gt;</code></li>
                            <li><code>&lt;time&gt;</code></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="2">
                    <Accordion.Header> <b>What is difference between inline, inline-block and block elements?</b> </Accordion.Header>
                    <Accordion.Body>
                        <h5><b><u>Inline:</u></b></h5>
                        <ul>
                            <li>Displays an element as an inline element. Any height and width properties will have no effect.</li>
                            <li>The element does not start on a new line and only occupy just the width it requires. We can not set the width or height.</li>
                        </ul>

                        <h5><b><u>Inline-Block:</u></b></h5>
                        <ul>
                            <li>Displays an element as an inline-level block container. We can set height and width values.</li>
                            <li>It is formatted just like the inline element, where it does not start on a new line. BUT, we can set width and height values.</li>
                        </ul>
                        <h5><b><u>Block:</u></b></h5>
                        <ul>
                            <li>Displays an element as an block element. The entire width of that particular element will be blocked!</li>
                            <li>The element will start on a new line and occupy the full width available. And we can set width and height values.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    );
};

export default Blogs;