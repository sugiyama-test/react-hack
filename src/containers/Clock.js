import React, { Component } from 'react';

//時計のコンポーネント
export default class Clock extends Component {
    constructor (props) {
        super(props);
        // 状態の初期化
        this.state = {
            now: (new Date())
        }

        // 毎秒状態を更新する
        setInterval(() => {
            this.setState({ now: (new Date()) });
        }, 1000);
    }

    // 描画内容を返す
    render () {
        const now = this.state.now;
        const hh = now.getHours();
        const mm = now.getMinutes();
        const ss = now.getSeconds();
        return (
            <div className='Stopwatch margin-50'>
                <div className='clock'>{hh}:{mm}:{ss}</div>
            </div>
        )
    }
}