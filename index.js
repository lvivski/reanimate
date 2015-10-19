import React from 'react'
import Anima from 'anima'

let world

export default class Reanimate extends React.Component {
    constructor(props) {
        super(props)
        if (!world) {
			world = Anima.world()
		}
    }

    componentDidMount() {
        this.item = world.add(this.refs.element.getDOMNode())
        this.item.animate(this.props.animation)
    }

    componentWillReceiveProps(props) {
        this.item.animate(props.animation)
    }

    componentWillUnmount() {
        var index = world.items.indexOf(this.item)
        if (index !== -1) {
            world.items.splice(index, 1)
        }
    }

    render() {
        return (
            <div ref="element">
                {this.props.children}
            </div>
        )
    }
}
