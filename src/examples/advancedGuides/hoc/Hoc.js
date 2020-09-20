import React from "react";
import {DataSource} from "./DataSource";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function hocExample(WrappedComponent, selectData) {
    class Hoc extends React.Component {
        dataPropName = 'data';

        constructor(props) {
            super(props);
            if (props.dataPropName !== undefined) {
                this.dataPropName = props.dataPropName.toString();
            }
            this.state = {
                [this.dataPropName]: selectData(DataSource, props),
            }
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChanges)
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChanges)
        }

        handleChanges = () => {
            this.setState({
                [this.dataPropName]: selectData(DataSource, this.props)
            })
        }

        render() {
            return <WrappedComponent data={this.state[this.dataPropName]} {...this.props}/>;
        }
    }

    Hoc.displayName = `Hoc(${getDisplayName(WrappedComponent)})`;
    return Hoc;
}