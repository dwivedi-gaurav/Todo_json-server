import React from 'react';

export const renderDelay=(Component)=>{
    return class RenderDelay extends React.Component {
      state = {
        delay: true,
      };
      componentDidMount() {
        this.setState({ delay: false });
      }
      render() {
        if (this.state.delay) return null;
        return <Component {...this.props} />
      }
    }
}