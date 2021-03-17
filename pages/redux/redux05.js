import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../redux/actions";
import { Button } from "antd";
import { bindActionCreators } from "redux";
import MyLayout from "../../components/MyLayout";

@connect(
    state => ({ count: state.count }),
    dispatch => bindActionCreators({ increment, decrement, reset }, dispatch)
)
class Page extends Component {
    render() {
        const { count, increment, decrement, reset } = this.props;
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

export default Page;
