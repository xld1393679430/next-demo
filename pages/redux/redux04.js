import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions";
import { Button } from "antd";
import MyLayout from "../../components/MyLayout";

class Page extends Component {
    increment = () => {
        this.props.dispatch(increment());
    };

    decrement = () => {
        this.props.dispatch(decrement());
    };

    reset = () => {
        this.props.dispatch(reset());
    };
    render() {
        const { count } = this.props;
        return (
            <MyLayout>
                <style jsx>{`
                  div {
                    padding: 0 0 20px 0;
                  }
                `}</style>
                <h1>
                    Count: <span>{count}</span>
                </h1>
                <Button type="primary" onClick={this.increment}>
                    当前counter +1
                </Button>
                <Button type="primary" onClick={this.decrement}>
                    当前counter -1
                </Button>
                <Button type="primary" onClick={this.reset}>
                    当前counter Reset
                </Button>
            </MyLayout>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Page);
