// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    }
    handleDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    }
    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;

        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}


export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
    })
)(CounterContainer);

// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = (state) => ({
    number: state.counter.number
});

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
})