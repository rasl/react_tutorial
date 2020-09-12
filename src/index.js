import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {default  as TutorialBlock} from "./examples/tutorial/IndexBlock";
import {default as MainConceptsBlock} from "./examples/mainConcepts/IndexBlock";
import {default as AdvancedGuidesBlock} from "./examples/advancedGuides/IndexBlock";
import ErrorBoundary from "./examples/advancedGuides/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <TutorialBlock/>
            <MainConceptsBlock/>
            <AdvancedGuidesBlock/>
        </ErrorBoundary>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
