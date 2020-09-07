import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Input temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.props.onTemperatureChange}/>
                {this.props.children}
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Water will boiling</p>
    }
    return <p>Water will not boiling</p>
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        }
    }

    handleCelsiusChange = (e) => {
        this.setState({
            temperature: e.target.value,
            scale: 'f',
        });
    }

    handleFahrenheitChange = (e) => {
        this.setState({
            temperature: e.target.value,
            scale: 'c',
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <>
                <BoilingVerdict celsius={parseFloat(celsius)}>
                </BoilingVerdict>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}>
                    <div>some children element</div>
                </TemperatureInput>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
            </>
        );
    }
}

