import React , {Component} from 'react';
import {}  from 'react-bootstrap';

export default class GenelalButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      name: '',
    };
    //明示的にbind
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  styles() {
    return {
      container: {
        display: 'inline-block',
        fontSize: '20px',
        textDecoration: 'none',
        transition: '.3s',
      },
      default: {
        color: '#000',
        border: '2px solid #000',
        padding: '25px 40px',
      },
      Hover: {
        color: '#000',
        transition: '.5s',
        borderRadius: '15px',
        border: '2px solid #000',
        background: 'rgba(255,255,255, .4)',
        padding: '25px 40px',
      }

    };
  }

  // カーソルが乗った時に状態を変更するイベントハンドラ
  onMouseEnter() {
    this.setState({hovered:true});
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({hovered:false});
  }


  render() {
    const styles = this.styles();
    // 状態に応じてスタイルを変更する
    const likeStyle = this.state.hovered ? styles.Hover : styles.default;
    return (
      <div style={styles.container}>
        <div
          style={likeStyle}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <i className={this.props.icon}></i> {this.props.title}
        </div>
      </div>
    );
  }

}