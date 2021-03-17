import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions";
import { Button } from "antd";
import MyLayout from "../../components/MyLayout";

class Page extends Component {
    render() {
        const {count, increment, decrement, reset} = this.props;
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
                <Button type="primary" onClick={increment}>
                    当前counter +1
                </Button>
                <Button type="primary" onClick={decrement}>
                    当前counter -1
                </Button>
                <Button type="primary" onClick={reset}>
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

const mapActionCreators = {
    increment,
    decrement,
    reset
};

export default connect(
    mapStateToProps,
    mapActionCreators
)(Page);
