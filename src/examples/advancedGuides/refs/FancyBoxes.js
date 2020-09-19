import React from "react";

const PopUp = React.forwardRef((props, ref) => {
    class NoName extends React.Component {
        render() {
            return (
                <div>
                    <div style={{
                        height: "50%",
                        width: "70%",
                        display: (props.isOpen ? "" : "none"),
                        position: "absolute",
                    }}>
                        <div style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            height: "20em",
                            width: "30em",
                            border: "1px solid black",
                            position: "relative",
                            padding: 4,
                            backgroundColor: "#c1bbbb"
                        }}>
                            <h2>{props.caption}</h2>
                            <p>{props.description}</p>
                            <fieldset>
                                <input type="text" ref={ref} placeholder="First input with autofocus"/>
                            </fieldset>
                            <fieldset>
                                <input type="text" placeholder="Input without focus"/>
                            </fieldset>
                            <fieldset>
                                <input type="text" placeholder="Input without focus"/>
                            </fieldset>
                            <button onClick={props.handleClose}>Close</button>
                            <button onClick={props.handlePrevious}>Previous</button>
                            <button onClick={props.handleNext}>Next</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return <NoName/>;
});

const steps = [
    {caption: "Step 0", description: "Description step 0"},
    {caption: "Step 1", description: "Description step 1"},
    {caption: "Step 2", description: "Description step 2"},
    {caption: "Step 3", description: "Description step 3"},
];

export default class FancyBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.firstAutoFocus = null;
        this.setAutoFocusElement = (element) => {
            this.firstAutoFocus = element;
        };
        this.state = {
            isOpen: props.isOpen,
            currentStepNumber: 0
        }
    }

    setAutoFocus = () => {
        if (null !== this.firstAutoFocus) {
            this.firstAutoFocus.focus();
        }
    }

    handleOpenCurrentStep = () => {
        this.setState({
            isOpen: true
        });
    }

    handleCloseCurrentStep = () => {
        this.setState({
            isOpen: false
        });
    }

    handleNextStep = () => {
        this.setState((state) => {
            const nextNumber = state.currentStepNumber + 1;
            if (nextNumber >= steps.length) {
                return {};
            }
            return {
                currentStepNumber: nextNumber
            }
        });
    }

    handlePreviousStep = () => {
        this.setState((state) => {
            const previousNumber = state.currentStepNumber - 1;
            if (previousNumber < 0) {
                return {};
            }
            return {
                currentStepNumber: previousNumber
            }
        });
    }

    componentDidMount() {
        this.setAutoFocus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setAutoFocus();
    }

    render() {
        const caption = steps[this.state.currentStepNumber].caption;
        const description = steps[this.state.currentStepNumber].description;
        return (
            <div>
                <p>Each step set up focus on first input element on popup through forwardRef.</p>
                <p>Internal steps does not store, i.e. focus and data inputs does not store between steps switch </p>
                <p>Step: {this.state.currentStepNumber}</p>
                <PopUp
                    caption={caption}
                    description={description}
                    ref={this.setAutoFocusElement}
                    isOpen={this.state.isOpen}
                    handleClose={this.handleCloseCurrentStep}
                    handleNext={this.handleNextStep}
                    handlePrevious={this.handlePreviousStep}
                    setAutoFocus={this.setAutoFocus}
                />
                <button onClick={this.handleOpenCurrentStep}>Open</button>
            </div>
        );
    }
}