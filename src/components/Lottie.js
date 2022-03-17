import React from 'react';
import PropTypes, { arrayOf } from 'prop-types'
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

class Lottie extends React.Component {
  constructor(props) {
    super(props);

    let interactives = {
		playOnScroll: {
			mode:"scroll",
			actions: [
				{
					visibility: [0, 1.0],
					type: "play"
				}
			]
		},

		syncWithScroll: {
			mode:"scroll",
			actions: [
			{
				visibility:[0.35, 0.65],
				type: "seek",
				frames: [0, 100]
			},
			]
		},
		
		playOnHover: {
			mode:"cursor",
			actions: [
				{
					type: "hover",
					forceFlag: false
				}
			]
		},
		
		playOnHold: {
			mode:"cursor",
			actions: [
				{
					type: "pauseHold"
				}
			]
		},
		
		playOnHold2: {
			mode:"cursor",
			actions: [
				{
					type: "hold"
				}
			]
		},

		playOnClick: {
			mode:"cursor",
			actions: [
				{
					type: "click",
					forceFlag: false
				}
			]
		},
		
		toggleOnClick: {
			mode:"cursor",
			actions: [
				{
					type: "toggle"
				}
			]
		},
		
		cursorSeekVertical: {
			mode:"cursor",
			actions: [
				{
					position: { x: [0, 1], y: [0, 1] },
					type: "seek",
					frames: [0, 100]
				}
			]
		},
		
		cursorSeekHorizontal: {
			mode: 'cursor',
			actions: [
				{
					position: { x: [0, 1], y: [-1, 2] },
					type: 'seek',
					frames: [0, 100]
				}
			]
		}
	}

    this.interactive = null;
    if (this.props.interactive && interactives[this.props.interactive]) {
        this.interactive = interactives[this.props.interactive];
    } else if (this.props.mode && this.props.actions) {
        this.interactive = {
            mode: this.props.mode,
            actions: this.props.actions,
        }
    }

    if (this.props.frames && this.interactive && this.interactive.actions) {
        this.interactive.actions[0].frames = (typeof(this.props.frames) == "number") ? [0, this.props.frames] : this.props.frames;
    }

    //strip the id from the file name if it is not given
    this.id = (this.props.id ? this.props.id : this.props.src.match(/(.*).json/)[1] );
    if (this.id.match(/(.*)\/(.*)/)) { this.id = this.id.match(/(.*)\/(.*)/)[2] };
    //if (this.interactive) { this.interactive.player = "#" + this.id };

    this.state = { lottie: null };
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }

  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
   /* if (this.interactive) {
        const interactive = this.interactive;
        this.myRef.current.addEventListener('load', function (e) {
            create(interactive);
        });
    }*/
  }

  render() {
    return (
      <div className="lottie-anim">
			<Player
				ref={this.myRef}
				id={this.id}
				lottieRef={(instance) => {
					this.setState({ lottie: instance }); // the lottie instance is returned in the argument of this prop. set it to your local state
				}}
				onEvent={(event) => {
					if (this.interactive && event === "load") {
						create({player: this.state.lottie, ...this.interactive});
					}
				}}
				autoplay={this.props.autoplay ? true : null}
				loop={this.props.loop ? true : null}
				controls={this.props.controls ? true : null}
				src={this.props.src}
			></Player>
      </div>
    );
  }
}

Lottie.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.string,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    controls: PropTypes.bool,
    interactive: PropTypes.string,
    frames: PropTypes.oneOfType([arrayOf(PropTypes.number), PropTypes.number]),
    mode: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.object)
}

Lottie.defaultProps = {
    autoplay: true,
    loop: true,
    controls: false,
}

export default Lottie;
