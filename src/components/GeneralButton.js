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
        display: "inline-block",
        fontSize: "20px",
        textDecoration: "none",
        transition: ".3s"
      },
      default: {
        background: "linear-gradient(to bottom, #36d1dc, #38d1d6)",
        border: "none",
        color: "#fff",
        fontFamily: "cursive",
        padding: "25px 40px"
      },
      Hover: {
        background: "linear-gradient(to bottom, #36d1dc, #fffde4)",
        borderRadius: "15px",
        border: "none",
        color: "#000",
        fontFamily: "cursive",
        padding: "25px 40px",
        transition: ".5s"
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