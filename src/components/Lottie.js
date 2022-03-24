import React from 'react';
import PropTypes, { arrayOf } from 'prop-types'
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';
import { Flex } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';

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
				frames: [0, 897]
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
        this.interactive.actions[0].frames = (this.props.frames.includes('-')) ? this.props.frames.split('-') : [0, parseInt(this.props.frames)];
    }

    this.state = { lottie: null, animationData: null };
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }

  componentDidMount() {
    this._asyncRequest = fetch(this.props.src)
		.then(res => res.json())
		.then(animationData => {
			this._asyncRequest = null;
			this.setState({animationData})})
		.catch(err => console.warn(err));
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.abort();
    }
  }

  render() {
	return (<Flex justify={'center'} align={'center'} m={'auto'} w={{base: 'xs', sm: 'sm', md: '360px', lg: '460px'}} h={{base: 'auto', md: '360px', lg: '460px'}}>
		{ (this.state.animationData) && 
		<Player
			ref={this.myRef}
			id={this.props.id}
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
			src={this.state.animationData}
		></Player> || 
		<Spinner thickness={4} speed={'0.65s'} color={'secondary.500'} emptyColor={'gray.200'} size={'xl'} />} 
	</Flex>);
  }
}

Lottie.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.string,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    controls: PropTypes.bool,
    interactive: PropTypes.string,
    frames: PropTypes.string,
    mode: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.object)
}

Lottie.defaultProps = {
    autoplay: true,
    loop: true,
    controls: false,
}

export default Lottie;
