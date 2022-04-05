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



                {/* <Accordion.Item eventKey="2">
                    <Accordion.Header> <b>What is difference between inline-block and block elements?</b> </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </div >
    );
};

export default Blogs;